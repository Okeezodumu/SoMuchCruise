import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const About = () => {
  React
  return (
    <>
      <div>
        <Navbar />

      </div>
      <div className='m-auto'> 
      <img className='w-screen h-80 m-auto ' src="/Mask group.svg" alt="" />

        <h1 className=' font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] lg:text-7xl  bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200  animate-pulse md: text-4xl m-3' >ABOUT US 
        </h1>
        <h2 className='p-5  text-Green-100 text-base text-xl font-[Poppins]'>We are a group of talented music producers with vast experience and knowledge of contemporary sounds. Our knowledge of making music spans years of experimenting with both local and western sounds. We are here to utilize technology in connecting, creating and collaborating in the music phase. Exciting times await us all</h2>
        <button className='flex m-auto bg-lightPurple-200 p-4 rounded-xl text-White hover:bg-[transparent]'>Let's Connect</button>
      </div>
      
<div className=''><h1  className=' font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] lg:text-7xl  bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200  animate-pulse md: text-4xl m-5'>What We Offer You</h1></div>
<img className='m-auto w-1/3 h-56' src="/connect 1.svg" alt="" />
<ol className='lg: flex m-5 justify-center gap-2 text-Green-100 text-base font-[Poppins] animate-bounce md: flex-col text-center'>
<li>Song Writing/</li>
<li>Screnplay/</li>
<li>Song Production/</li>
<li>Album Production/</li>
<li>Sound Engineering/</li>
<li>Talent ID/AR</li>
</ol>

{/* <h2 className='m-2 text-Green-100 text-xl text-center font-[Poppins]'>We write songs, screenplays, contents, produce songs, albums, mix and master. We also do talent ID and AR for top labels by identifying grassroot talents and shaping them for the future</h2> */}
      <div className=''>
        <Footer />
      </div>
    </>
  )
}

export default About