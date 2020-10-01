import React,{useState} from 'react';
import {useForm} from 'react-hook-form'

import Cart from './cart'
import imageBackward from '../../assets/logo/logo-backward.png'
import cartImage from '../../assets/logo/cart.png'


import './elementDetails.css'


function Detail({onBack,todos}) {
  //const [productList, setProductList]= useState([])
  const [isOpen, setIsOpen] = useState(false)
  const {register, handleSubmit}=useForm()
  var productList = [];
  
  // useEffect(() => {
   // setProductList([...productList, todos]);
  //  productList.push(todos)
  // },[todos])
    
    
  

  function cartItem(){
    if(localStorage.getItem('productList') !== null){
     
      let temp = JSON.parse(localStorage.getItem('productList'))
      
      for(let i=0; i< temp.length; i++){
        
          productList.push(temp[i]);
        
       
      }
      
      productList.push(todos)
      localStorage.setItem('productList', JSON.stringify(productList));
    }else{
      productList.push(todos)
      localStorage.setItem('productList', JSON.stringify(productList))
      
    }
  
  
  
    
    
      
    
    
    
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
                  <h3 className="money">17.99$/157 sek</h3>
                  <h4>To Battle Shirt-/GoHam</h4>
                
                  <p>This shirt will bring fear to your enemies and bring <br/> harmony to your friends, wear it wisely hamster...</p>
                
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
                      <button  ref={register}  className="buttonStyle" type="submit" onClick={()=>cartItem()} value="" name="sub">Add To Cart<img  className="buttonStyleI" src={cartImage}></img></button>
                      
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
