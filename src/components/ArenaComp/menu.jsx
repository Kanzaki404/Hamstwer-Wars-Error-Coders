import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #1c1c1c;
  width: 300px;
  height: 70px;
  border-bottom: 5px inset rgb(255 165 0);
  border-radius: 20px;
  display: flex;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 40px;
  color: aliceblue;
  place-content: center;
  cursor: pointer;
  outline: 0;
  transition: transform 0.5s;

  :nth-child(3) {
    border-bottom: 5px inset #2d608d;
  }
  :nth-child(4) {
    margin-top: 100px;
    background-color: red;
    color: white;
    border-bottom: 5px inset #1c1c1c;
  }

  :hover {
    transform: scale(1.2);
    color: aliceblue;
    border: 5px outset rgb(255 165 0);
    text-shadow: 0 0 130px #fff, 0 0 4px #000000, 0 0 40px #ffbc00,
      0 0 50px #ff0000, 0 0 60px #ff9900, 0 0 70px #ffbc00, 0 0 80px #ffb100;
  }
  :hover:nth-child(3) {
    transform: scale(1.2);
    color: aliceblue;
    border: 5px outset #2d608d;
    text-shadow: 0 0 130px #fff, 0 0 4px #000000, 0 0 40px #002bff,
      0 0 50px #00f3ff, 0 0 60px #0ebcff, 0 0 70px #0089ff, 0 0 80px #fefeff;
  }
  :hover:nth-child(4) {
    background-color: red;
    transform: scale(1.2);
    color: aliceblue;
    border: 5px ridge aliceblue;
    text-shadow: 0 0 0px #fff, 0 0 4px #000000, 0 0 40px #000000,
      0 0 50px #000000, 0 0 60px #aeaeae, 0 0 70px #000000, 0 0 80px #000000;
  }
  p {
    font-size: 30px;
    margin: auto;
    font-family: 'Piedra', cursive;
  }
`;

const Wrapper = styled.div`
  /* background-color: white;
  border: 0px solid transparent;
  border-radius: 30px; */
  width: 33vw;
  margin: 270px 0 80px 0;
  h1 {
    font-size: 100px;
    margin: auto;
    margin-bottom: 50px;
    text-align: center;
    -webkit-filter: invert(1);
    filter: invert(1);
    font-family: fantasy;
  }
  .text {
    margin: -150px 0 0 0;
  }
`;

export default function Menu({ TooBattle, CustomGame }) {
  return (
    <Wrapper>
      <div className="text">
        <h1>Arena</h1>
      </div>
      <Button onClick={() => TooBattle()}>
        <p>Quick Game</p>
      </Button>
      <Button onClick={() => CustomGame()}>
        <p>Custom Game</p>
      </Button>
      <Button>
        <Link
          className="link-nocss"
          style={{ textDecoration: 'none', color: 'white', margin: 'auto' }}
          to="/"
        >
          <p>Leave Arena</p>
        </Link>
      </Button>
    </Wrapper>
  );
}
