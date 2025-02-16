
import Heading from "../Heading/Heading";
import CountUp from 'react-countup';

export default function About() {


  
    return (
    <>

    <section className="bg-secColor ">

      <div className="h-[98vh] w-full flex flex-col justify-center items-center ">



          <Heading title = "about component" emy = "white" />


          <div className="container w-2/3  mt-10  bg-re-500  grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-12 text-white text-center text-xl">

          <div className=" text-center  rounded-lg">
              
              <h2 className="text-3xl font-bold mb-1">
          
              <CountUp start={0} end={200} duration={2.1}/>

              </h2>              

              <p>Team Members</p>
          
            </div>

            <div className=" text-center rounded-lg ">
              
            <h2 className="text-3xl font-bold mb-1">
          
              <CountUp start={0} end={300} duration={2.4}/>

              </h2>              

              <p>Experienced Professioals</p>
          
            </div>

            <div className=" text-center  rounded-lg">
             
            <h2 className="text-3xl font-bold mb-1">
          
              <CountUp start={0} end={800} duration={2.4}/>

              </h2>              

              <p>Successful Projects</p>
          
            </div>

            <div className=" text-center  rounded-lg">
             
              <h2 className="text-3xl font-bold mb-1">
          
              <CountUp start={0} end={1200} duration={2.4}/>

              </h2>              

              <p>Satisfied Clients</p>
              </div>

          </div>
          
      </div>

    </section>


    </>
  )

}
