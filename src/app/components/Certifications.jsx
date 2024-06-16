import React from "react";
import Link from "next/link";

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
    <>
      <div className=" rounded-lg border border-[#fffdde] mt-1 pb-6 pl-4 pr-4">
        <section className="text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-center">
            Certifications
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center py-4 px-2 md:px-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center">
                <Link href={cert.link}>
                  <img
                    src={cert.image}
                    alt={`Image ${index + 1}`}
                    className="object-cover w-40 h-40 md:w-48 md:h-48 transform scale-100 hover:scale-110"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Certifications;
