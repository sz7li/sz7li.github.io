import React from 'react'
import { NavLink } from 'react-router-dom'
import resume from '../img/resume.pdf'

const Navbar = (props) => {
    return (
        <>
        <nav className={`pt-10 tracking-widest text-xs  sm:text-sm relative container mx-auto ${props.bg.primary.bg_4}`}>
            <div className={`flex justify-between px-6 ${props.bg.primary.bg}`}>
                <a className={`${props.bg.primary.bg} p-2 transition duration-700 border-b border-transparent hover:border-darkRed`}>
                    <NavLink to="/">HOME</NavLink>
                </a>
                <a href={resume} className={`${props.bg.primary.bg} p-2 transition duration-700 border-b border-transparent hover:border-darkRed`}>
                    RESUME
                </a>
                <a className={`${props.bg.primary.bg} p-2 transition duration-700 border-b border-transparent hover:border-darkRed`}>
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