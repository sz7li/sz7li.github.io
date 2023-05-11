import React, { useRef, useState, useEffect } from 'react';
import Main from '../components/main'
import Bio from '../components/bio'
import Bio_body from '../components/bio_body'
import BioIntro from '../components/bio_intro';
import Navbar from '../components/navbar';
import ScrollButton from '../components/scroll_button';
import ScrollUpButton from '../components/scroll_up_button';
import ReachOut from '../components/reach_out';
import Footer from '../components/footer';
import { motion, AnimatePresence } from "framer-motion"




const Home = (props) => {
    const debug = props.debug;
    const config = debug ? {primary: {bg: 'bg-slate-200', bg_2: 'bg-slate-400', bg_3: 'bg-darkRed', bg_4: 'bg-green-100'}} : {primary: {}}

    const [BioBackground, setBioBackground] = useState(false)
    const [BioBackground2, setBioBackground2] = useState(false)
  
    const changeBackground = () => {
      console.log(window.scrollY)
      let height = window.innerHeight;
      let transition = height / 3;
      if (window.scrollY >= (height - transition) && window.scrollY <= 2 * height - transition) {
        setBioBackground(true);
        setBioBackground2(false);
      } else {
        setBioBackground(false);
        setBioBackground2(true);
      }
    }
  
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
  })
  
    var bio_1_background = BioBackground ? 'bg-dustyBlue' : 'bg-lightRose';
    var bio_1_text = BioBackground ? 'text-lightRose' : 'text-dustyBlue';
  
    var bio_2_background = BioBackground2 ? 'bg-lightBlue' : 'bg-dustyBlue';
    var bio_2_text = BioBackground2 ? 'text-customBlack' : 'text-lightRose';  

    return <>
    <AnimatePresence>
        <motion.div 
            className='bg-lightRose flex flex-col relative font-display'
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
            transition={{
                duration:1
            }}
        >
            <div className={`flex flex-col ${config.primary.bg} pb-10 justify-evenly min-h-screen`}>
                <div className=''></div>
                <Main bg={config}></Main>
                <Footer bg={config}></Footer>
            </div>
            

            {/* First bio section*/}

            <div className={`${bio_1_background} ${bio_1_text} transition duration-500 font-display min-h-screen flex flex-col justify-around py-4 md:py-10`}>
                <Bio bg={config}></Bio>
                <div className={`${config.primary.bg_2} flex justify-between container relative mx-auto items-start px-8 md:px-20`}>
                    <Bio_body bg={config} text={["Hello!", "I am a recent grad", "from the University of Waterloo"]}></Bio_body>
                    <BioIntro bg={config} text={["I majored in Statistics and Computational Math, with a minor in Computing.", "I completed six Data Science/Software Engineering internships during undergrad at large and small companies.", "Happy to chat!"]}></BioIntro>
                </div>
                <div className={`${config.primary.bg_2} text-right container relative mx-auto text-xs sm:text-sm px-8 md:px-20`}>
                    <ScrollButton></ScrollButton>
                </div>
            </div>

            {/* Second bio section*/}

            <div className={`${bio_2_background} ${bio_2_text} transition duration-500 font-display min-h-screen flex flex-col justify-around py-4 md:py-10`}>
                <Bio bg={config}></Bio>
                <div className={`${config.primary.bg_2} flex justify-between container relative items-start mx-auto px-8 md:px-20`}>
                    <Bio_body bg={config} text={["Tech stack:", "", "Python, SQL, Pandas, NumPy, PySpark, Git, Bash"]}></Bio_body>
                    <BioIntro bg={config} text={["I have worked on real-world projects in: ", "Image matching with classical Computer Vision techniques, large-scale NLP Data Deduplication, Text Clustering, Data Visualization, Semantic Search, Web Development"]}></BioIntro>
                </div>
                <div className={`${config.primary.bg_2} text-right container relative mx-auto text-xs sm:text-sm px-8 md:px-20`}>
                    <ScrollUpButton></ScrollUpButton>
                </div>
            </div>

            {/* <div className={`bg-lightRose font-display min-h-screen flex flex-col justify-between p-6`}>
                <div className='text-[14rem]'>
                <ReachOut></ReachOut>
                </div>
            <div className={`text-right px-12 container relative mx-auto text-xs sm:text-sm`}>
                <ScrollUpButton></ScrollUpButton>
            </div>
            </div> */}
        </motion.div>
    </AnimatePresence>
    </>
  }

  export default Home;