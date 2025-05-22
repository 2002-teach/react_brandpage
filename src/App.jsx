
 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() { 
      
  return (
    <div>
    <navigation>
    <div className="nav">
     <div>
      <img src="/public/brand_logo.png" alt="brand logo"/>
    </div>
    <div className="title">
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </div>
    <div>
      <img src="/public/Button.png " alt="button login"/>
    </div>
    </div>
  </navigation>
  <div className="container">
    <div className="first">
  <div className="heading">
    <h2>
      YOUR FEET DESERVE THE BEST
    </h2>
    <p>
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
    </p>
  </div>
  <div className="btn">
    <button className="istbtn">
      Shop Now
    </button>
    <button>Category</button>

  </div>
  <div className="brandlogo">
    <p>Also Available On</p>
    <img src="/public/flipkart.png" alt="filpkart"/>
    <img src="/public/amazon.png" alt="amazon"/>
  </div>
  </div>
  <div>
    <img src="/public/shoe_image.png" alt="shoes img"/>
  </div>
  </div>
    </div>
  )
   
}     
 export default App;
