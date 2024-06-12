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
                "in Computer Science",
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
            A Computer Science student with a passion for Data Science,
            Frontend Development, and AI. I'm seeking internships to gain
            industry experience. <br></br>Explore my journey and projects
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
        <div className="col-span-5 place-self-center mb-6 mt-4 lg:mt-0 relative">
          <div className="rounded-full bg-[#fffdde] w-[250px] h-[250px] lg:w-[330px] lg:h-[330px] relative shadow-lg z-10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="rounded-full object-cover"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
