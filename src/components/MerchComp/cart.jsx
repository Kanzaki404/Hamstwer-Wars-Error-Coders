import React from 'react';
//import image from './logo512.png';
import cart from '../../assets/logo/cart.png'
import styled from "styled-components";
 import './cart.css';
 import ReactDom from "react-dom"

const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  background: #FFF;
  z-index: 1000;
  width: 1100px;
  height: 90vh;
  

`;
const ModalStyleWrapper = styled.div`
  postion: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.7);
  
  z-index: 1000;

`;

function Cart({open, onClose}){
if(!open){
  return null;
}
  return ReactDom.createPortal(
    <>
     <ModalStyleWrapper>
        <ModalStyle>
         <div className="heading"><img className="image" src={cart} alt="noImg"></img></div>
<div className="firstDiv">
    <h3>YOUR CART</h3>
  

      <div className="firstDivFrame">cvknskfkskfn
      njskdjskkds
      sdsjdkjskdsk hjvhghgh hvjhju hvhjhjhjbh ghgjhjbbjb hvjhvjvv hvjhvjvj ggugg hvhvvyvy kbkigig vhvvuvuv
      </div>

</div>
  
  <div className="secondDiv">
        <h3>CHECKOUT</h3>
      
        <div className="secondDivFrame">
          <form>
          <br/>
          <p>Subtotal:{4444}</p><br/>
          <p>Shipping:{555}</p><br/>
          <p>TOTAL:{9999}</p><br/><br/><br/>
          <button onClick={onClose}>CheckOut</button>
          </form>
        </div> 
  </div> 
      </ModalStyle>
    </ModalStyleWrapper>
</>,
document.getElementById('portal')
)

}

export default Cart;

// function App() {
//   return (
//     <div className="App">

//       <div className="heading">
//         <h2>GoHame Shop /Cart</h2>
//       </div>
      

//         <div className="mains">
          
//             <div className="firstPart">
//             <img className="image" src={image}></img>
//             </div>
              
             
//             <div className="secondPart">
//                   <h6>17.99$=157 sek</h6>
//                   <p>To Battle Shirt-/GoHam</p>
                
//                   <p>This shirt will pretty your enemies and bring<br/>harmony to your friends,wear it wisly hemsters</p>
                
//                   <p>GoHam embroided Shirt, made out of 100% bomull</p>
//                   <br/>
//                   <br/>

//                   <form action="">
//                       <label for="product">Size:</label><span></span>
//                         <select name="itemSelector" id="item">
//                           <option value="small">Small</option>
//                           <option value="medium">Medium</option>
//                           <option value="large">Large</option>
//                           <option value="xlarge">XLarge</option>
//                         </select>
//                       <br/>
//                       <br/>
                
//                       <input type="submit" value="Add To Cart"/>  
//                   </form>
           
//             </div>
           
//         </div>

//         <br/>

//         <div className="footer">
//         <div>
//         <a href="">
//           <div className="abc"><img className="img" src={imageBackward}/><h2 className="text">Shop More/Go Back</h2></div>
          
//         </a>
//         </div>
//           </div>
           
      
     
//     </div>
        
//   );
// }





