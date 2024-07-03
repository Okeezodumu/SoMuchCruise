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
        <h2 className=' lg: p-5 text-Green-100  text-2xl font-[Poppins] md: text-base ml-12 tracking-tighter text-center '>We are a group of talented music producers with vast experience and knowledge of contemporary sounds. Our knowledge of making music spans years of experimenting with both local and western sounds. We are here to utilize technology in connecting, creating and collaborating in the music phase. Exciting times await us all</h2>
        <button className='flex m-auto relative left-5 bg-lightPurple-200 p-4 rounded-xl text-White hover:bg-[transparent]'>Lets Connect</button>
      </div>
      
<div className=''><h1  className=' font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] lg:text-7xl  bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200  animate-pulse md: text-4xl m-5'>What We Offer You</h1></div>
<img className='m-auto w-1/3 h-56' src="/connect 1.svg" alt="" />
{/* <ol className='lg: flex m-5 justify-center gap-2 text-Gray-300 text-2xl font-[Poppins] animate-bounce md: flex-col text-center text-base m-auto relative left-5 w-2/3'>
<li className='bg-Black p-3'>Song Writing</li>
<li className='bg-lightPurple-100 p-3' >Screnplay</li>
<li className='bg-Black p-3'>Song Production</li>
<li className='bg-RoyalBlue-100  p-3'>Album Production</li>
<li className='bg-lightPurple-100 p-3'>Sound Engineering</li>
<li className='bg-RoyalBlue-100 p-3'>Talent ID</li>
</ol> */}

{/* <h2 className='m-2 text-Green-100 text-xl text-center font-[Poppins]'>We write songs, screenplays, contents, produce songs, albums, mix and master. We also do talent ID and AR for top labels by identifying grassroot talents and shaping them for the future</h2> */}
{/* Divs for services offered all in a flex container */}
<div className='flex justify-center gap-10  h-auto'>
<div className='flex-col bg-Chrome-100 p-5 w-auto'>
<h1 className='text-Black text-center m-5 font-[ShadowsIntoLight] font-bold text-2xl'>Song Writing</h1>
<img className='w-auto items-center rounded-xl' src="https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
<p className='text-xl font-poppins m-2'>We write songs for clients across various music genres such as HipHop, RnB and Afrobeats</p>
</div>
<div className='flex-col bg-Pink-100 w-auto'>
<h1 className='text-Black text-center m-5 font-[ShadowsIntoLight] font-bold text-2xl'>Song Production</h1>
<img className='w-auto rounded-xl h-1/2' src="https://images.unsplash.com/photo-1601312378427-822b2b41da35?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
<p className='text-xl font-poppins m-2'>We produce songs for clients, create foley  sounds as well as moie soundtracks</p>
</div>

<div className='flex-col bg-Black w-auto'>
<h1 className='text-Chrome-100 text-center m-5 font-[ShadowsIntoLight] font-bold text-2xl'>Sound Engineering</h1>
<img className='w-auto rounded-xl h-1/2' src="https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
" alt="" />
<p className='text-xl text-Chrome-100 font-poppins m-2'>We offer post production services  from professional mixes to song masters using global trends to monitor loudness and clarity</p>
</div>

<div className='flex-col bg-Maroon-100 w-auto'>
<h1 className='text-Black text-center m-5 font-[ShadowsIntoLight] font-bold text-2xl'>Talent ID</h1>
<img className='w-auto rounded-xl h-1/2' src="https://images.unsplash.com/photo-1481954958657-a4d8792c2027?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
<p className='text-xl text-White font-poppins m-2'>We scout for talented artistes and song writers for intrested labels</p>
</div>
</div>
      <div className=''>
        <Footer />
      </div>
    </>
  )
}

export default About