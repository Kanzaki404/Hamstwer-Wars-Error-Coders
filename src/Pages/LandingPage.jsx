import React from "react";
import styled from "styled-components";
import blood from "../assets/blood/transparent-blood.png";
import { Link } from "react-router-dom";
const LandingPageStyle = styled.div`
  width: auto;
  height: 100vh;
  background-color: #790000;
  text-align: center;

  .info-text {
    display: flex;
    justify-content: center;
  }

  .welcome {

    font-size: 40px;
    font-family: "Quicksand", sans-serif;
    font-weight: 900;
    margin-bottom: 75px;
  }

  .text {
    display: block;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    color: white;
    margin: 70px;
    letter-spacing: 1px;
    line-height: 38px;
    width: 700px;

    .darker {
      font-size: 43px;
      font-weight: lighter;
      font-family: "Permanent Marker",cursive;
    }


    .goham-text {
        text-align:left;
        margin-bottom: -6px;

        span {
          font-weight: bold;
        }

    }
  }

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
          <p className="welcome">Welcome To <span className="darker">GoHam</span></p>

        <p className="goham-text">
          Our <span>GoHam</span> Arena hosts the <spanGoHam>bloodiest</spanGoHam>, most <span>intense</span> and <span>adorable</span> voting <span>Battles</span> in the cosmos of the most powerful Hamster Warriors.

          <br></br>
          <span>GoHam</span> originated in the early dawn of year 2020, for its purpose for bringing All hamster lovers together to witness the glory of their cuteness.
          <br></br>
          <br></br>
          The arena summons the hamsters into the arena and the crowd are allowed to vote on their favorite hamster.
          <br></br>
          The most loved Warrior takes their <span>VICTORY</span>!

          <br></br>
         </p>
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
