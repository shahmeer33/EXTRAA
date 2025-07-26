import React from 'react'
import { Categories } from '../assets/mockData'
import {useState} from "react"
// import HeroImage from  "../assets/images/hero-image.png"

const Home = () => {

  console.log("redered")

  return (
    <div className='main bg-white mt-2 px-4 md:px-16 lg:px-24'  >

      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2 ' >

        <div className='w-full md:w-3/12' >

      
            <div   >  SHOP BY CATEGORIES</div>
             <ul>

               {
                Categories.map((category,index)=>(
                  <li key={index}   >
                     {category}  
                  </li>
))}
             </ul>
  </div>

  <div className='hero-image' >

  <img src="/hero-image.png"  alt="" />
  <div>
   <p> shahmeer</p>
   <h2>WELCOME TO  E-SHOP</h2>
 <p>MILLIONS + PRODUCTS</p>
 <button>SHOP NOW</button >
  </div>

  </div>

  </div>

  </div>


    
  )
}

export default Home
