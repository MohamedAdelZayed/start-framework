
import Heading from "../Heading/Heading";

import phot1 from '../../assets/portfolio/poert1.png'

import phot2 from '../../assets/portfolio/port2.png'
import phot3 from '../../assets/portfolio/port3.png'
import { useState } from "react";

export default function Portfolio() {
 
  const arr = [ phot1 , phot2 , phot3 , phot1 , phot2 , phot3 ]

  let [ popup , setpopup ] = useState()


    return (
    <>

    <section className="pt-[75px]">

      <div className=" min-h-screen w-full flex justify-center items-center ">
        
        <div className="">

          <Heading title = "portfolio component" emy = "mainColor" />

          <div className="container  bg--500 my-7 px-2 md:px-7 ">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

           {
            arr.map( function( ele , indx ){

            return(
             <>
      
             <div className = "relative" key = {indx} >

               <img src = {ele} className="rounded-lg" />

               <div onClick = { ()=> setpopup(ele) } data-modal-target="default-modal" data-modal-toggle="default-modal" className=" absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center
                                bg-secColor opacity-0 hover:opacity-85 hover:cursor-pointer transition-all duration-700">

                 <i className="fa-solid fa-plus text-8xl text-white"></i>
               
               </div>


               <div id="default-modal" tabIndex={-1} aria-hidden="true" className=" bg-[rgba(0,0,0,0.5)] h-full hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
  
  <div className="relative p-4 w-full max-w-2xl max-h-full">

    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

      <img src = {popup} className="mt-7" />

    
    </div>
  
  </div>

               </div>


               <div>
  

</div>

             </div>


       </>
    )

  } )
}






</div>

          </div>
      

        </div>

      </div>

    </section>
    
    </>
  )

}




