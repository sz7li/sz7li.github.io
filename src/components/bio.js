import React from 'react'

const Bio = (props) => {
    return (
        <>
        <nav className={`relative container mx-auto px-8 md:px-20 ${props.bg.primary.bg_2}`}>
            <h1 className='transition ease-in-out duration-700 hover:scale-[1.01] '>Bio</h1>
        </nav>
        </>
        
    )
}

export default Bio