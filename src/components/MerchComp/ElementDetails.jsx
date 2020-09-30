import React,{useState} from 'react';
import {useForm} from 'react-hook-form'
//import image from './logo512.png';
// import imageBackward from '../assets/logo/logo-backward.png'
import Elements from './Elements'
import Cart from './cart'
import imageBackward from '../../assets/logo/logo-backward.png'
import imageSample from '../../assets/logo/logo512.png'

import './elementDetails.css'

//import './App.css';

function Detail({onBack}) {
  const [isOpen, setIsOpen] = useState(false)
  const {register, handleSubmit}=useForm()
  const onSubmit=(event) => {
    console.log(event)
  }


  return (
    <div className="App">

      <div className="head">
        <h2>GoHame Shop /Cart</h2>
      </div>
      

        <div className="mains">
          
            <div className="firstPart">
            <img className="image" src={imageSample} alt="noImage"></img>
            </div>
              
             
            <div className="secondPart">
                  <h3>17.99$/157 sek</h3>
                  <h4>To Battle Shirt-/GoHam</h4>
                
                  <p>This shirt will pretty your enemies and bring<br/>harmony to your friends,wear it wisly hemsters</p>
                
                  <p>GoHam embroided Shirt, made out of 100% bomull</p>
                  <br/>
                  <br/>

                  <form onSubmit={handleSubmit(onSubmit)}>
                      <label htmlFor="product" id="labForProduct">Size:</label><span></span>
                        <select name="itemSelector" id="item">
                          <option value="xSmall">Small</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xlarge">XLarge</option>
                        </select>
                      <br/>
                      <br/>
                      <input  ref={register} className="submit" type="submit" onClick={()=>setIsOpen(true)} value="Add To Cart" name="sub"/>  
                  </form>
                  
                  
                  
           
            </div>
           
        </div>

           
        <Cart open={isOpen} onClose={()=>setIsOpen(false)}/>
                 

  
 

        <br/>

        <div className="footer">
          <div onClick={onBack}>
            
              <div className="back-page"><img className="img" src={imageBackward} alt="noImg"/><h2 className="text">Shop More/Go Back</h2></div>  
            
          </div>
        </div>   
     
    </div>

     
        
  );


 

}



export default Detail;
