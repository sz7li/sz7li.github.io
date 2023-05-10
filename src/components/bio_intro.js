import React from 'react'

const BioIntro = (props) => {
    return (
        <>
        <div className={`container relative mx-auto text-xs sm:text-sm md:text-3xl p-6 transition ease-in-out hover:scale-110 ${props.bg.primary.bg_4}`}>
            {props.text.map(function (n) {
                return [<h1 key={n}>{n}</h1>, <br></br>]
            })}
        </div>
        </>
        
    )
}

export default BioIntro