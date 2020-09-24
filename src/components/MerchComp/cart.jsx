import React from 'react';
import cart from '../../assets/logo/cart.png'
import styled from "styled-components";
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
  

  .heading{
    background-color: rgb(226, 232, 238);
    width: 100%;
    height: 100px;
    text-align: right;
  }
  .firstDiv{
    width:45%;
   
    float: left;
    margin-left: 5%;
    margin-right: 2.5%;
  
    }
  
    .firstDivFrame{
      border-style: ridge ;
      overflow: scroll;
      /* height:500px; */
      /* Backpart */
      }
    
  
  .firstDivFrame:hover{
    border-color: skyblue;
  }
  
  .secondDiv{
      width:30%;
     
      float: left;
      margin-right: 15%;
      margin-left: 2.5%;
     
      }
  
  .secondDivFrame{
        border-style: ridge ;
        height:500px;
      
        /* Backpart */
        }
  
        .secondDivFrame:hover{
        border-color: skyblue;
      }
  
      h3:nth-child(1){
        text-align: left;
       
      }
  
      h3:nth-child(2){
        text-align: left;
      }
  
      form{
        margin-left: 100px;
      }
  
      button{
        width: 80%;
        height: 3rem;
        border-radius: 4px;
        background-color: springgreen;
      }
  
      img{
        width: 35px;
        height: 35px;
        margin-top: 15px;
        margin-right: 15px;
      }

  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;


function Cart({open, onClose}){
if(!open){
  return null;
}
  return ReactDom.createPortal(
    <>
   
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
   
</>,
document.getElementById('portal')
)

}

export default Cart;





