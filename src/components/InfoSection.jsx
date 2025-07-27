import React from 'react'
import {FaShippingFast,FaHeadset,FaMoneyBillWave,FaLock ,FaTag} from "react-icons/fa"

const InfoSection = () => {

const infoItems=[
    {
        icon:<FaShippingFast className="text-3xl text-red-600"/>,
        title:"Free Shipping",
        description:"Get your orders delivered with no extra cost",

    },
    {
        icon:<FaHeadset className="text-3xl text-red-600"/>,
        title:"Support 24/7",
        description:"We are here to assist you anytime",
    },
    {
        icon:<FaMoneyBillWave className="text-3xl text-red-600"/>,
        title:"100% Money Back",
        description:"Full refund if you are not satisfied",
    },
    {
        icon:<FaLock className="text-3xl text-red-600"/>,
        title:'Payment secure',
        description:"your payment information is safe with us",
    },
    {
           icon:<FaTag className="text-3xl text-red-600"/>,
        title:'Discount',
        description:"Enjoy the best prices on our products", 
    }
]


  return (
   
    <div className='bg-white pb-8 pt-12'  >
        <div className='container mx-auto'  >
              {infoItems.map((item,index)=>(
                 <div key={index} >
                       {item.icon}
                       <h3>{item.title} </h3>
                       <p>{item.description}</p>
                     </div>
              ))}
        </div>
    </div>
  )
}

export default InfoSection
