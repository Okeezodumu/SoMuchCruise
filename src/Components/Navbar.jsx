import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };


    React
    return (
        <div className='container mx-auto inline-flex m-5 h-20 w-auto  md:container md:mx-auto '>
            <div>
                <h1 className='fixed font-extrabold font-[ShadowsIntoLight] text-[transparent] mx-2 lg:text-5xl my-5 bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200 animate-pulse  md: text-xl my-2'>THIS IS SO CRE8TIVE</h1>
            </div>
            <div className="lg:hidden absolute right-10 ease-in duration-1000 delay-200">
                <button onClick={toggleMenu} className="text-White fill-Pink-200 focus:outline-none ">
                    <svg viewBox="0 0 100 80" width="20" height="40 ">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                   
                </button> 
            </div>
            
            {/*Routed pages */}
            <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>

                <ul className='lg:fixed flex flex-grow font-[ShadowsIntoLight]  right-1 justify-evenly lg:text-xl  text-Pink-100 text-sm p-4 md:text-sm items-baseline gap-2 ' >
                    <a href="/" onClick={(e) => { closeMenu(); }}><li className='block mt-10 lg:inline-block lg:mt-0  mr-4 hover:text-Green-100'>Home</li></a>
                    <a href="/About" onClick={(e) => { closeMenu(); }}><li className='block mt-10 lg:inline-block lg:mt-0  mr-4 hover:text-Green-100 '>About</li></a>
                    <a href="/Beatstore" onClick={(e) => { closeMenu(); }}><li className='block mt-10 lg:inline-block lg:mt-0  mr-4 hover:text-Green-100'>Beatstore</li></a>
                    <a href="/Newsletter" onClick={(e) => { closeMenu(); }}><li className='block mt-10 lg:inline-block lg:mt-0 mr-4  hover:text-Green-100 '>Newsletter</li></a>
                    {/* cart logo */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            
                    </svg> 
                     <select className='bg-Pink-100 text-Black ' name="cart" id="cart">
                    <option  value=""></option>
                    </select>
                    

                </ul>


            </div>
        </div>
    )
}

export default Navbar;