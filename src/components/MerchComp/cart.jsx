import React, { useState,useEffect } from "react";
import cart from "../../assets/logo/cart.png";
//import imageSample1 from "../../assets/testPhotoGallery/shirt-front.png"

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
    height:500px;
    /* Backpart */
  }


  .secondDiv {
    width: 400px;

    float: left;
    
    margin-left: 100px;
  }

  .secondDivFrame {
    border: solid black 1px;
    border-radius: 4px;
    height: 500px;

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
              <p>Subtotal:{17.99}$</p>
              <br />
              <p>Shipping:{5}$</p>
              <br />
              <p>TOTAL:{22.99}$</p>
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
