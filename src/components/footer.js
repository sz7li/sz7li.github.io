import React from 'react'
import ScrollButton from './scroll_button'

const Footer = (props) => {
    return (
        <>
        <script src="https://kit.fontawesome.com/747f83456b.js" crossorigin="anonymous"></script>
        <nav className={`relative mx-auto flex justify-between container px-8 md:px-20 ${props.bg.primary.bg} text-xs sm:text-sm`}>
            <div>
                <ul className='flex justify-between w-32'>
                    <a className="transition ease-in-out duration-700 hover:scale-125" href="mailto:sz7li@uwaterloo.ca"><li><i class="fas fa-envelope"></i></li></a>
                    <a className="transition ease-in-out duration-700 hover:scale-125" href="https://www.linkedin.com/in/shao-curtis-li/"><li><i class="fab fa-linkedin"></i></li></a>
                    <a className="transition ease-in-out duration-700 hover:scale-125" href="https://github.com/sz7li"><li><i class="fab fa-github"></i></li></a>
                    <a className="transition ease-in-out duration-700 hover:scale-125" href="https://open.spotify.com/playlist/0IH5Yn0EZ3PRvjVAOcwhrR?si=d911309f8fc9486c"><li><i class="fab fa-spotify"></i></li></a>
                </ul>
            </div>
            <ScrollButton></ScrollButton>
        </nav>
        </>
        
    )
}

export default Footer