import { motion, AnimatePresence } from "framer-motion"
import Gallery from '../components/gallery';
import MapComponent from '../components/map';
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import nature from '../img/panes/set_1/aeternal-sunshine-of-the-spotless-mind_a3ee_1440x2560.jpg'

const About = () => {
    const imageDetails = {
        width: 352,
        height: 625,
      };
    const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05 , 0.9]}
    const [Visible, setVisible] = useState(true);

    function handleScroll() {
        setVisible(false);
      }

    return <>
        <div
            className='bg-lightRose flex flex-col justify-evenly relative font-display min-h-screen p-2'
            // initial={{opacity: 0}} 
            // animate={{opacity: 1}} 
            // exit={{opacity: 0}}
            // transition={{
            //     duration:1
            // }}
        >
            <AnimatePresence>

                {Visible && (
                <motion.div 
                    key="image"
                    className="container mx-auto max-h-[625px] flex justify-center overflow-hidden"
                >    
                    <motion.img 
                        src={nature}
                        transition={transition}
                        // whileHover={{ scale: 1.1 }}
                        initial={{ x: 300, opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 1 }}
                    >
                    </motion.img>

                </motion.div>
                )}

            </AnimatePresence>
        
            <button onClick={() => setVisible(false)}>
                Click
            </button>
        </div>
        

    </>
  };
  
  export default About;