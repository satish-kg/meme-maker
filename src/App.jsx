// import { useState } from 'react'
// import React from 'react'

import './App.css'
import Header from "../Components/Header"
import MemeGeneratorBody from '../Components/MemeGeneratorBody'
import Footer from '../Components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="root">
      {/* <h1>meme-maker starts</h1> */}
      <Header />
      <MemeGeneratorBody />
      <Footer />
    </div>
  )
}

export default App
