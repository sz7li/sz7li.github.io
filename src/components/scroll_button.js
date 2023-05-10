import React from 'react'

function handleScroll() {
    window.scrollBy({
        top: window.innerHeight,
        left: 100,
        behavior: 'smooth'
      });
  }

const ScrollButton = (props) => {
    return (
        <>
        <div>
            <button type="button" className ="transition ease-in-out hover:scale-125" onClick={handleScroll}>More</button>
        </div>
        </>
        
    )
}

export default ScrollButton