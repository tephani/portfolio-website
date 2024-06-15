import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container p-8 text-center flex justify-center items-center space-x-2">
        <p>All rights reserved. Made with</p>
        <img 
          src="/images/tech/nextjs.png"
          alt="Next.js Logo" 
          className="h-6 w-6 inline-block"
        />
      </div>
    </footer>
  );
};

export default Footer;
