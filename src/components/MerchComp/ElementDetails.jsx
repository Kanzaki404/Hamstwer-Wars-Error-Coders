import React,{useState} from 'react';
//import image from './logo512.png';
// import imageBackward from '../assets/logo/logo-backward.png'
import ElementS from './Elements'
import imageBackward from '../../assets/logo/logo-backward.png'
import imageSample from '../../assets/logo/logo512.png'

import './elementDetails.css'

//import './App.css';

function Detail() {

  const [backward, setBackward]=useState(true)



  return (
    <div className="App">

      <div className="head">
        <h2>GoHame Shop /Cart</h2>
      </div>
      

        <div className="mains">
          
            <div className="firstPart">
            <img className="image" src={imageSample}></img>
            </div>
              
             
            <div className="secondPart">
                  <h6>17.99$=157 sek</h6>
                  <p>To Battle Shirt-/GoHam</p>
                
                  <p>This shirt will pretty your enemies and bring<br/>harmony to your friends,wear it wisly hemsters</p>
                
                  <p>GoHam embroided Shirt, made out of 100% bomull</p>
                  <br/>
                  <br/>

                  <form action="">
                      <label for="product">Size:</label><span></span>
                        <select name="itemSelector" id="item">
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xlarge">XLarge</option>
                        </select>
                      <br/>
                      <br/>
                
                      <input  class=" submit" type="submit" value="Add To Cart"/>  
                  </form>
           
            </div>
           
        </div>

        <br/>

        <div className="footer">
        <div onClick={()=>setBackward( <ElementS />)}>
        <a href="">
          <div className="abc"><img className="img" src={imageBackward}/><h2 className="text">Shop More/Go Back</h2></div>
          
        </a>
        </div>
          </div>
           
      
     
    </div>
        
  );


  // {backward ? (
  //   {Detail}
  
  // ) : (
  // <ElementS />
  // )}

}



export default Detail;
