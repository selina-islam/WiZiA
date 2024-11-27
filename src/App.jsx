import './App.css'
import Buttons from './Components/Buttons'
import { BsArrowUpRightSquare } from "react-icons/bs";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Partner from './Components/Partner';
import Offer from './Components/Offer';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Partner />
      <Offer/>
      <Buttons className="bg-electricCyan border text-deepJungleGreen border-sky-400 flex items-center gap-2">SELINA  <BsArrowUpRightSquare /> </Buttons>

    </>
  )
}

export default App
