import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/index';
import About from './Pages/About'
import Beatstore from './Pages/Beatstore'
import Newsletter from './Pages/Newsletter'

import './index.css'


function App() {
  React

  return (

    <div>
      <BrowserRouter>
        <Routes >
         <Route>
          <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/beatstore' element={<Beatstore/>}/>
            <Route path='/newsletter' element={<Newsletter/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}

         </Route>
            
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App