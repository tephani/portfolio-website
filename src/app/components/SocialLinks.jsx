import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons from react-icons

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/tephani"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-300"
      >
        <FaGithub className="w-8 h-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/teptep/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-300"
      >
        <FaLinkedin className="w-8 h-8" />
      </a>
      <a
        href="https://web.facebook.com/your.ladyevernight/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-300"
      >
        <FaFacebook className="w-8 h-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
