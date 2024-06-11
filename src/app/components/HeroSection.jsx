"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Stephanie",
                1000,
                "a Data Analyst",
                1000,
                "a Mobile Developer",
                1000,
                "a Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As a Computer Science student with a passion for Data Science and
            Analysis, I've built a solid foundation through academic pursuits
            and personal projects. I thrive in dynamic environments, solving
            complex problems with strong analytical skills and a proactive
            approach. Eager to contribute to innovative projects, I'm actively
            seeking opportunities to apply my knowledge and grow in my career.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-red-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-pink-500  hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mb-6 mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px]  lg:w-[330px] lg:h-[330px] relative shadow-lg">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
