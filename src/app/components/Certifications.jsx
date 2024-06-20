import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Certifications = () => {
  const certifications = [
    {
      link: "https://www.credly.com/badges/6f93e856-6420-480c-ad04-31cb7aa57f7b/public_url",
      image: "/images/certifications/java-database.png",
    },
    {
      link: "https://www.credly.com/badges/ad1efd13-bb29-477c-afd9-de8eede10800/linked_in_profile",
      image: "/images/certifications/java-specialist.png",
    },
    {
      link: "https://www.datacamp.com/skill-verification/DL0026821844411",
      image: "/images/certifications/data-literacy.png",
    },
    {
      link: "https://www.datacamp.com/skill-verification/AIF0028353629564",
      image: "/images/certifications/ai-fundamentals.png",
    },
  ];

  return (
    <section className="text-white">
      <h2 className="text-4xl font-bold text-white mt-10 text-center">
        International Certifications
      </h2>
      <div className="bg-white border border-[#fffdde] mt-1 pb-6 pl-4 pr-4 rounded-lg ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center py-4 px-2 md:px-4">
          {certifications.map((cert, index) => (
            <div key={index} className="relative group mx-auto">
              <img
                src={cert.image}
                alt={`Image ${index + 1}`}
                className="object-cover sm:w-20 sm:h-20 md:w-48 md:h-48 rounded-lg"
              />
              <Link href={cert.link}>
                <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500 rounded-lg">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-10 w-10"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
