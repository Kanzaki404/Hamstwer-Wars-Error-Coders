import React from "react";
import styled from "styled-components";
import blood from "../assets/blood/transparent-blood.png";
import { Link } from "react-router-dom";
const LandingPageStyle = styled.div`
  width: auto;
  height: 100vh;
  background-color: #790000;
  text-align: center;

<<<<<<< HEAD
  .info-text {
    display: flex;
    justify-content: center;
  }

  .text {
    display: block;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    color: white;
    margin: 84px;
    letter-spacing: 1px;
    line-height: 36px;
    width: 700px;
  }
=======
    }
    .text {
        display: block;
        text-align: center;
        font-family: 'Quicksand', sans-serif;
        color: white;
        margin: 84px;
        letter-spacing: 1px;
        line-height: 36px;
        width: 700px;
    }
>>>>>>> 484eaab1ac177f94f4c771041dbdd0784128ec41

  .to-battle {
    font-family: "Permanent Marker", cursive;
    font-size: 28px;
    width: 307px;
    height: 87px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    background: #1c1c1c;
    border-radius: 10px;
    color: white;
    border: none;
    outline: none;
  }

  .to-battle img {
    position: absolute;
    width: 130px;
    margin: top;
    margin-left: 139px;
    margin-top: -3px;
  }
`;

export default function LandingPage() {
  return (
    <LandingPageStyle>
      <div className="info-text">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br></br>
        </p>
      </div>

      <Link to="/arena">
        <button className="to-battle">
          <img src={blood} alt="blood"></img>TO BATTLE!
        </button>
      </Link>
    </LandingPageStyle>
  );
}
