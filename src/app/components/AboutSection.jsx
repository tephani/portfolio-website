"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Communication Skills (Verbal & Written)</li>
        <li>Collaborative Behavior</li>
        <li>Curiosity</li>
        <li>Self-Motivation</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>Writing Stories</li>
        <li>Reading Books</li>
        <li>Drinking Coffee</li>
        <li>Listening to Musicals</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white  border border-[#fffdde] mt-10">
      <div className="md:grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="hero-section image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am currently a third-year Computer Science student with a keen
            interest in Data Science. My focus areas include Analysis,
            Statistics, Machine Learning, and Artificial Intelligence. I also
            have a deep passion for web and mobile development. I explore data
            analytics to drive informed decisions and aim to further my
            expertise in statistics to enhance my skills in machine learning and
            AI. My goal is to create innovative projects that leverage these
            technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "hobbies"}
            >
              {" "}
              Hobbies{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
