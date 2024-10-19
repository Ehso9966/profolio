import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
