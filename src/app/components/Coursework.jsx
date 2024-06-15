import React from "react";
import Link from "next/link";
import Image from "next/image";

const Coursework = () => {
  const experiences = [
    {
      date: "Mar 2024",
      title: "Intermediate SQL",
      description:
        "Learned about the selection of data, filtering of records, aggregating functions, sorting, and grouping.",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9ff124ddb28120e3d5dde1e43219ad037a3f134f",
      photo: "/images/coursework/intermediate-sql.png",
    },
    {
      date: "Dec 2023",
      title: "Intermediate Python",
      description:
        "Learned data visualization with matplotlib, explored dictionaries and pandas DataFrames, and completed the Hacker Statistics Case Study.",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f22e12c2df287fec33836a401b436c7a13ad5284",
      photo: "/images/coursework/intermediate-python.png",
    },
    {
        date: "Nov 2023",
        title: "Understanding Data Science",
        description:
          "Learned the nature of data science, how data is collected and stored, the preparation, exploration, and visualization of data.",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/160c54dc4f81c9da9d3628e3bc099379ae630423",
        photo: "/images/coursework/data-science.png",
      },
  ];

  return (
    <>
      <div className="bg-[#181818] p-4 border border-white mt-10">
        <h2 className="text-4xl font-bold text-white mt-5 text-center">
          Coursework
        </h2>
        <div className="relative pl-12 space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-r from-red-400 to-pink-600 rounded-full"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start">
              <div className="grid grid-cols-2">
                <div className="absolute flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
                </div>
                <div>
                  <div className="ml-8">
                    <span className="block text-white font-thin">
                      {exp.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2">{exp.description}</p>
                  <Link href={exp.link} passHref>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-pink-500  hover:bg-slate-800 text-white mt-1 mb-2">
                      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-sm">
                        Check credentials -&gt;
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="ml-auto">
                  <Image
                    src={exp.photo}
                    className="rounded-full"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Coursework;
