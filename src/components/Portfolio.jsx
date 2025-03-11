import BentoGrid from "./common/BentoGrid";
import { FaBriefcase } from "react-icons/fa";
import Supezy from '../assets/img/supezy.png';
import SkillsetAnalysis from '../assets/project1.png';
import { motion } from "framer-motion";

const items = [
  { title: "Supezy", content: "A product introduction website built under React", link: "https://jasonlee96.github.io/Supezy/", img: Supezy },
  { title: "Skillset Analysis", content: "A job vacancy analysis website with python + react + mongo stacks <b>(Backend deprecated)</b>", link: "https://jasonlee96.github.io/Skillset-analysis/", img: SkillsetAnalysis },
];
const Portfolio = () => {
    return (
      <>
          <h2 className="text-4xl font-extrabold mt-16 mb-6 text-[#5a3e1b] drop-shadow-lg text-center">Here is some portfolio...</h2>
          <PortfolioGrid items={items} />
      </>
      
    );
  };

  const PortfolioGrid = ({ items }) => {
    return (
      <div className="grid grid-cols-1 gap-6 p-6 relative auto-rows-[minmax(120px,_1fr)]">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-3xl shadow-lg bg-white/40 backdrop-blur-xl hover:shadow-2xl transition-all relative z-10 border border-white/60 flex flex-col justify-center items-center ${item.size}`}
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-4xl font-bold text-[#5a3e1b] text-center mb-4">{item.title}</h1>
            <p className="text-lg text-gray-800 text-center mb-6" dangerouslySetInnerHTML={{ __html: item.content }}></p>
            {item.link && <a href={item.link}><img src={item.img} alt={item.title} /></a>}
          </motion.div>
        ))}
      </div>
    );
  };

  export default Portfolio;