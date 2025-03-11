import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 h-18 w-full bg-[#a1714d] text-white py-4 text-4xl text-center flex justify-center space-x-6 shadow-lg z-50 rounded-t-2xl">
      <a
        href="https://www.linkedin.com/in/jasonleezhiyong"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:underline"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/jasonlee96"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:underline"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
