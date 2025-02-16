
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {

  const rout = createBrowserRouter( [

    {path : "" , element : <Layout/> , children : [

      {index : true , element : <Home/> },
      {path : "about" , element : <About/> },
      {path : "portfolio" , element : <Portfolio/> },
      {path : "contact" , element : <Contact/> },
      {path : "*" , element : <NotFound/> }  

    ] }



  ] , {} )

  return (

    <>
    
    <RouterProvider router = {rout} />
     

    </>

  )
}

export default App
