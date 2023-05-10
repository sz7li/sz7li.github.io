import Home from "../pages/Home"
import About from "../pages/About"
import Project from "../pages/Project"
import AboutGallery from "../pages/AboutGallery"
import { Switch, Route, Routes, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"

function AnimatedRoutes(props) {
    const location = useLocation();
    return (
        <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home debug={props.debug} />}></Route>
                <Route path="/about" element={<About debug={props.debug} />}></Route>
                <Route path="/project" element={<Project debug={props.debug} />}></Route>
                <Route path="/about_gallery" element={<AboutGallery debug={props.debug} />}></Route>
            </Routes>
        </AnimatePresence>
      </>
    )
}

export default AnimatedRoutes