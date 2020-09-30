import React,{useState,useEffect} from 'react';
import {useForm} from 'react-hook-form'

import Cart from './cart'
import imageBackward from '../../assets/logo/logo-backward.png'


import './elementDetails.css'


function Detail({onBack,todos}) {
  const [productList, setProductList]= useState([])
  const [isOpen, setIsOpen] = useState(false)
  const {register, handleSubmit}=useForm()
 
  
  useEffect(() => {
    setProductList([...productList, todos]);
   
  },[todos])
    
    


  function cartItem(){
    
    localStorage.setItem(`${todos.id}`,JSON.stringify(productList))
   
      
    
    
    
    setIsOpen(true)
   
  }
  
  const onSubmit=(event) => {

   
    console.log(event.itemSelector)
  }
   

  return (
    <div className="App">

      <div className="head">
        <h2>GoHame Shop /Cart</h2>
      </div>
      

        <div className="mains">
          
            <div className="firstPart">
             <div ><img  src={todos.im} alt="itemImage"></img></div> 
            </div>
              
             
            <div className="secondPart">
                  
                  <h6>17.99$=157 sek</h6>
                  <p>To Battle Shirt-/GoHam</p>
                
                  <p>This shirt will pretty your enemies and bring<br/>harmony to your friends,wear it wisly hemsters</p>
                
                  <p>GoHam embroided Shirt, made out of 100% bomull</p>
                  <br/>
                  <br/>

                  <form onSubmit={handleSubmit(onSubmit)}>
                      <label  id="labForProduct">Size:</label><span></span>
                        <select name="itemSelector" id="item" ref={register}>
                          <option value="xSmall">xSmall</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xlarge">XLarge</option>
                        </select>
                        
                      <br/>
                      <br/>
                      <input  ref={register} className="submit" type="submit" onClick={()=>cartItem()} value="Add To Cart" name="sub"/>  
                      
                  </form>
                  
                  
                  
           
            </div>
           
        </div>

           
        <Cart open={isOpen} onClose={()=>setIsOpen(false)} cartItem={todos} allItem={productList} />
                 

  
 

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
