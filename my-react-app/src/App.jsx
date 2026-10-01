import React from 'react'
import logo from './assets/Abstraction.png'
import weblogo from './assets/webLogo.png'
import './App.css'

const App = () => {
  return (
  <div className='page'>
    <div className = 'left'>
      <img src = {weblogo} alt = 'logo' width = '135px' height = '117px'></img>
      <h3>Getting Started with VR Creation</h3>
      <img src = {logo} alt = 'logo' width = '630.49px' height = '673.97px'></img>
    </div>
    <div className = 'right'>
      <select name ="language" id = "lang">
        <option value = "En">English (UK)</option>
      </select>

      <form>

      </form>
    </div>
  </div>
  )
}

export default App