"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({text1}) =>{
  // const words = text.split(" ");
  const letters1 = Array.from(text1);
  // const letters2 = Array.from(text2);
  const fadeInUpAnimation = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            y: { type: "spring", stiffness: 60 },
            staggerChildren: 0.07,
            opacity: { duration: 3 },
            ease: "easeTn",
            duration: 0.1,
        },
    },
};


  return(
    <motion.div 
    initial="hidden"
    animate="show"
    variants={fadeInUpAnimation}
    >
       {letters1.map((letter, index) => (
        <motion.span variants={fadeInUpAnimation} key={index}
        className='uppercase z-10 text-center text-5xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500 font-bold leading-tight tracking-tight'>
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
      <motion.div variants={fadeInUpAnimation}
        className='text-white w-[750px] my-5 mx-auto text-sm text-center'>
         <h3 > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus placeat quos eum 
          laudantium doloremque, nam praesentium aspernatur ipsum</h3>
        </motion.div>
      
    </motion.div>
    
)
};

export default AnimatedTextWord;
