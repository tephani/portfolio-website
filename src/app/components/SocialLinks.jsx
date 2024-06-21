import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaSkype } from "react-icons/fa"; // Import icons from react-icons

const SocialLinks = () => {
  
  const copyToClipboard=(text)=> {
    navigator.clipboard.writeText(text).then(()=>{
      alert('Skype link copied to clipboard!');
    }).catch((err)=>{
      console.error('Failed to copy text: ', err);
    });
  };

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
      <div
        onClick={()=>copyToClipboard('live:.cid.6140c23831515da1')}
        className="text-gray-400 hover:text-gray-300 cursor-pointer"
      >
        <FaSkype className="w-9 h-9" />
      </div>
    </div>
  );
};

export default SocialLinks;
