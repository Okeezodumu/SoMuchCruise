import React from 'react'

const Navbar = () => {
    React
    return (
        <div className='container flex m-5 h-20 '>
            <div>
                <h1 className='absolute font-extrabold font-[ShadowsIntoLight] text-[transparent] mx-2 lg:text-5xl bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200 animate-pulse md: text-3xl  left-1'>SO MUCH CRUISE</h1>
            </div>
            <div>
                <ul className='lg:flex font-[ShadowsIntoLight] absolute right-1 gap-10 text-xl  text-Pink-100 ' >
                    <a href="/"><li className='hover:text-Green-100'>Home</li></a>
                    <a href="/About"><li className='hover:text-Gray-200'>About</li></a>
                    <a href="/Beatstore"><li className='hover:text-Gray-200'>Beatstore</li></a>
                    <a href="/Newsletter"><li className='hover:text-Gray-200'>Newsletter</li></a>

                </ul>
            </div>
        </div>
    )
}

export default Navbar