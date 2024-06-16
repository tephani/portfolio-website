"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Facial Palette AI for Color Testing",
    description:
      "PRIVATE: This is an ongoing project of mine, a simple web application that utilizes advanced machine learning and AI techniques to analyze facial features and generate personalized color palette recommendations. By uploading a photo, users can get precise identification of key facial recognition technology and the powerful GPT-4 language model, the AI will suggest the most flattering color combinations to enhance your natural beauty. Perfect for fashion consultants, and anyone looking to find their ideal colors, this application combines the art of aesthetics with the precision of artificial intelligence.",
    image: "/images/projects/soon.jpg",
    tag: ["All", "Machine Learning", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Investigating Netflix Movies",
    description:
      "PUBLIC: Utilized Python to address a real-world inquiry: whether the duration of Netflix movies is decreasing overtime. Employed a range of techniques, from basic data structures like lists and loops to advanced libraries like pandas and matplotlib. Leveraged pandas for data manipulation and matplotlib for data visualization, providing insights into trends in Netflix movie durations.",
    image: "/images/projects/netflix.png",
    tag: ["All", "Analytics Study"],
    gitUrl: "https://github.com/tephani/investigating-netflix-movies",
    previewUrl:
      "https://www.datacamp.com/datalab/w/c691f831-c758-4785-962a-e2b8e25663a9/edit",
  },
  {
    id: 3,
    title: "Analyzing Students' Mental Health",
    description:
      "PUBLIC: Analyzed student mental health using SQL to investigate the impact of studying abroad on well-being. Utilized data from a 2018 survey by a Japanese international university, revealing higher mental health risks among international students compared to the general population. Identified social connectedness and acculturative stress as predictors of depression. SQL queries facilitated data extraction and analysis, shedding light on the complex relationship between cultural adaptation and mental health outcomes among students.",
    image: "/images/projects/mental-health.png",
    tag: ["All", "Analytics Study"],
    gitUrl: "https://github.com/tephani/analyzing-student-mental-health",
    previewUrl:
      "https://www.datacamp.com/datalab/w/478a7194-ba20-4bda-a27b-68b08b9499d5/edit",
  },
  {
    id: 4,
    title: "FoKKKus Mobile Application Frontend Developer",
    description:
      "PUBLIC: Developed the frontend of the mobile application using Flutter.",
    image: "/images/projects/fokkkus-light.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/dkeithdj/fokkkus",
    previewUrl:
      "https://www.figma.com/design/nuAHBMmkCnMxTIGMx8m7nP/CST9-Design?node-id=0-1&t=7BB8sWYYKRoD9n6c-1",
  },
  {
    id: 5,
    title: "FoKKKus Mobile Application UI/UX",
    description:
      "PUBLIC: Handled the wire frame and mockup of the mobile application using Figma",
    image: "/images/projects/fokkkus-dark.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/dkeithdj/fokkkus",
    previewUrl:
      "https://www.figma.com/design/nuAHBMmkCnMxTIGMx8m7nP/CST9-Design?node-id=0-1&t=7BB8sWYYKRoD9n6c-1",
  },
  {
    id: 6,
    title: "Tagalog to Baybayin Transcriber",
    description:
      "PUBLIC: Developed a Tagalog to Baybayin transcriber using Java during First Year.",
    image: "/images/projects/baybayin.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/tephani/Baybayin-Application",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects =
    tag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag.includes(tag));

  return (
    <section id="projects">
      <div className="border border-white mt-10">
        <h2 className="text-4xl font-bold text-white mt-5 text-center">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
          <ProjectTag
            onClick={() => handleTagChange("All")}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Analytics Study")}
            name="Analytics Case Study"
            isSelected={tag === "Analytics Study"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Machine Learning")}
            name="Machine Learning"
            isSelected={tag === "Machine Learning"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Web")}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Mobile")}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <div className="py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
