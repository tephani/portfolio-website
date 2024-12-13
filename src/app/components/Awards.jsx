import React from "react";
import Link from "next/link";
import Image from "next/image";

const Awards = () => {
  const experiences = [
    {
      date: "December 2024",
      title: "Gen AI in StartUp - Resource Speaker",
      description:
        "Issued by DOST-DNSC BUGSAI TBI and the DNSC Institute of Computing.",
      link: "https://web.facebook.com/share/p/bZc25iiuCLSvvRjZ/",
      photo: "/images/certifications/certs&awards/bugsai.png",
    },
    {
      date: "July 2024",
      title: "Google I/O Extended 2024 Davao",
      description:
        "Issued by GDG Davao as certificate of participating the 2024 Google I/O Extended held at Ateneo Davao University, Davao City.",
      link: "https://www.facebook.com/share/p/oXhHyso5qDKKsvjk/",
      photo: "/images/certifications/certs&awards/googleio2024.png",
    },
    {
      date: "May 2024",
      title: "1st Runner Up: Mindanao-Wide IT Olympiad 2024",
      description:
        "Issued by Commission on Higher Education, Council of Deans for IT Education, and PSITE Davao Region.",
      link: "https://web.facebook.com/share/p/x3v795sS7BkJ7fXM/",
      photo: "/images/certifications/certs&awards/pitching.jpg",
    },
    {
      date: "May 2024",
      title:
        "Certificate of Appreciation - Speaker for sustAInable: Exploring AI for Environmental Monitoring and Conservation",
      description:
        "Issued by the College of Student Education - CSG as appreciation as guest speaker.",
      link: "https://web.facebook.com/share/p/FD2Mx9AR58N8Uz8k/",
      photo: "/images/certifications/certs&awards/speaker.jpg",
    },
    {
      date: "Apr 2024",
      title: "AIDeas for Impact: AI for Innovation and Social Impact Workshop",
      description:
        "Issued by Analytics & artificial Intelligence Association of the Philippines (AAP), Department of Information and Communications Technology - Philippines, ICT Industry Development Bureau.",
      link: "https://www.linkedin.com/posts/activity-7189294287660929025-FGTz?utm_source=share&utm_medium=member_desktop",
      photo: "/images/certifications/certs&awards/aideas.jpg",
    },
    {
      date: "Sep 2023",
      title:
        "1st Davao Student Startup Summit 2023: Sparking Insights and Ideas for Your Next Innovation",
      description: "Issued by DICE - Davao Interschool Computer Enthusiasts.",
      link: "https://dsss2023-certs.dicedvo.org/cert/DSSS2023-by58x3z3wMPVwvFM1bn5",
      photo: "/images/certifications/certs&awards/IDEAS.png",
    },
    {
      date: "Sep 2023",
      title: "AWS Community Day - Davao Roadshow",
      description: "Issued by AWS Community Day Philippines",
      link: "https://www.linkedin.com/in/teptep/details/certifications/1635551069392/single-media-viewer/?profileId=ACoAAEXH4sABJYJMIsBSNW0gKSzihtUGCTDJatM",
      photo: "/images/certifications/certs&awards/aws.png",
    },
    {
      date: "Jul 2023",
      title: "Google I/O Extended 2023 Davao",
      description: "Issued by the Google Developer Group Davao.",
      link: "https://www.linkedin.com/in/teptep/details/certifications/1635551070137/single-media-viewer/?profileId=ACoAAEXH4sABJYJMIsBSNW0gKSzihtUGCTDJatM",
      photo: "/images/certifications/certs&awards/googleio.png",
    },
    {
      date: "Dec 2022",
      title: "Tara ML?: A Zero-to-Hero Machine Learning Journey",
      description: "Issued by the Google Developer Group Manila.",
      link: "https://www.linkedin.com/in/teptep/details/certifications/1635551069377/single-media-viewer/?profileId=ACoAAEXH4sABJYJMIsBSNW0gKSzihtUGCTDJatM",
      photo: "/images/certifications/certs&awards/taraml.png",
    },
  ];

  return (
    <section id="certifications">
      <div className="bg-[#181818] p-4 border border-white mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-center">
          Certifications and Awards
        </h2>
        <div className="relative pl-12 space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-r from-red-400 to-pink-600 rounded-full"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="md:flex md:items-start space-y-4 md:space-y-0"
            >
              <div className="relative flex-shrink-0 mr-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full absolute left-0 top-2"></div>
                <div className="ml-8">
                  <span className="block text-white font-thin">{exp.date}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{exp.description}</p>
                <Link href={exp.link} passHref>
                  <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-pink-500 hover:bg-slate-800 text-white mt-1 mb-2">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-sm">
                      Check credentials -&gt;
                    </span>
                  </button>
                </Link>
              </div>
              <div className="flex-shrink-0 md:ml-auto mt-4 md:mt-0">
                <Image
                  src={exp.photo}
                  width={300}
                  height={300}
                  alt={`${exp.title} image`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
