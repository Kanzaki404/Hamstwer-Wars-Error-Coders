import React, { useState,useEffect } from "react";
import cart from "../../assets/logo/cart.png";
import imageClose from "../../assets/logo/close.png"

import styled from "styled-components";
//import ReactDom from "react-dom";

const ModalStyle = styled.div`
  position: fixed;
  font-family: 'Quicksand', sans-serif;
  border: solid black 1px;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 1000;
  width: 1100px;
  height: 90vh;

  .heading {
    background-color: #F9F4F4;
    width: 100%;
    height: 100px;
    text-align: right;
  }
  .firstDiv {
    width: 400px;
    float: left;
    margin-left: 100px;
    
    
  }

  .firstDivFrame {
    border: solid black 1px;
    border-radius: 4px;
    overflow-y: scroll;
    height:400px;
    /* Backpart */
  }


  .secondDiv {
    width: 400px;

    float: left;
    
    margin-left: 100px;
  }

  .secondDivFrame {
    border-style: ridge;
    height: 400px;

    /* Backpart */
  }



  h3:nth-child(1) {
    text-align: center;
  }

  h3:nth-child(2) {
    text-align: center;
  }

  form {
    margin-top: 60px;
    text-align: center;
  }

  li{
    list-style-type:none;
    
  }

  li>button {
    color: white;
    width:100px ;
    height:30px;
    border-radius: 4px;
    background-color:	#790000;
    float:right;
    margin-right:30px;
    margin-top:50px;
    color:white; 
    border: none;
    outline: none;
  
  }

  li>img{
    height:100px;
    width:100px
  }

  button {
  color: white;
  width:150px ;
  height:50px;
  border-radius: 4px;
  background-color:#289825;
  opacity: 0.8;
  
  border: none;
  outline: none;
  }

  img {
    width: 30px;
    height: 30px;
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

 

  .btnMain {
    backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background:	rgb(205,92,92);
  border-radius: 8px;
  border: 0px solid #973;
  border-width: 0px 0px 5px 0px;
  padding: 9px 15px 6px 15px;
  box-shadow: inset 0px 1px 3px rgba(255,255,255,.4);
  color: #fff;
  font-size: initial;
  font-family: Helvetica Neue;
  font-weight: 900;
  font-style: normal;


  
 
  }
  .btnDiv {
    color: #999;
  font-size: 10px;
  font-family: Helvetica Neue;
  font-weight: initial;
  font-style: normal;
  text-align: center;
  margin: 0px 0px 0px 0px
  }
  .btnI{
    color: #fff;
    font-size: 1em;
    background: rgba(0%,0%,0%,0.2);
    border-radius: 100px;
    border: 0px solid transparent;
    border-width: 0px 0px 0px 0px;
    padding: 5px 5px 5px 5px;
    
    position: absolute;
    margin-right: 50px;
    box-shadow: inset 0px 1px 2px rgba(0,0,0,0.4), inset 0px -1px 0px rgba(255,255,255,.5);
    box-sizing: border-box;
    margin: -24px 3px 0px 41px;
  }
  
 

`;



let cartProducts = [];
function Cart({ open, onClose,cartItem,allItem}) {
 
  
  
//const [cartProducts, setcartProducts] = useState([])
const[idstate,setIdState]=useState(false)


useEffect(() => {
  // setProductList([...productList, todos]);
  //setcartProducts([...cartProducts,JSON.parse(localStorage.getItem('productList'))])
  cartProducts = []
  if(localStorage.getItem('productList') !== null){
  let temp = JSON.parse(localStorage.getItem('productList'))

      for(let i=0; i< temp.length; i++){
        cartProducts.push(temp[i]);
      }
    }
  console.log(cartProducts)
  
 })
   
function deleteItem(id){
  console.log(id)
  cartProducts.splice(cartProducts.findIndex(function(i){
    return i.id===id
  }),1)
  console.log('in',cartProducts)
  localStorage.setItem('productList', JSON.stringify(cartProducts));
  setIdState(!idstate)
 
 
}

  
    const selectedCartItem=cartProducts.map((e)=>(
    
      <li key={e.id+Math.floor(Math.random() * 1000000)}><img src={e.im} alt="Tshirt"/><span/><button type="submit" onClick={()=>deleteItem(e.id)} 
                  >Remove{e.id}</button></li>
                  
    ))
  
  
   



  if (!open) {
    return null;
  }
   return (
    <div>
      <ModalStyle>
     
        <div className="heading">
          
          <img className="image" src={cart} alt="noImg"></img>
        </div>
        <div className="firstDiv">
          <h3>YOUR CART</h3>

          <div className="firstDivFrame">
         
            <ol>
              {selectedCartItem}
              
            </ol>
           
          </div>
        </div>

        <div className="secondDiv">
          <h3>CHECKOUT</h3>

          <div className="secondDivFrame">
            <form>
              <br />
              <p>Subtotal:{17.99}$</p>
              <br />
              <p>Shipping:{5}$</p>
              <br />
              <p>TOTAL:{22.99}$</p>
              <br />
              <br />
              <br />
              <button className="btnMain" onClick={onClose}>CheckOut<div className="btnDiv"></div><img className="btnI" src={imageClose}></img></button>
              
            </form>
          </div>
        </div>
      </ModalStyle>
    </div>
   
  )
}

export default Cart;
