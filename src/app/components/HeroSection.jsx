"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const hireMeClickHandler = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const downloadCVClickHandler = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Lahiru_Munasinghe_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home">
      <div className="flex flex-col">
        <div className="md:grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h3 className="text-white mb-4 text-2xl sm:text-2xl lg:text-3xl font-extrabold">
              Hello, It`s Me
            </h3>
            <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl  font-extrabold relative">
              Lahiru Munasinghe
            </h1>
            <h3 className="text-white mb-4 text-2xl sm:text-2xl lg:text-3xl font-extrabold">
              And I`m a {""}
              <br />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Mobile App Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-slate-200"
              />
            </h3>
            <p className="text-base sm:text-lg mb-6 lg:text-xl">
              I am thrilled to bring my enthusiasm, technical skills and
              non-technical skills to a forward-thinking company. I am confident
              in my ability to quickly learn and adapt to new challenges, with a
              passion for staying up-to-date with the latest technologies and
              industry trends.
            </p>
            <div>
              <button
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-amber-400 hover:bg-slate-200 text-black font-semibold"
                onClick={hireMeClickHandler}
              >
                Hire Me
              </button>
              <button
                className="px-6 py-3 w-full sm:w-fit rounded-full hover:bg-slate-800 text-white border border-white mt-3 mb-3"
                onClick={downloadCVClickHandler}
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="col-span-5">
            <Image
              src="https://gist.github.com/user-attachments/assets/a23496e0-c879-494e-9e17-c10a1d6071e4"
              alt="hero image"
              width={160}
              height={160}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
