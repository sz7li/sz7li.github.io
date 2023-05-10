import { motion, AnimatePresence } from "framer-motion"
import MapComponent from '../components/map';
import proj_img from '../img//proj/proj.jpg'

const Project = () => {
    return <>
    <AnimatePresence>
        <motion.div
            className='bg-lightRose relative font-display min-h-screen p-2'
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}}
            transition={{
                duration:1
            }}
        >
            <div className="container mx-auto flex flex-col overflow-hidden items-center">
                <div className="p-12">
                    <h1>A Full-Stack Data Science project analyzing trending keywords on the /r/uwaterloo subreddit</h1>
                </div>
                <div className="p-12">
                    <a href="https://public.tableau.com/app/profile/shao.zhong.li/viz/Book1_16835009348650/Dashboard1?publish=yes" target="_blank">
                        <img src={proj_img} className="object-cover transform transition duration-300 hover:scale-110"></img>
                    </a>
                </div>
                <div className="p-12">
                    <p>Hello world</p>
                </div>
            </div>
            {/* <div className="flex justify-center overflow-hidden">
                
            </div> */}
            
        </motion.div>
    </AnimatePresence>
    </>
  };
  
  export default Project;