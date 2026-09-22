import { useState } from 'react'
import tiger from './assets/tiger.jpg' 
import './App.css'

function App() {
  return (
    <>
      <h1>Royal Enfield Continental GT 650</h1>
      <p>
        Royal Enfield has updated the Continental GT 650 in India with a black windscreen, 
        LED indicators, a USB Type-C charging port, and new alloy wheel options. 
        Prices now start at Rs. 3,58,427 (ex-showroom, Chennai).
      </p>
      
      
      <img src={tiger} alt="Animal" style={{ maxWidth: '100%', height: 'auto' }} />
    </>
  )
}

export default App