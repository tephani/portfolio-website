"use client";
import React from "react";

const Education = () => {
  const education = [
    {
      date: "Aug 2021 - Present",
      title: "University of Mindanao",
      company: "Bachelor of Science in Computer Science",
      description: "College of Computing Education (CCE)",
    },
  ];

  const experience = [
    {
      title: "Data Owls of the University of Mindanao (2024-current)",
      description: "Founder and CEO",
    },
    { title: "Enigma (2023-2024)", description: "Secretary" },
    {
      title: "College of Computing Education - CSG (2022-2023)",
      description: "President",
    },
  ];

  return (
    <div className="bg-[#181818] p-4 border border-white mt-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-center">
        Education
      </h2>
      {/* <p className="text-[#ADB7BE] pl-6 pt-2 pb-4 text-base sm:text-lg md:text-xl lg:text-2xl">
        in case i add somethin
      </p> */}
      <div className="relative pl-12 space-y-8">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-r from-red-400 to-pink-600 rounded-full"></div>
        {education.map((edu, index) => (
          <div key={index} className="flex items-start">
            {/* <div className="absolute flex-shrink-0">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
            </div> */}
            <div className="ml-10">
              <div className="block text-white font-thin text-xs sm:text-sm md:text-base lg:text-lg">
                {edu.date}
              </div>
              <div className="col-span-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  {edu.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white">
                  {edu.company}
                </p>
                <p className="mb-10 text-xs sm:text-sm md:text-base text-gray-300">
                  {edu.description}
                </p>
                {experience.map((exp, index) => (
                  <div key={index} className="flex items-start">
                    <div className="absolute flex-shrink-0 mb-30">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-10">
                      <div className="col-span-2">
                        <h3 className="text-base sm:text-lg md:text-xl text-white">
                          {exp.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-300">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <br></br>
                <p className="text-lg italic underline text-white">
                  Dean's Lister
                </p>
                <ul className="text-sm text-white pl-4 pt-3 list-disc marker marker:text-pink-400">
                  <li>First Honor, A.Y 2023-2024</li>
                  <li>First Honor, A.Y 2022-2023</li>
                  <li>First Honor, A.Y 2021-2022</li>
                </ul>
                <br></br>
                <p className="text-lg italic underline text-white">
                  Honors & Awards
                </p>
                <ul className="text-sm text-white pl-4 pt-3 list-disc marker marker:text-pink-400">
                  <li>Google Scholar, Granted by DTI 2024.</li>
                  <li>IT Pitching 2nd Place, Awarded by PSITS Region 11 of 2024's IT Olympiad</li>
                  <li>Breakthrough and Achievers Award, Awarded by Office of Student Affairs to the CCE-CSG (A.Y 2022-2023)</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
