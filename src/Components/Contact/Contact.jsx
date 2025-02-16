import Heading from "../Heading/Heading";

export default function Contact() {
  
    return (
    <>

    <section className = "bg--400 mt-6" >
      <div className="h-[95vh] w-full flex justify-center items-center">

        <div className="bg--600 w-full px-3  md:w-1/2 mx-auto">

          <Heading title = "conatct section" emy = "mainColor" />

          <div className="bg--600 p-2 mt-4 bg--500">

            
  <form className=" grid bg--500 gap-y-2">

  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="floating_email" id="floating_email" className="block py-3  px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secColor focus:outline-none focus:ring-0 focus:border-secColor peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:text-[18px] absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secColor peer-focus:dark:text-secColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserName</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input type="number" name="floating_email" id="floating_email" className="block py-3  px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secColor focus:outline-none focus:ring-0 focus:border-secColor peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:text-[18px] absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secColor peer-focus:dark:text-secColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserAge</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="floating_email" id="floating_email" className="block py-3  px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secColor focus:outline-none focus:ring-0 focus:border-secColor peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:text-[18px] absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secColor peer-focus:dark:text-secColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserEmail</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="floating_email" id="floating_email" className="block py-3  px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secColor focus:outline-none focus:ring-0 focus:border-secColor peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:text-[18px] absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secColor peer-focus:dark:text-secColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserPassword</label>
  </div>



  

  <button type="submit" className="w-fit text-white bg-secColor hover:bg-secColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-secColor dark:hover:bg-secColor dark:focus:ring-secColor">Send Message</button>

</form>


          </div>

        </div>


      </div>

    </section>

    </>
  )

}