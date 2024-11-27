import './App.css'
import Buttons from './Components/Buttons'
import { BsArrowUpRightSquare } from "react-icons/bs";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';


function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <Buttons className="bg-electricCyan border text-deepJungleGreen border-sky-400 flex items-center gap-2">SELINA  <BsArrowUpRightSquare /> </Buttons>

</>  )
}

export default App
