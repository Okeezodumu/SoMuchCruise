import { React, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousel from '../Components/carousel'
import Afrobeats from './Afrobeats'
import RnB from './RnB'
import Hiphop from './Hiphop'
import Gospel from './Gospel'
import Pop from './Pop'
import Regea from './Regea'


const Beatstore = (props) => {

  const [afrobeatsmodal, setAfrobeatsmodal] = useState(false);
  const toggleModal = () => {
    setAfrobeatsmodal(!afrobeatsmodal);
  };
  const [rnBmodal, setRnBmodal] = useState(false);
  const togRnB = () => {
    setRnBmodal(!rnBmodal);
  };
  const [hipHopmodal, setHipHopmodal] = useState(false);
  const togHiphop = () => {
    setHipHopmodal(!hipHopmodal);
  };
  const [gospelmodal, setGospelmodal] = useState(false);
  const togGospel = () => {
    setGospelmodal(!gospelmodal);
  };
const[popmodal, setPopmodal] = useState(false);
const togPop =() => {
  setPopmodal(!popmodal);
};
const [regeamodal, setRegeamodal] = useState(false);
const togRegea =() => {
  setRegeamodal(!regeamodal);
};



  React
  return (

    <>
      <div className='box-border '>
        <Navbar />
      </div>
      <div className=''>
        <Carousel />
      </div>

      <h1 className='lg:flex justify-center p-5  text-center font-[ShadowsIntoLight] text-Pink-100 text-4xl font-bold   md:text-2xl text-center '>Beats</h1>

      <div className=' box-border flex flex-wrap justify-center items-center gap-4 w-full md:flex-nowrap md:justify-center' >

        <div className='flex-col  mt-10  '>
          <img className='rounded h-40 w-40 object-cover  border-4 border-Gray-300 saturate-200 hover:opacity-75' src="https://images.unsplash.com/photo-1524650359799-842906ca1c06?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3f" alt="" onClick={toggleModal} />
          <h2 className='text-md text-Gray-300 text-center my-5'>Afrobeats</h2>

        </div>
        <div className='flex-col mt-10 '>
          <img className='rounded h-40 w-40 object-cover border-4 border-Gray-300 saturate-200 hover:opacity-75 md:flex-nowrap' src="https://images.unsplash.com/photo-1594316663037-23fffae0d4e7?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" onClick={togRnB} />
          <h2 className='text-md text-Gray-300 text-center my-5'>RnB</h2>
        </div>

        <div className='flex-col mt-10'>
          <img className='rounded h-40 w-40 object-cover  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:flex-nowrap' src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" onClick={togHiphop} />
          <h2 className='text-md text-Gray-300 text-center my-5 tracking-tighter'>HipHop</h2>
        </div>

        <div className='flex-col mt-10'>
          <img className='rounded h-40 w-40 object-cover  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:flex-nowrap' src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" onClick={togGospel} />
          <h2 className='text-md text-Gray-300 text-center  my-5 tracking-tighter'>Gospel</h2>
        </div>

        <div className='flex-col mt-10'>
          <img className='rounded h-40 w-40 object-cover  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:flex-nowrap' src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
          " alt="" onClick={togPop} />
          <h2 className='text-md text-Gray-300 text-center  my-5 tracking-tighter'>Pop</h2>
        </div>

        <div className='flex-col mt-10'>
          <img className='rounded h-40 w-40 object-cover border-4 border-Gray-300 saturate-200 hover:opacity-75 md:flex-nowrap' src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" onClick={togRegea} />
          <h2 className='text-md text-Gray-300 text-center  my-5 tracking-tighter'>Regea & others</h2>
        </div>

      </div>
      <hr className='border-Gray-300 w-full mr-0 m-12 md: ' />



      <Footer />
      <Afrobeats isOpen={afrobeatsmodal} onClose={toggleModal} >
        <div className='flex justify-evenly mb-5 items-baseline gap-2 font-bold md: flex-wrap md: justify-center  md: space-x-2 text-sm   lg: font-Poppins text-sm' >

          <div className='flex-col  mt- '>
            <img className='lg: rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md: h-32 w-32' src="/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg" alt="" />
            <h2 className='text-md text-Gray-300 text-center my-5'>Exclusive</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg" alt="" />
            <h2 className='text-md text-Gray-300 text-center my-5'>Free Beats</h2>
          </div>

          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/Capa.png" alt="" />
            <h2 className='text-md text-Gray-300 text-center  my-5 tracking-tighter'>vocal chops</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="https://images.unsplash.com/photo-1596334861142-48f19282fcba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className='text-md text-Gray-300 text-center my-5 tracking-tighter'>Hard Beats</h2>
          </div>

        </div>
        {/* modal contents */}
        <div className='flex justify-center mx-auto mb-5 items-baseline md:flex-wrap justify-evenly overflow-x-scroll md: overflow-x-scroll space-x-2  text-sm lg:overflow-x-auto font-Poppins text-sm'>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto '>BurnaBoy</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Davido</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>KingPromise</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>NavyKenzo</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>OmayLay</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Fela</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>YemiAlade</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>AyraStarr</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Ckay</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Gyakie</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Joeboy</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>TiwaSavage</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Rema</button>


        </div>
        <button onClick={toggleModal} className='flex justify-center items-center mx-auto text-center bg-Pink-100 p-2 rounded-2xl my-10 md: '>close</button>
      </Afrobeats>

      <RnB isOpen={rnBmodal} onClose={togRnB}>
        <div className='flex justify-evenly mb-5 items-baseline gap-2 font-bold md: flex-wrap md: justify-center  md: space-x-2 text-sm   lg: font-Poppins text-sm' >

          <div className='flex-col  mt- '>
            <img className='lg: rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md: h-32 w-32' src="/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg" alt="" />
            <h2 className='text-md text-Black  text-center my-5'>Exclusive</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg" alt="" />
            <h2 className='text-md text-Black  text-center my-5'>Free Beats</h2>
          </div>

          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/Capa.png" alt="" />
            <h2 className='text-md text-Black  text-center  my-5 tracking-tighter'>vocal chops</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="https://images.unsplash.com/photo-1596334861142-48f19282fcba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className='text-md text-Black   text-center my-5 tracking-tighter'>Hard Beats</h2>
          </div>

        </div>
        {/* modal contents */}
        <div className='flex justify-center mx-auto mb-5 items-baseline md:flex-wrap justify-evenly overflow-x-scroll md: overflow-x-scroll space-x-2  text-sm lg:overflow-x-auto font-Poppins text-sm'>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto '>Adele</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Tems</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>RicHassani</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Maroon5</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>ChrisBrown</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Riri</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Rosalia</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>EdSherran</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>PartyNextDoor</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Kelani</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>EllieGoldie</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>JohnDrille</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Bazzi</button>


        </div>
        <button onClick={togRnB} className='flex justify-center items-center mx-auto text-center text-White bg-Black p-2 rounded-2xl my-10 md:'>close</button>
      </RnB>

      <Hiphop isOpen={hipHopmodal} onClose={togHiphop}>
        <div className='flex justify-evenly mb-5 items-baseline gap-2 font-bold md: flex-wrap md: justify-center  md: space-x-2 text-sm   lg: font-Poppins text-sm' >

          <div className='flex-col  mt- '>
            <img className='lg: rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md: h-32 w-32' src="/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg" alt="" />
            <h2 className='text-md text-Gray-300 text-center my-5'>Exclusive</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg" alt="" />
            <h2 className='text-md text-Gray-300 text-center my-5'>Free Beats</h2>
          </div>

          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/Capa.png" alt="" />
            <h2 className='text-md text-Gray-300 text-center  my-5 tracking-tighter'>vocal chops</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="https://images.unsplash.com/photo-1596334861142-48f19282fcba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className='text-md text-Gray-300 text-center my-5 tracking-tighter'>Hard Beats</h2>
          </div>

        </div>
        {/* modal contents */}
        <div className='flex justify-center mx-auto mb-5 items-baseline md:flex-wrap justify-evenly overflow-x-scroll md: overflow-x-scroll space-x-2  text-sm lg:overflow-x-auto font-Poppins text-sm'>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto '>Ye</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>JayZ</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>MIAbaga</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>NastyC</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Sarkodie</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>NickyMinaj</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>IceSpice</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Falz</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Skepta</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Stormzy</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Jcole</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Kendrick</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Drake</button>


        </div>
        <button onClick={togHiphop} className='flex justify-center items-center mx-auto text-center bg-Pink-100 p-2 rounded-2xl my-10 md:'>close</button>
      </Hiphop>


      <Gospel isOpen={gospelmodal} onClose={togGospel}>
        <div className='flex justify-evenly mb-5 items-baseline gap-2 font-bold md: flex-wrap md: justify-center  md: space-x-2 text-sm   lg: font-Poppins text-sm' >

          <div className='flex-col  mt- '>
            <img className='lg: rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md: h-32 w-32' src="/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg" alt="" />
            <h2 className='text-md text-Black text-center my-5'>Exclusive</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg" alt="" />
            <h2 className='text-md text-Black text-center my-5'>Free Beats</h2>
          </div>

          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/Capa.png" alt="" />
            <h2 className='text-md text-Black text-center  my-5 tracking-tighter'>vocal chops</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="https://images.unsplash.com/photo-1596334861142-48f19282fcba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className='text-md text-Black text-center my-5 tracking-tighter'>Hard Beats</h2>
          </div>

        </div>
        {/* modal contents */}
        <div className='flex justify-center mx-auto mb-5 items-baseline md:flex-wrap justify-evenly overflow-x-scroll md: overflow-x-scroll space-x-2  text-sm lg:overflow-x-auto font-Poppins text-sm'>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto '>MaverickCity</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>GUC</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>KimWalker</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>ElevationWorship</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Eben</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Lacrea</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>HillSong</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>ChrisMorgan</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>TopeAlabi</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>TravisGreene</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>NathanielBassey</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>DonMoen</button>

          <button className='p-2 rounded-full border border-Pink-100 bg-lightPurple-500 text-Gray-300  text-center w-full md:w-auto'>Sinach</button>


        </div>
        <button onClick={togGospel} className='flex justify-center items-center mx-auto text-center text-Gold-100 bg-Black p-2 rounded-2xl my-10 md:'>close</button>
      </Gospel>
    
      <Pop isOpen={popmodal} onClose={togPop}>
        <div className='flex justify-evenly mb-5 items-baseline gap-2 font-bold md: flex-wrap md: justify-center  md: space-x-2 text-sm   lg: font-Poppins text-sm' >

          <div className='flex-col  mt- '>
            <img className='lg: rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md: h-32 w-32' src="/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg" alt="" />
            <h2 className='text-md text-Gray-100 text-center my-5'>Exclusive</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg" alt="" />
            <h2 className='text-md text-Gray-100 text-center my-5'>Free Beats</h2>
          </div>

          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/Capa.png" alt="" />
            <h2 className='text-md text-Gray-100 text-center  my-5 tracking-tighter'>vocal chops</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="https://images.unsplash.com/photo-1596334861142-48f19282fcba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className='text-md text-Gray-100 text-center my-5 tracking-tighter'>Hard Beats</h2>
          </div>

        </div>
        {/* modal contents */}
        <div className='flex justify-center mx-auto mb-5 items-baseline md:flex-wrap justify-evenly overflow-x-scroll md: overflow-x-scroll space-x-2  text-sm lg:overflow-x-auto font-Poppins text-sm'>

          <button className='p-2 rounded-full border  bg-Black text-Gray-300  text-center w-full md:w-auto'>BadBunny</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>TheWeekend</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Tyla</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>ArianaGrande</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>ShawnMendes</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>JustinBeiber</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>TaylorSwift</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>2Baba</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Psquare</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>SelenaGomez</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Rosalia</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Lojay</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>WILLIAM</button>


        </div>
        <button onClick={togPop} className='flex justify-center items-center mx-auto text-center text-White bg-Black p-2 rounded-2xl my-10 md:'>close</button>
      </Pop>
    
      <Regea isOpen={regeamodal} onClose={togRegea}>
        <div className='flex justify-evenly mb-5 items-baseline gap-2  font-bold  md: flex-wrap md: justify-center  md: space-x-2 text-sm   lg: font-Poppins text-sm' >

          <div className='flex-col  mt- '>
            <img className='lg: rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md: h-32 w-32' src="/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg" alt="" />
            <h2 className='text-md text-Black  text-center my-5'>Exclusive</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg" alt="" />
            <h2 className='text-md text-Black text-center my-5'>Free Beats</h2>
          </div>

          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="/Capa.png" alt="" />
            <h2 className='text-md text-Black text-center  my-5 tracking-tighter'>vocal chops</h2>
          </div>
          <div className='flex-col mt-'>
            <img className='rounded-full h-40 w-40  border-4 border-Gray-300 saturate-200 hover:opacity-75 md:  h-32 w-32' src="https://images.unsplash.com/photo-1596334861142-48f19282fcba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className='text-md text-Black text-center my-5 tracking-tighter'>Hard Beats</h2>
          </div>

        </div>
        {/* modal contents */}
        <div className='flex justify-center mx-auto mb-5 items-baseline md:flex-wrap justify-evenly overflow-x-scroll md: overflow-x-scroll space-x-2  text-sm lg:overflow-x-auto font-Poppins text-sm '>

          <button className='p-2 rounded-full border  bg-Black text-Gray-300  text-center w-full md:w-auto'>StevenMarley</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Popcaan</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Kranium</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>StefLondon</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Koffi</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>BusySignal</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Shansea</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>StoneBoy</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>ShatteWale</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Winnie</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>KizzDaniel</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>Lojay</button>

          <button className='p-2 rounded-full border bg-Black text-Gray-300  text-center w-full md:w-auto'>CleanBandit</button>


        </div>
        <button onClick={togRegea} className='flex justify-center items-center mx-auto text-center text-White bg-Black p-2 rounded-2xl my-10 md:'>close</button>
      </Regea>
    
    </>
  );
};

export default Beatstore;