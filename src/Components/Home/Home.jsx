
import mme from '../../assets/avataaars.svg'
import Heading from '../Heading/Heading'
import { ReactTyped } from './../../../node_modules/react-typed/dist/mjs/index';

export default function Home() {



  return (
  
    <>

    <section className='bg-secColor '>

      <div className="h-[98vh] w-full flex justify-center items-center pt-20">

        <div>

          <div >
            <img src = {mme} className='w-[250px] mx-auto'/>
          </div>

          <Heading title = "start Framework" emy = 'white' />

          <div className='text-center text-[25px] my-3 text-white'>

          <ReactTyped strings={["Web Developer " , " Web Designer " , "Illustrator" ]} typeSpeed={43}    loop />

          </div>


        </div>

      </div>

    </section>



    </>
  
)
}
