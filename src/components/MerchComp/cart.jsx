import React, { useState,useEffect } from "react";
import cart from "../../assets/logo/cart.png";
//import imageSample1 from "../../assets/testPhotoGallery/shirt-front.png"

import styled from "styled-components";
//import ReactDom from "react-dom";

const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 1000;
  width: 1100px;
  height: 90vh;

  .heading {
    background-color: rgb(226, 232, 238);
    width: 100%;
    height: 100px;
    text-align: right;
  }
  .firstDiv {
    width: 45%;

    float: left;
    margin-left: 5%;
    margin-right: 2.5%;
  }

  .firstDivFrame {
    border-style: ridge;
    overflow-y: scroll;
    height:500px;
    /* Backpart */
  }

  .firstDivFrame:hover {
    border-color: skyblue;
  }

  .secondDiv {
    width: 30%;

    float: left;
    margin-right: 15%;
    margin-left: 2.5%;
  }

  .secondDivFrame {
    border-style: ridge;
    height: 500px;

    /* Backpart */
  }

  .secondDivFrame:hover {
    border-color: skyblue;
  }

  h3:nth-child(1) {
    text-align: left;
  }

  h3:nth-child(2) {
    text-align: left;
  }

  form {
    margin-left: 100px;
  }

  li{
    list-style-type:none;
    
  }

  li>button {
    width: 40%;
    height: 2rem;
    border-radius: 4px;
    background-color:	#F08080;
    float:right;
    margin-right:30px;
    margin-top:50px;
    color:white; 
  
  }

  li>img{
    height:100px;
    width:100px
  }

  button {
    width: 80%;
    height: 3rem;
    border-radius: 4px;
    background-color: springgreen;
  }

  img {
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
    
      <li key={e.id}><img src={e.im} alt="Tshirt"/><span/><button type="submit" onClick={()=>deleteItem(e.id)} 
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
              <p>Subtotal:{4444}</p>
              <br />
              <p>Shipping:{555}</p>
              <br />
              <p>TOTAL:{9999}</p>
              <br />
              <br />
              <br />
              <button onClick={onClose}>CheckOut</button>
              
            </form>
          </div>
        </div>
      </ModalStyle>
    </div>
   
  )
}

export default Cart;
