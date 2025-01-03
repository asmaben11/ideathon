import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import zelda from './assets/images/zelda.png'
import H from './pages/homepage'
import Loginpage from '../component/loginpage'
import Login from '../component/login'

function App() {
  let name = "john"
  let age = 20
  const Greeting = props =>{
    return (
      <>
      <Login/>
      </>
    )
  }
  return(
    <div className="min-h-screen flex items-center justify-center w-full max-w-none m-0 p-0">
      <Greeting name={name} age={age}/>
    </div>
  )
}

export default App;