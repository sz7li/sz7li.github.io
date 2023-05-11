import React from 'react'

function handleScroll() {
    window.scroll({
        top: -window.innerHeight * 4,
        behavior: 'smooth'
      });
  }

const ScrollUpButton = (props) => {
    return (
        <>
        <div>
            <button type="button" className ="ease-in-out hover:scale-105 tracking-widest transition duration-700 pb-1.5 border-b border-transparent hover:border-darkRed" onClick={handleScroll}>BACK TO TOP</button>
        </div>
        </>
        
    )
}

export default ScrollUpButton