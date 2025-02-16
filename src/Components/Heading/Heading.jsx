
  export default function Heading(  props ) {

      const { title , emy} = props



      console.log(props)


      console.log(emy)


      return (

          <>
          
          <h2 className = {`uppercase text-3xl  sm:text-4xl text-center font-bold my-8 ${ emy === "mainColor" ? "text-mainColor" : "text-white" } `}> {title} </h2>

          <div className = {`shape flex justify-center items-center `}>

            <div className = {`left-line w-[90px] h-1 bg-${emy} mr-4 `}></div>

            <i className={`fa-solid fa-star text-[20px] ${ emy === "mainColor" ? "text-mainColor" : "text-white" } `}></i>

            <div className = {`right-line w-[90px] h-1 bg-${emy} ml-4 `}></div>

          </div>


          </>

    )

  }

