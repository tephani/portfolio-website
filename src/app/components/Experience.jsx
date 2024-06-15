"use client";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "Jun 2024 - Present",
      title: "Founder & Chief Executive",
      company: "Data Owls of the University of Mindanao",
      description:
        "Founded and led as CEO of a data science student organization at the University of Mindanao, empowering members through educational initiatives and industry partnerships in the field of data science.",
    },
    {
      date: "May 2024 - Present",
      title: "Community Manager",
      company: "Gen AI Philippines",
      description:
        "Led community engagement efforts for Gen AI Philippines, fostering meaningful interactions and driving advocacy among members passionate about artificial intelligence innovations",
    },
    {
      date: "Mar 2024 - Present",
      title: "Team Outreach",
      company: "DICE - Davao Interschool Computer Enthusiasts",
      description:
        "A part of Team Outreach, elevating awareness of initiatives through innovative marketing and strategic communication.",
    },
  ];

  return (
    <>
      <div className="bg-[#181818] p-4 border border-white mt-10">
        <h2 className="text-4xl font-bold text-white mt-5 text-center">
          Volunteering Experience
        </h2>
        <p className="text-[#ADB7BE] pl-6 pt-2 pb-4">
          As a Computer Science student, I have been actively involved in
          various community tech initiatives, leveraging my passion for
          innovation to drive projects that enhance digital literacy and foster
          collaborative learning among peers and community members alike.
        </p>
        <div className="relative pl-12 space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-r from-red-400 to-pink-600 rounded-full"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start">
              <div className="absolute flex-shrink-0">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
              </div>
              <div className="grid grid-cols-4 gap-4 ml-10">
                <div className="">
                  <span className="block text-white font-thin">{exp.date}</span>
                </div>
                <div className="col-span-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-white">{exp.company}</p>
                  <p className="text-sm text-gray-300">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
