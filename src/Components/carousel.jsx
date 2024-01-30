import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    },
   
  };
 
  

const carousel = ( ) => {
    React
  return (
  
    <div className='m-auto w-auto p-40px '>
    <Carousel className='w-2/3 m-auto ' infinite={true} autoPlay={this !== "mobile" ? true : false} autoPlaySpeed={3000} customTransition="all .5" transitionDuration={500} removeArrowOnDeviceType={["desktop","tablet", "mobile"]}   responsive={responsive}>

    <div className=' mx-2 ' >
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>HipHop</h1>
        <img className=' rounded-xl saturate-200 h-80 w-4/5 ' src="/drizzy.jpg" alt="Drake" />
    </div>
    <div className=' mx-0 '>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]'>Gospel</h1>
        <img className=' h-full rounded-xl saturate-200' src="/elevation rhythm.jpg" alt="MaverickCity" />
    </div>
    <div className='mx-5'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>RnB</h1>
      <img className='  rounded-xl saturate-200 h-80' src="/images-4-3.jpeg" alt="Tems" />
    </div>
    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]'>AfroWave</h1>
      <img className='rounded-xl saturate-200 h-80' src="/rem.jpg" alt="Rema" />
    </div>
    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>Trap</h1>
      <img className='rounded-xl saturate-200 h-80  w-2/3 ' src="/post malone.jpg" alt="Post  malaone" />
    </div>

    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]'>AfroBeat</h1>
      <img className='rounded-xl saturate-200 h-80' src="/burnaboy.jpg" alt="Burnaboy" />
    </div>

    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>Rap</h1>
      <img className='rounded-xl saturate-200 h-80' src="/cardiB.jpg" alt="Cardi B" />
    </div>

    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]'>Pop</h1>
      <img className='rounded-xl saturate-200 h-80' src="/rs_1200x1200-230212114817-1200-rihanna.cm.21223.jpg" alt="Riri" />
    </div>

    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>Vibes/Regea</h1>
      <img className='rounded-xl saturate-200 h-80' src="/Wiz.jpg" alt="Wiz" />
    </div>

    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>Alternative</h1>
      <img className='rounded-xl saturate-200 h-80' src="/Pharell Williams.jpg" alt="Pharell" />
    </div>

    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]'>Drill</h1>
      <img className='rounded-xl saturate-200 h-80' src="/Drill.jpeg" alt="Drill" />
    </div>

    <div className='mx-2'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>Amapiano</h1>
      <img className='rounded-xl saturate-200 h-80 w-full' src="/Major League DJ's.jpeg" alt="Major League DJs" />
    </div>
  
  </Carousel>;
    </div>
  )
}

export default carousel