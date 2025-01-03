import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import zelda from './assets/images/zelda.png'
import H from './pages/homepage'

function App() {
  let name = "john"
  let age = 20
  const Greeting = props =>{
    return (
      <>
      <H/>
      </>
    )
  }
  return(
    <div className="min-h-screen flex items-center justify-center">
      <Greeting name={name} age={age}/>
    </div>
  )
}

export default App
