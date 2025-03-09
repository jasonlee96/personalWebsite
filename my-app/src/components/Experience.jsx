import BentoGrid from "./common/BentoGrid";
import { FaBriefcase } from "react-icons/fa";
const experience = [
  { title: "Senior Software Engineer", content: "Morpheus Consulting Pte. Ltd.", description: "2023 – Present", icon: <FaBriefcase />, size: 'col-span-1 row-span-1 h-48' },
  { title: "Web Application Developer", content: "Alpha Red Solutions Sdn. Bhd.", description: "2021 – 2023", icon: <FaBriefcase />, size: 'col-span-1 row-span-1 h-48'},
  { title: "Software Development Interns", content: "Alpha Red Solutions Sdn. Bhd.", description: "2020 – 2021", icon: <FaBriefcase />, size: 'col-span-1 row-span-1 h-48'}
];
const Experience = () => {
    return (
      <>
          <h2 className="text-4xl font-extrabold mt-16 mb-6 text-[#5a3e1b] drop-shadow-lg text-center">Experience</h2>
          <BentoGrid items={experience} />
      </>
      
    );
  };

  export default Experience;