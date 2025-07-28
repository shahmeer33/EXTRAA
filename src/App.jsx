import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  Navbar  from './components/Navbar'
import Footer from './components/Footer'
import React from 'react'
import Home from "./pages/Home"




function App() {

 useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
    window.addEventListener("beforeunload", saveScroll);
    return () => window.removeEventListener("beforeunload", saveScroll);
  }, []);
 
  // Restore scroll position after reload
  useEffect(() => {
    const scrollPos = sessionStorage.getItem("scrollPosition");
    if (scrollPos) {
      window.scrollTo(0, parseInt(scrollPos));
    }
  }, []);

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
