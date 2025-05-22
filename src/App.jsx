
 

 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
      
  return (
    <div>
    <nav>
    <div className="nav">
     <div>
        <img src="/images/brand_logo.png" alt="logo"/>
    </div>
    <div className="title">
      <ul className='title'>
      <li><a href="#">Menu </a></li>
      <li><a href="#">Location</a></li>
      <li> <a href="#">About</a></li>
      <li ><a href="#">Contact</a></li>
       </ul>
    </div>
    <div>
      <img src="/images/Button.png " alt="button login"/>
    </div>
    </div>
  </nav>
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
    <img src="/images/flipkart.png" alt="filpkart"/>
    <img src="/images/amazon.png" alt="amazon"/>
  </div>
  </div>
  <div>
    <img src="/images/shoe_image.png" alt="shoes img"/>
  </div>
  </div>
    </div>
  )
   
}     
 export default App;
