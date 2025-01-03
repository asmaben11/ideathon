import { useState } from 'react'
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
<<<<<<< HEAD
=======
        <div className="bg-red-500 p-4 m-4 rounded-lg font-programme text-4xl"> 
          hello ,{props.name} {props.age}
        </div>
        <img src={zelda} alt="zelda" className="w-64 h-64 object-cover" />
>>>>>>> 936dc7a1c4f632da60c15a827de11b4f10f6dd1c
      </>
    )
  }
  return(
    <div className="min-h-screen flex items-center justify-center">
      <Greeting name={name} age={age}/>
    </div>
  )
}

export default App;