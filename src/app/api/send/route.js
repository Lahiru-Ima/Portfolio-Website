import { Resend } from "resend";
import { NextResponse } from "next/server";


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Request Body:", body); // Log the request body for debugging

    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>I will get back to you as soon as possible</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Email sent successfully:", data); // Log the success response

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error); // Log errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
