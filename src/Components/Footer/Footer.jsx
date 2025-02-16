
export default function Footer() {

    return (
        <>
        
        <section className="bg-mainColor text-white ">

          <div className="container mx-auto py-6">

          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">

<div className="locationn text-center p-3">

  <h3 className="font-bold text-2xl">LOCATION</h3>

  <p className="my-4">2215 John Daniel Drive</p>

  <p>Clark, MO 65243</p>

</div>

<div className="around  text-center p-3">

  <h3 className="font-bold text-2xl mb-4" >AROUND THE WEB</h3>


  <ul className="flex justify-evenly w-1/2 mx-auto">
    
    <li className="mr-3 rounded-full border border-white  p-2 flex justify-center items-center bg-transparent hover:bg-secColor hover:cursor-pointer transition-all duration-500">
    <i className="fa-brands fa-facebook text-white"></i>
    </li>
    
    <li className="mr-3 rounded-full border border-white  p-2 flex justify-center items-center bg-transparent hover:bg-secColor hover:cursor-pointer transition-all duration-500">
    <i className="fa-brands fa-twitter text-white"></i> 
    </li>
    
    <li className="mr-3 rounded-full border border-white  p-2 flex justify-center items-center bg-transparent hover:bg-secColor hover:cursor-pointer transition-all duration-500">
    <i className="fa-brands fa-linkedin-in text-white"></i> 
    </li>
    
    <li className="mr-3 rounded-full border border-white  p-2 flex justify-center items-center bg-transparent hover:bg-secColor hover:cursor-pointer transition-all duration-500">
    <i className="fa-solid fa-globe text-white"></i> 
    </li>
  
  </ul>


</div>

<div className="aboout  text-center p-3">

  <h3 className="font-bold text-2xl mb-4">ABOUT FRELANCER</h3>
  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

</div>

          </div>

          </div>

          <div className="text-center bg-[#172129] py-3">
            Copyright © Your Website 2025
          </div>

        </section>

        </>
  )

}
