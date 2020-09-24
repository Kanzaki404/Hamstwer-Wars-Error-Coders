import React, { useState } from "react";
import "./element.css";
import styled from "styled-components";
import shoppingLogo from "../../assets/logo/cart.png";
import bloodPic from "../../assets/blood/transparent-blood.png";
import Detail from "./ElementDetails";
//import { render } from "@testing-library/react";
// import { Nav, Navbar,Form,FormControl,Button} from "react-bootstrap";

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 270px;
  max-height: auto;
  margin-left: auto;
  margin-right: auto;

  border-radius: 4px;

  div:hover {
    cursor: pointer;
    
  }

  #item:hover{
    text-decoration: underline;
  }
  
`;

const NabBar = styled.div`
  * {
    transition: all 0.3s ease-in-out;
  }

  .container {
    clear: both;
    overflow: auto;
  }

  nav {
    float: right;
  }

  .logo img {
    alt:"text";
    float: right;
  }


  .SearchProduct{
    padding: 12px;
    box-sizing: border-box;
    height: 3em;
    margin-top: 30px;
    outline: none;
    resize: vertical;
    border-radius: 4px;
    margin-left: 2.4%;
    border: 1px solid black;
  }

  ul li {
    display: inline-block;
    padding: 10px;
    font-size: 20px;
    font-family: raleway;
  }

  ul li:hover {
    color: #790000;
    
  }

  .navPosition {
    margin: auto;
    width: 60%;
    padding: 10px;
  }

  .right {
    float: right;
  }
`;

const FooterImage = styled.div`
width:100%;
height: 35em;
left: 2px;
top: 2231px;

background-color: #790000;


//background: url(dfj6zi-78f902d0-0991-488f-a459-054aa1623c7c.png);
border: 1px solid #000000;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

//import { useDispatch } from 'react-redux';
//import { actions } from "../features/cart";

const Product = () => {
  // const dispatch = useDispatch();
  const productList = [
    {
      name: "Hamster1",
      price: 600,
      im: require("../../assets/testPhotoGallery/hamster-26.jpg"),
    },
    {
      name: "Hamster2",
      price: 600,
      im: require("../../assets/testPhotoGallery/default-warrior.jpg"),
    },
    {
      name: "Hamster3",
      price: 600,
      im: require("../../assets/testPhotoGallery/hamster-26.jpg"),
    },
    {
      name: "Hamster4",
      price: 600,
      im: require("../../assets/testPhotoGallery/default-warrior.jpg"),
    },
    {
      name: "Hamster5",
      price: 600,
      im: require("../../assets/testPhotoGallery/hamster-26.jpg"),
    },
    // {name:'Hamster2', price:400,im:"../src/assets/testGallery/hamster-26.jpg"},
    // {name:'Hamster2', price:400,im:"../src/assets/testGallery/hamster-26.jpg"},
    // {name:'Hamster2', price:400,im:"../src/assets/testGallery/hamster-26.jpg"},
    // {name:'Hamster2', price:400,im:"../src/assets/testGallery/hamster-26.jpg"},
  ];

  // Prints out the objects that are searched for.
  const [sort, setSort] = useState("");
  const [elementPage, setelementPage] = useState(true);
  const [basketNumber, setBasketNumber]=useState(0)

  const addToBasket=()=>{
    setBasketNumber(basketNumber +1)
  }
  const data = productList.map((item) => {
    //const handleClick = () => dispatch(actions.addToCart(item))
    if (sort.length !== 0) {
      if (
        item.name.toUpperCase().match(sort.toUpperCase()) ||
        item.price.toString().match(sort.toString())
      ) {
        return (
          <div  key={item.name}>
            <GridItem onClick={()=>setelementPage(false)}>
              <div >
                <img   onClick={addToBasket} className="photo"   src={process.env.PUBLIC_URL + item.im} alt="sortedItem"/>
                {/* <button className="but" onClick={handleClick}>Add to Shopping</button>   */}
               
              </div>
            </GridItem>
            <div>
              <p>
                {" "}
                {item.name} <br />
                Price: {item.price}
              </p>
            </div>
          </div>
        );
      } else {
        return null;
      }
    }
    //end of search print

    //prints out all the available objects
    return (
      <div key={item.name}>
        <GridItem onClick={()=>setelementPage(false)}>
          <div>
            <img
              className="photo"
              onClick={addToBasket}
              src={process.env.PUBLIC_URL + item.im}
              alt="cc"
            />
            {/* <button className="but" onClick={handleClick}>Add to Shopping</button>   */}
          </div>
          <div>
          <p id="item">
            {" "}
            {item.name} <br />
            Price: {item.price}
          </p>
        </div>
        </GridItem>
        
      </div>
    );
  });
  return (
    <div className="wrapper">
      <h1 className="headLine">Wellcome To Our Webshop</h1>
      <NabBar>
        <div className="container">
          <input
            className="SearchProduct"
            type="text"
            placeholder="search..."
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          />
          <nav className="navPosition">
            <ul>
              <li></li>
              <li>AllProducts</li>
              <li>Tshort</li>
              <li>Hoddies</li>
              <li>Cup</li>
              <li className="right">
                <img  src={shoppingLogo} height="30" width="30" alt="logo" />{basketNumber}
              </li>
            </ul>
          </nav>
        </div>
      </NabBar>

      <hr />

      {elementPage ? (
        <div className="itemSearchContainer">
          <div className="products">{data}</div>
        </div>
      ) : (
        <Detail onBack={()=>setelementPage(true)}/>
      )}

      {/* <div className="footer"></div> */}
      <FooterImage>
        <img src={bloodPic} alt="footerImage"/>
      </FooterImage>
    </div>
  );
};

export default Product;
