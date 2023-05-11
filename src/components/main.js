import React from 'react'
import dp from '../img/dp.jpg'

const Main = (props) => {
    return (
        <>
        <div className={`container mx-auto ${props.bg.primary.bg_2}`}>
            {/* <div className='pb-6 font-display flex justify-center tracking-widest'>
                <a>HELLO</a>
            </div> */}
            <div className={`${props.bg.primary.bg} flex justify-center mb-6 overflow-hidden `}>
                <img class="rounded drop-shadow-xl max-h-60 md:max-h-72 duration-700 transition ease-in-out hover:scale-105" src={dp}></img>
            </div>
            <div className={`${props.bg.primary.bg_4} flex justify-center `}>
                <div className={'${props.bg.primary.bg_4} flex justify-between w-[274px]  md:w-[410px] sm:text-sm sm:tracking-wider tracking-wide text-xs'}>
                    <div className=" w-28 flex flex-row justify-between transition duration-700 ease-in-out hover:scale-105 sm:w-36">
                        <a className="text-dustyBlue">SHAO</a> 
                        <a className="text-darkRed">CURTIS </a> 
                        <a className="text-dustyBlue">LI</a>
                    </div>
                    <div className="transition duration-700 ease-in-out hover:scale-105">
                        <a>ヽ(￣ω￣(。。 )ゝ</a>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Main