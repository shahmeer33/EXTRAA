import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  Navbar  from './components/Navbar'
import Footer from './components/Footer'
import React from 'react'
import Home from "./pages/Home"


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>


    <Navbar/>
 
    <Routes  >
<Route path="/" element={<Home/>} >
 

</Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
