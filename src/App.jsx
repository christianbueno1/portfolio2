import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Terminal from './components/Terminal'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import ToolsAndTechnologies from './components/ToolsAndTechnologies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <ToolsAndTechnologies/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App
