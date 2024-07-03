import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Login from '../Pages/login'
import Signup from '../Pages/Signup'
import Afrobeats from '../Pages/Afrobeats'
import RnB from '../Pages/RnB'
import Hiphop from '../Pages/Hiphop'
import Gospel from '../Pages/Gospel'
import Pop from '../Pages/Pop'
import Regea from '../Pages/Regea'

const Home = () => {
  React

  return (
    <>
      <div className='container mx-auto'>

        <Navbar />
      </div>

      <div>
        <Hero />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Signup />
      </div>
  
      <div>
        <Afrobeats />
        <RnB />
        <Hiphop />
        <Gospel />
        <Pop/>
        <Regea/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home