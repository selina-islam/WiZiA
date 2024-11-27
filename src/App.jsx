import './App.css'
import Buttons from './Components/Buttons'
import { BsArrowUpRightSquare } from "react-icons/bs";
import Navbar from './Components/Navbar';


function App() {

  return (
    <>
      <Navbar />
      
      <Buttons className="bg-electricCyan border text-deepJungleGreen border-sky-400 flex items-center gap-2">SELINA  <BsArrowUpRightSquare /> </Buttons>

</>  )
}

export default App
