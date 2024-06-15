import React from "react";

const TechStackSection = () => {
  const images = [
    "/images/tech/tableau.png",
    "/images/tech/html-5.png",
    "/images/tech/css-3.png",
    "/images/tech/node.png",
    "/images/tech/java-script.png",
    "/images/tech/github.png",
    "/images/tech/git.png",
    "/images/tech/flutter.png",
    "/images/tech/python.png",
    "/images/tech/R.png",
    "/images/tech/java-logo.png",
    "/images/tech/mysql.png",
    "/images/tech/reactjs.png",
    "/images/tech/next.png",
    "/images/tech/linux.png",
    "/images/tech/linuxmint.png",
    "/images/tech/fedora.png",
  ];

  return (
    <>
      <h2 className="text-4xl font-bold text-white mt-10 text-center">
        Tech Stack
      </h2>
      <p className="text-white font-800 text-sm text-center">
        (encountered so far)
      </p>
      <div className="bg-white rounded-lg p-4 border border-[#fffdde] mt-1">
        <section className="text-white">
          <div className="grid grid-cols-6 gap-4 justify-center py-4 px-2 md:px-4 lg:px-8 xl:gap-8">
            {images.map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg object-contain w-16 h-16 md:w-12 md:h-12 transition duration-500 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default TechStackSection;
