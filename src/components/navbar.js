import React from 'react'
import { NavLink } from 'react-router-dom'
import resume from '../img/resume.pdf'

const Navbar = (props) => {
    return (
        <>
        <nav className={`pt-10 tracking-widest text-xs  sm:text-sm relative container mx-auto ${props.bg.primary.bg_4}`}>
            <div className={`flex justify-between px-8 md:px-20 ${props.bg.primary.bg}`}>
                <a className={`${props.bg.primary.bg} ease-in-out  hover:scale-105 pb-1.5 transition duration-700 border-b border-transparent hover:border-darkRed`}>
                    <NavLink to="/">HOME</NavLink>
                </a>
                {/* "ease-in-out hover:scale-105 tracking-widest transition duration-700 pb-1.5 border-b border-transparent hover:border-darkRed" */}
                <a href={resume} className={`${props.bg.primary.bg} ease-in-out pb-1.5 hover:scale-105 transition duration-700 border-b border-transparent hover:border-darkRed`}>
                    RESUME
                </a>
                <a className={`${props.bg.primary.bg} ease-in-out hover:scale-105 pb-1.5 transition duration-700 border-b border-transparent hover:border-darkRed`}>
                    <NavLink to="/project">PROJECT</NavLink>
                </a>
                    
                {/* <a  className={`${props.bg.primary.bg} p-2 transition duration-700 border-b border-transparent hover:border-darkRed`}>
                    <NavLink to="/about">ABOUT</NavLink>
                </a> */}
            </div>
        </nav>
        </>
        
    )
}

export default Navbar