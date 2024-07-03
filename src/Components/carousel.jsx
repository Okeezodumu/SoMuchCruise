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
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
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
  
    <div className='container mx-auto  lg:w-5/6  '>
    <Carousel className='mx-auto' infinite={true} autoPlay={this !== "mobile" ? true : false} autoPlaySpeed={3000} customTransition="all .5" transitionDuration={500} removeArrowOnDeviceType={["desktop","tablet", "mobile"]}   responsive={responsive} >

    <div className=' ' >
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]  md: relative right-6'>HipHop</h1>
        <img className=' rounded-xl saturate-150 h-80 w-4/5 ' src="https://hips.hearstapps.com/hmg-prod/images/drake-performs-onstage-during-lil-baby-friends-birthday-news-photo-1696684425.jpg" alt="Drake" />
    </div>
    <div className=' mx-0 md: mr-10 h-80 '>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]'>Gospel</h1>
        <img className=' h-full rounded-xl saturate-200' src="/elevation rhythm.jpg" alt="MaverickCity" />
    </div>
    <div className=''>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight] md: relative right-6'>RnB</h1>
      <img className='  rounded-xl saturate-200 h-80 w-4/5' src="https://images.unsplash.com/photo-1595422656857-ced3a4a0ce25?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tems" />
    </div>
    <div className=' md: mr-10'>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]  md: relative right-3'>AfroWave</h1>
      <img className='rounded-xl saturate-200 h-80 ' src="https://images.unsplash.com/photo-1645305783409-afea2f9ee251?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rema" />
    </div>
    <div className=' md: w-full'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight] md: relative right-11'>Trap</h1>
      <img className='rounded-xl saturate-200 h-80  w-5/6 ' src="https://iscale.iheart.com/v3/surl/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL292ZXJyaWRlLzMwNzc5ODAyX2IxZDhiMTA1LTk2OTQtNDRjZS05NWI3LTU0MGNhZmM5MTQ2Ny5qcGc=?sn=eGtleWJhc2UyMDIxMTExMDpSftBuyr3UYK3eF4YLmy-twRzzjD2cMAf8jX8IA3ryvg%3D%3D&surrogate=1cOXl179JY-syhxYSCX6Q1a_Mcu6UO8d-F4oJzpZf1hcUbJr4aImxNYOGE_rywxaxTCBw9r2YXOQiSsoZIYjiv4HHR2hxPXo0YEc3U9RTToU2soqzX_Wj-CkrD61nZ_HwCqhpB_zNrFAP7X2PueFHnHpWuOpoGnh0nPVlKVbboFdd5dDIRZoshfhQMH-kyLMoud_6j0I6Hf3JAQI7muvMI_CgPt7eHrEfrFqsKpgD7Y1OUIhjNTue2enUXsFxR96cbjAn7bAd4dDJg%3D%3D" alt="Post  malaone" />
    </div>

    <div className=''>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight] md: relative right-5'>AfroBeat</h1>
      <img className='rounded-xl saturate-200 h-80 w-5/6' src="https://www.rollingstone.com/wp-content/uploads/2020/08/AP_19232610234524.jpg" alt="Burnaboy" />
    </div>

    <div className=''>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]  md: relative right-4'>Rap</h1>
      <img className='rounded-xl saturate-200 h-80' src="/cardiB.jpg" alt="Cardi B" />
    </div>

    <div className=' md:  mr-10'>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]'>Pop</h1>
      <img className='rounded-xl saturate-200 h-80 ' src="/rs_1200x1200-230212114817-1200-rihanna.cm.21223.jpg" alt="Riri" />
    </div>

    <div className=' md: mx-7 '>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight] md: relative right-3'>Vibes/Regea</h1>
      <img className='rounded-xl saturate-200 h-80 ' src="/Wiz.jpg" alt="Wiz" />
    </div>

    <div className=' md: mr-10'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>Alternative</h1>
      <img className='rounded-xl saturate-200 h-80 ' src="/Pharell Williams.jpg" alt="Pharell" />
    </div>

    <div className=' md: mr-10'>
    <h1 className='p-2 text-2xl text-Gray-200 text-center font-[ShadowsIntoLight]'>Drill</h1>
      <img className='rounded-xl saturate-200 h-80' src="/Drill.jpeg" alt="Drill" />
    </div>

    <div className=' md: mr-10'>
    <h1 className='p-2 text-2xl text-Pink-100 text-center font-[ShadowsIntoLight]'>Amapiano</h1>
      <img className='rounded-xl saturate-200 h-80 w-full' src="/Major League DJ's.jpeg" alt="Major League DJs" />
    </div>
  
  </Carousel>;
    </div>
  )
}

export default carousel