import './App.css'
import Buttons from './Components/Buttons'
import { BsArrowUpRightSquare } from "react-icons/bs";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Partner from './Components/Partner';
import Offer from './Components/Offer';
import Train from './Components/Train';
import TestimonialCarousel from './Components/Carousel';
import Effort from './Components/Effort';
import GetStarted from './Components/Getstarted';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Partner />
      <Offer />
      <Train />
      <TestimonialCarousel />
      <Effort />
      <GetStarted />
      <Footer/>

    </>
  )
}

export default App
