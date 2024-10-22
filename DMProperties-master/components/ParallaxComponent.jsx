
import styles from '../app/globals.css';

import { motion, useScroll, useTransform } from "framer-motion";

import React, { useRef } from "react";

const ParallaxComponent = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);

  

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >

<div className='flex justify-center text-center flex-wrap -mt-14'>
  <span className='font-sans blue_gradient mx-5 md:mx-14 md:mb-0 md:my-2 inline-block border-gradient-blue-pink'>
    DGM
  </span>
  <br className='hidden md:inline-block' />
  <span className='font-sans inline-block md:my-2 '>
    Properties
    
  </span>
</div>


      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/skyline.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/botpng.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default ParallaxComponent;
