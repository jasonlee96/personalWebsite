import BentoGrid from "./common/BentoGrid";
import { FaBriefcase } from "react-icons/fa";
const items = [
  { title: "Supezy", content: "A product introduction website built under React", link: "", img:"" },
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
            <h2 className="text-xl font-semibold text-black text-center">{item.title}</h2>
            <p className="text-sm text-gray-800 text-center" dangerouslySetInnerHTML={{ __html: item.content }}></p>
            {item.link && <p className="text-sm text-gray-700 text-center mt-2">{item.description}</p>}
          </motion.div>
        ))}
      </div>
    );
  };

  export default Portfolio;