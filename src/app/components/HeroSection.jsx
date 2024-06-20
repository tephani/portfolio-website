"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <section>
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
          Hi, I&apos;m Stephanie,{" "}
        </span>
        <br></br>
        <TypeAnimation
          sequence={[
            "in Computer Science",
            2000,
            "aspiring Data Scientist",
            2000,
            "Frontend Developer",
            2000,
            "Student Leader",
            2000,
            "Founder of DOUM",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <br></br>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10">
        <div className="col-span-5 place-self-center mb-6 mt-4 lg:mt-0 relative z-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[330px] lg:h-[330px] relative shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Image
                src="/images/hero-image-2.png"
                alt="hero image"
                className="rounded-full object-cover"
                width={330}
                height={330}
              />
            </div>
          </div>
        </div>
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">
              Computer Science student
            </span>{" "}
            with a passion for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 font-bold">
              Data Science, Frontend Development, and AI
            </span>
            . I'm seeking internships to gain industry experience. Explore my
            journey and projects.
          </p>
          <div className="flex items-center space-x-4">
            <SocialLinks />
          </div>
          {/* <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-red-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-pink-500  hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
