import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container p-8 text-center flex justify-center items-center space-x-2">
        <p>
          <span className="mr-1">All rights reserved. Made this with</span>
          <img
            src="/images/tech/nextjs.png"
            alt="Next.js Logo"
            className="h-6 w-6 inline-block mr-2"
          />
          <img
            src="/images/tech/nodew.png"
            alt="Node.js Logo"
            className="h-20 w-20 inline-block"
          />
          . 2024.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
