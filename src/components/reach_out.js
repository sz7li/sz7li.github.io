import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion"
import ScrollButton from './scroll_button'

const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

const AnimatedLetters = ({ title, disabled }) => (
<motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
    <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
    </motion.span>
    ))}
</motion.span>
);

// const ReachOut = (props) => {
//     return (
//         <>
//         <div>
//             REACH OUT
//         </div>
//         </>
        
//     )
// }

const ReachOut = () => {
    const [playMarquee, setPlayMarquee] = useState(false);
  

    return (
      <>
      <div className="flex relative overflow-x-hidden">
        <div className='py-12 animate-marquee-infinite whitespace-nowrap'>
            <span className='mx-12'>Reach Out</span>
            <span className='mx-12'>Reach Out</span>
            <span className='mx-12'>Reach Out</span>
            <span className='mx-12'>Reach Out</span>
            <span className='mx-12'>Reach Out</span>
        </div>
        <div className='py-12 absolute top-0 animate-marquee2-infinite whitespace-nowrap'>
            <span className='mx-12 ml-96'>Reach Out2</span>
            <span className='mx-12'>Reach Out2</span>
            <span className='mx-12'>Reach Out2</span>
            <span className='mx-12'>Reach Out2</span>
            <span className='mx-12'>Reach Out2</span>
        </div>
      </div>
      
      </>
    );
  };

const ReachOutBanner = ({ title, playMarquee }) => {
    return (
      <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className='marquee__inner'>
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} disabled />
        </motion.div>
      </div>
    );
  };
  

export default ReachOut