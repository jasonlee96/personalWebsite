import React from "react";
import { FaCode, FaIndustry, FaServer, FaCloud, FaLightbulb, FaCogs } from "react-icons/fa";
import BentoGrid from "./common/BentoGrid";

const summary = [
  { 
    title: "Senior Software Engineer", 
    content: "<div class='flex flex-col items-center'><div class='flex flex-row'><span class='text-9xl font-extrabold text-[#5a3e1b] block leading-none'>5</span> <div class='flex flex-col'><span class='text-6xl font-bold text-[#5a3e1b]'>years</span><span class='text-3xl font-medium text-[#5a3e1b]'>of</span><span class='text-2xl font-semibold text-[#5a3e1b]'>working experience</span></div></div><p class='text-md text-gray-700 mt-2'>in software development, delivering scalable and high-performance applications.</p></div>", 
    icon: <FaCode />, 
    size: "col-span-2 row-span-2 h-100 flex flex-col justify-center items-center bg-[#f3e0c7] shadow-lg rounded-3xl p-6 border border-[#d2b48c] hover:shadow-2xl transition-all" 
  },
  { 
    title: "Specialized in Backend", 
    content: "Been full-stack all the while with expertise in .NET Core.", 
    icon: <FaServer />, 
    size: "col-span-1 row-span-1 h-48" 
  },
  { 
    title: "Industry Experience", 
    content: "Worked in Aviation, F&B, e-Commerce, and more.", 
    icon: <FaIndustry />, 
    size: "col-span-1 row-span-1 h-48" 
  },
  { 
    title: "Exploring New Tech Stacks", 
    content: "Interested in learning Java Spring, Ruby on Rails, and more!", 
    icon: <FaLightbulb />, 
    size: "col-span-1 row-span-1 h-48" 
  },
  { 
    title: "Cloud Experience", 
    content: "Hands-on experience with GCP & Azure.", 
    icon: <FaCloud />, 
    size: "col-span-1 row-span-1 h-48" 
  },
  { 
    title: "CI/CD Pipeline Setup", 
    content: "Set up CI/CD pipeline in Azure for autonomous deployment.", 
    icon: <FaCogs />, 
    size: "col-span-1 row-span-1 h-48" 
  }
];

const Summary = () => {
  return (
    <>
        <h2 className="text-4xl font-extrabold mb-6 text-[#5a3e1b] drop-shadow-lg text-center">A Senior Software Engineer with ...</h2>
        <BentoGrid items={summary} />
    </>
    
  );
};

export default Summary;
