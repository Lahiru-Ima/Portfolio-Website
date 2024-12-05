import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center mb-10 lg:px-24 md:px-10">
        <h1 className="text-4xl font-bold mb-14 ">About Me</h1>
        <div className="md:grid md:grid-cols-2 gap-4 items-center py-0 px-2 xl:gap-6 sm:py-10 ">
          <Image
            src="https://gist.github.com/user-attachments/assets/fd8afcf0-8b11-4807-a4da-295ce564c99f"
            alt="hero image"
            width={500}
            height={500}
          ></Image>
          <div className="mt-6">
            <p className="text-base lg:text-lg">
              I`m Lahiru Imanshana, a self-motivated and hard-working individual
              who is passionate about software engineering and mobile app
              development and eager to try out various technologies.
            </p>
            <br />
            <p>
              My enthusiasm for software engineering goes beyond just writing
              code. I am driven by the opportunity to solve real-world problems
              and create solutions that positively impact people`s lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
