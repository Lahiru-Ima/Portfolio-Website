"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    console.log("Form Data:", data); // Log form data for debugging

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      console.log("Response Data:", resData); // Log response data for debugging
      if (response.status === 200) {
        console.log("Message sent successfully");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Error sending message:", error); // Log errors
    }
  };

  return (
    <section id="contact" className="lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-14">Contact</h1>
      <div className="grid md:grid-cols-2 my-12 md:my-12 gap-4">
        <div>
          <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I`m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I`ll try
            my best to get back to you!
          </p>
          <div
            className="socials flex flex-row gap-2"
            style={{ filter: "invert(1)" }}
          >
            <Link href={"https://www.linkedin.com/in/lahiru-imanshana/"}>
              <Image
                src="/icons/icons8-linkedin.svg"
                alt="LinkedIn Icon"
                width={30}
                height={30}
              />
            </Link>
            <Link href={"https://github.com/Lahiru-Ima"} target="_blank">
              <Image
                src="/icons/icons8-github.svg"
                alt="Github Icon"
                width={30}
                height={30}
              />
            </Link>
            <Link href={"#"} target="_blank">
              <Image
                src="/icons/icons8-facebook.svg"
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                typeof="email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="test@gmail.com"
              ></input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                typeof="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just wanna say hi"
              ></input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                typeof="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                rows="4"
                placeholder="Type your message here"
              />
            </div>
            <button
              type="submit"
              className="text-black bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className="text-red-500 text-sm mt-2">
                Not Working.Under development!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
