import React from 'react'

function handleScroll() {
    window.scrollBy({
        top: window.innerHeight + 40 + 23 + 5,
        left: 100,
        behavior: 'smooth'
      });
  }

const ScrollButton = (props) => {
    return (
        <>
        <div>
            <button type="button" className ="ease-in-out hover:scale-105 tracking-widest transition duration-700 pb-1.5 border-b border-transparent hover:border-darkRed" onClick={handleScroll}>MORE</button>
        </div>
        </>
    )
}

export default ScrollButton