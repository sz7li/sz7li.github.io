import React from 'react'

const BioIntro = (props) => {
    return (
        <>
        <div className={`tracking-wider container relative mx-auto text-xs sm:text-sm md:text-3xl pl-4 md:pl-12 transition duration-700 ease-in-out hover:scale-105 ${props.bg.primary.bg_4}`}>
            {props.text.map(function (n) {
                return [<h1 key={n}>{n}</h1>, <br></br>]
            })}
        </div>
        </>
        
    )
}

export default BioIntro