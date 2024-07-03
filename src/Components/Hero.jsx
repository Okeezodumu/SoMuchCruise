import {React, useState} from 'react';
import Login from '../Pages/login';
import Signup from '../Pages/Signup';

const Hero = (props) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const signupModal = () => {
    setSignupOpen(!signupOpen);
  };
  React
  return (
    <div className='container mx-auto '>
      <img className='lg: relative mx-16 my-20 p-1   md: p-3 mx-5 my-0' src="/Tile 1@2x.png" alt="" />
      <h1 className='font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] lg:text-7xl  bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200  animate-pulse md: text-4xl  tracking-wide relative left-5 '>CLEAR. CREATIVE. HARD </h1>

      <div className='lg: text-center p-2 m-2 text-2xl font-[Poppins] text-Pink-200 leading-relaxed md: text-base text-center tracking-wide relative left-4 '>
        Get your favourite Beats ranging from Afrobeats , Spirit, Rap, and the likes at affordable rates with global standard formats such as Stems, .Wav

      </div>
      <div className='flex justify-center '>
        <button className='lg: bg-Black p-4 mx-2 rounded-2xl text-lightPurple-200 text-xl hover:overline'onClick={toggleModal}> Log In</button>

        <button className='bg-Black p-4  rounded-2xl text-lightPurple-200 text-xl hover:bg-[transparent]'onClick={signupModal}>Sign Up</button>
      </div>

      <div className='box'>
        <h2 className='m-4 font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] lg:text-5xl bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200 animate-pulse md: text-4xl tracking-normal ml-6'>WHO WE ARE AND WHAT WE DO</h2>
      </div>
      <div className='lg:flex justify-center m-auto'>
        <p className='lg: p-10 text-Pink-200 text-2xl leading-relaxed font-[Poppins] md: text-base tracking-wide text-center ml-8'>We are a group of dedicated music Producers with an ear for rich and unique sounds. We are committed to digitizing music production by making available with our online music studio where arstistes can request for their choice genres and also have variety to choose from in our BEATSTORE. <br /> <button className='lg: bg-Pink-200 text-2xl text-Black rounded-xl p-2 font-[ShadowsIntoLight] hover:bg-Gray-200 my-5 md: flex m-auto text-base'>BEATSTORE</button> </p>
        <img className='lg: rounded-xl md: w-2/3 m-auto text-sm relative left-5' src="/IMG_8613 1.png" alt="" />
      </div>
      <div className='block'>
        <h2 className='m-4 font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] text-5xl bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200 animate-pulse' >Discover More</h2>
        <div className='lg:flex mx-2'>
          <div className='lg: w-1/2 my-10 rounded-xl md: m-auto w-2/3 '>
            <p className=' lg: p-5 text-Gray-200 text-2xl md: text-sm tracking-wide relative left-7 '>We release free beats from any genre of our choice and or beats with a high demand from our customers on a weekly basis..</p>
            <img className='lg: w-1/2 m-auto  md: w-1/2 ' src="/Screen 2.png" alt="" />
          </div>
          <div className='lg: w-1/2 my-10 rounded-xl md: m-auto w-2/3 '>
            <p className='lg: p-5  text-Gray-200 text-2xl md: text-sm tracking-wide relative left-7' >We also offer discounts to our loyal customers to keep the relationship smooth and going.</p>

            <img className='lg: p-7 m-auto md: w-40 rounded-xl rotate-12 ' src="/ivana-cajina-dnL6ZIpht2s-unsplash.jpg" alt="" />
          </div>
          <div className='w-1/2 my-10 rounded-xl md: m-auto w-2/3'>
            <p className='lg: p-4 text-Gray-200 text-2xl md: text-sm tracking-wide relative left-7'> We give artistes the levearge to make additions, remove and collaborate on projects anywhere , anytime.</p>

            <img className='lg: m-auto md: w-1/2 ' src="/Group 1000001462.png" alt="" />
          </div>
          <div className='w-1/2 my-10 rounded-xl md: m-auto w-2/3'>
            <p className='lg: p-4 text-Gray-200 text-2xl md: text-sm  tracking-wide relative left-7'> Artistes can contact us directly requesting for what they want; be it beats, engineering and everything music related.</p>

            <img className='lg: m-auto p-4 md: w-40  rotate-12 rounded-2xl' src="/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg" alt="" />
          </div>

        </div>
        <div className=' m-auto'><h2 className=' m-5 font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] text-5xl bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200 animate-pulse'>Exclusive Offers</h2></div>
        <div className='flex'><p className='lg: p-10 text-2xl text-Gray-300 leading-10 text-center md: p-2 m-4 text-Pink-100 text-base  tracking-wide relative left-3'> We offer free online promotions to our customers for every beat or song we colloborate on. We also give free beats out on weekly basis to fans and customers with high engagements</p>  <img className='lg: visible w-1/2 rounded-xl ' src="/Cover.png" alt="" />
        </div>
        <div className=' m-3'>
          <h2 className='m-auto font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] text-5xl bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200 animate-pulse'>How it Works</h2>
          <p className='lg: text-Gray-200 text-2xl p-4 text-center  leading-8 md: text-Pink-100 text-base  tracking-wide relative left-3 '>The beats available on the site are in snippets(60 secs). Should any intrest you, you simply request for it; after payment and have it delivered to you via email or any medium of your choice. Artistes have the leaverage to request for changes where needed.</p>
        </div>
        <div className='p-10'>
          <h1 className='m-auto font-extrabold text-center font-[ShadowsIntoLight] text-[transparent] text-5xl bg-clip-text bg-gradient-to-r from-Gray-300 to-Pink-200 animate-pulse'>Hear from our customers</h1>
        </div>

        <div className='lg: flex justify-evenly text-sm md: flex-col p-7 relative left-6'>
          <div className='flex-col bg-Black p-10 text-lightPurple-200 font-[Poppins] m-5 tracking-tighter'><p> The beats i got from So much Cruise are dope and really playable everywhere.They made my EP simply because everyone who listened to their beats asked; who made it!</p>
          
           <img className='p-2 my-5  h-20 w-20 m-auto rounded-full saturate-200' src="/White boy.jpg" alt="" />
             <h2 className='text-center font-[ShadowsIntoLight] font-extrabold text-Gray-100 text-xl'>Boy Diamond</h2>
          </div>

          <div className='flex-col p-10 text-Black font-[Poppins] m-5 bg-White tracking-tighter'><p>Their beats are real, hard and heavy. I love the versitile attribute and sound mix.Have you listened to their afrobeat? I highly recommend!</p>
           
           <img className='p-2  h-20 w-20 m-auto rounded-full saturate-150' src="/White woman.jpg" alt="" />
          <h2 className='text-center font-[ShadowsIntoLight] font-extrabold text-White text-xl'>Vee</h2>
           </div>

          <div className='flex-col bg-Black p-10 text-lightPurple-200 font-[Poppins] m-5'><p>I remember when i approached them for a gospel demo, i had doubts initially but they proved me wrong! They are good at what they do really. </p>
            
           <img className='p-2  h-20  w-20 m-auto rounded-full saturate-200 my-5 ' src="/Blacko.jpg" alt="" />
         <h2 className='text-center font-[ShadowsIntoLight] font-extrabold  text-Gray-100 text-xl'>Book Of Songs</h2>
          </div>

        </div>

      </div>
      <Login  isOpen={modalOpen} onClose={toggleModal}>
        <div className=" lg: relative right-14 w-80 border-x-2 border-transparent rounded-2xl bg-gradient-to-b from-Pink-100 to-lightPurple-500  md:  z-50 ">
          <div className="text-center  font-[Poppins] ">
            <h1 className="text-2xl  font-bolder p-5">LOG IN</h1>
          </div>
          <div className=" lg: ml-5 mr-5 md: text-center">
            <p>Enter your email and password to log in into  your dashboard</p>
            <form className="p-2" action="#">
              <strong>Username</strong> : <br></br>
              <input className="rounded-md md: w-5/6" type="text" name="Username" placeholder="info@whats.com" size="40" readOnly></input>
            </form>
            <form className="p-2" action="#">
              <strong>Password</strong> : <br></br>
              <input className="rounded-md md: w-5/6" type="text" name="password" placeholder="Enter your password" size="40" readOnly></input>
            </form>
          </div>
          <div className="flex justify-center m-2">
            <button className=" p-2 w-1/3 bg-Pink-200 hover:bg-White font-bold md: w-1/2 ">LOGIN</button>
            
          </div>
          <div className='text-center text-Gray-100 my-10'>
          Don't have an account? <strong><a className='hover:text-Green-100' href="">Sign up</a></strong> <br></br>
                    <strong><a className='hover:text-Green-100' href="">Forgot password?</a></strong>
                
          </div>
       
         
        </div>
        
      </Login>
     
      <Signup isOpen={signupOpen} onClose={signupModal}>

      <div className=" lg: relative right-14 w-80 border-x-2 border-transparent rounded-2xl  bg-gradient-to-b from-Pink-100 to-lightPurple-500  md: z-50 ">
          <div className="text-center  font-[Poppins] ">
            <h1 className="text-2xl  font-bolder p-5">SIGN UP</h1>
          </div>
          <div className=" lg: ml-5 mr-5  md: text-center">
            <p>Enter your details</p>
            <form className="p-2" action="#">
              <strong>Fullname</strong> : <br></br>
              <input className="rounded-md md: w-5/6" type="text" name="Username" placeholder="Delight Gabriel" size="40" readOnly></input>
            </form>
            <form className="p-2" action="#">
              <strong>Email</strong> : <br></br>
              <input className="rounded-md md: w-5/6" type="text" name="Email" placeholder="Enter your email" size="40" readOnly></input>
            </form>
            <form className="p-2" action="#">
              <strong>Password</strong> : <br></br>
              <input className="rounded-md md: w-5/6" type="text" name="password" placeholder="Enter your password" size="40" readOnly></input>
            </form>
          </div>
          <div className="flex justify-center m-2">
            <button className=" p-2 w-1/3 bg-Pink-200 hover:bg-White font-bold md: w-1/2 ">SIGN UP</button>
            
          </div>
          <div className='text-center text-Gray-100 my-10'>
         Already have an account? <strong><a className='hover:text-Green-100' href="">Login</a></strong> <br></br>
                    <strong><a className='hover:text-Green-100' href="">Forgot password?</a></strong>
                </div>
                </div>
                </Signup> 
                
                  
    </div>


  );
};

export default Hero;