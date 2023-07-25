import './App.css'
import HeroSection from './components/HeroSection'
import MemeGenerator from './components/MemeGenerator'
import Navbar from './components/Navbar'


function App() {
  
  // const squareElements = squares.map(square => (
  //   <Box key={square.id} on={square.on}/>
  // ))
  return (
    <>
      <Navbar />
      <HeroSection />
      <MemeGenerator />
      
    </>
  )
}

export default App
