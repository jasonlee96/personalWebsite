import React from "react";
import { motion } from "framer-motion";

const BentoGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 relative auto-rows-[minmax(120px,_1fr)]">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`p-6 rounded-3xl shadow-lg bg-white/40 backdrop-blur-xl hover:shadow-2xl transition-all relative z-10 border border-white/60 flex flex-col justify-center items-center ${item.size}`}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-5xl text-[#5a3e1b] mb-4">{item.icon}</div>
          <h2 className="text-xl font-semibold text-black text-center">{item.title}</h2>
          <p className="text-sm text-gray-800 text-center" dangerouslySetInnerHTML={{ __html: item.content }}></p>
          {item.description && <p className="text-sm text-gray-700 text-center mt-2">{item.description}</p>}
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;