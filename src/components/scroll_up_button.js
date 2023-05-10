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
            <button type="button" className ="transition ease-in-out hover:scale-125" onClick={handleScroll}>Back to top</button>
        </div>
        </>
        
    )
}

export default ScrollUpButton