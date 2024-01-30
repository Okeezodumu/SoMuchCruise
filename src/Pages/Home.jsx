import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

const Home = () => {

    React
  
  return (
  <>
    <div className='box-border'>
  
       <Navbar/>
      </div>
      <div>
       <Hero/>
      </div>
      <div>
        <Footer/>
      </div>
      </>
  )
}

export default Home