import { motion, AnimatePresence } from "framer-motion"
import MapComponent from '../components/map';
import proj_img from '../img/proj/proj_1.jpg'
import Navbar from '../components/navbar';

const Project = (props) => {
    const debug = props.debug;
    const config = debug ? {primary: {bg: 'bg-slate-200', bg_2: 'bg-slate-400', bg_3: 'bg-darkRed', bg_4: 'bg-green-100'}} : {primary: {}}
    return <>
    <AnimatePresence>
        <motion.div
            className='bg-lightRose relative font-display min-h-screen flex flex-col justify-evenly'
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
            transition={{
                duration:1
            }}
        >
            <div className="container mx-auto flex flex-col items-center tracking-wider">
                <div className="p-8">
                    <h1>A Full-Stack Data Science project analyzing trending keywords on the /r/uwaterloo subreddit</h1>
                </div>
                <div className=" max-w-xs sm:max-w-3xl drop-shadow-xl saturate-200 overflow-hidden">
                    <a href="https://public.tableau.com/app/profile/shao.zhong.li/viz/Book1_16835009348650/Dashboard1?publish=yes" target="_blank">
                        <img src={proj_img} className="rounded drop-shadow-xl transform transition ease-in-out duration-500 hover:scale-[1.015]"></img>
                    </a>
                </div>
            </div>

            <div className="p-8 mb-10 mx-auto">
                <p>Check out the project structure and code over on <a href="https://github.com/sz7li/reddits-project" target="_blank" className ="ease-in-out hover:scale-105 tracking-widest transition duration-700 pb-1.5 border-b border-transparent hover:border-darkRed">GITHUB</a> </p>
            </div>
            {/* <div className="flex justify-center overflow-hidden">
                
            </div> */}
            
        </motion.div>
    </AnimatePresence>
    </>
  };
  
  export default Project;