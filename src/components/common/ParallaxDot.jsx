import React, {useRef} from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxDot = () => {
    const dotsRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
    // Ensure dots are evenly distributed by calculating positions
    const numDots = 20;
    const dots = Array.from({ length: numDots }, (_, i) => ({
      top: `${(i / numDots) * 100}%`, // Evenly spread across height
      left: `${Math.random() * 100}vw`,
      size: `150px`
    }));
  
    return (
      <motion.div ref={dotsRef} className="parallax-dots" style={{ y }}>
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="dot"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
      </motion.div>
    );
  };

export default ParallaxDot;