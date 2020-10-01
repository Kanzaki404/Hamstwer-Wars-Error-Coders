import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// import winlogo from '../../assets/arena-background/winner.svg';

export const BannerWrapper = styled.div`
  margin: auto;
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
  -webkit-animation-duration: 1s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  filter: brightness(1);

  @keyframes fadeInRightBig {
    0% {
      opacity: 0.4;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  .age-name {
    font-family: 'Permanent Marker', cursive;
    font-size: 11px;
    position: absolute;
    color: white;
    margin: 36px 0 0px 65px;
    z-index: 1011;
  }
  strong {
    font-size: 20px;
    color: moccasin;
  }
  .rectangle {
    height: 550px;
    width: 250px;
    background: ${(props) =>
      props.Blue
        ? 'linear-gradient(180deg, rgba(0,53,91,1) 0%, rgb(0 86 134) 100%);'
        : 'linear-gradient(180deg,rgba(120,0,0,1) 0%,rgb(170 0 0) 100%);'};
    border-radius: 10px 10px 0 0;
    text-align: center;
    /* box-sizing: border-box; */
    padding-top: 10px;
    border-radius: 10px;

    h2 {
      color: white;
    }
    .dot {
      height: 45px;
      width: 45px;
      background-color: #1c1c1c;
      border-radius: 50%;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      z-index: 100;
      margin-top: 30px;
      margin-left: 50px;
      border: 2px solid white;
      position: absolute;
    }
    .age {
      color: white;
      margin: auto;
      font-family: 'Permanent Marker', cursive;
      font-size: 16px;
      position: absolute;
      margin: 16px 0 0 19px;
    }

    .weakInfo {
      color: white;
      background: rgba(255, 255, 255, 0.29);
      border: 1px solid #1c1c1c;
      display: grid;
      height: 66px;
      place-content: center;
      line-height: 19px;
      margin-bottom: 5px;

      /* margin: 10px 10px 0 10px; */
    }
    .statsInfo {
      /* height: 130px; */
      width: 150px;
      color: white;
      margin-top: 5px;

      z-index: 5;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      border-radius: 8px;
      padding-top: 1px;
      box-sizing: border-box;
      border-radius: 10px;
      filter: drop-shadow(-1px 1px 2px black);
    }
  }
  .triangle {
    width: 0;
    height: 0;

    border-left: 125px solid transparent;
    border-right: 125px solid transparent;

    border-top: 75px solid ${(props) => (props.Blue ? '#005686' : '#aa0000')};
    margin-top: -5px;
    .weakness {
      font-family: 'Architects Daughter', cursive;
      font-style: normal;
      font-weight: normal;
      font-size: 27px;
      line-height: 38px;
      text-align: center;
    }
  }
  .popup {
    animation-name: popup;
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-delay: 1.5s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;

    @keyframes popup {
      from {
        opacity: 0;
        filter: blur(10px);
      }

      to {
        filter: blur(0);
        opacity: 1;
      }
    }
  }
`;

export const TeamImg = styled.div`
  height: 170px;
  width: 170px;
  background-image: url(${({ image }) => (image !== null ? image : '')});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #000000;
  margin-top: 35px;
  margin-bottom: 10px;
  /* box-sizing: border-box; */
  filter: ${(props) =>
    props.Left
      ? 'drop-shadow(-5px 5px 0px black);'
      : 'drop-shadow(5px 5px 0px black);'};
  border-radius: 10px;
  transition: 1s;
  animation-name: terminator;
  animation-duration: 5s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: both;

  @keyframes terminator {
    0% {
      filter: saturate(1);
      transform: scale(1);
    }
    50% {
      filter: saturate(1.2);
      transform: scale(1.01);
    }
    100% {
      filter: saturate(1);
      transform: scale(1);
    }
  }
`;

const Button = styled.button`
  margin-top: 5px;
  background-color: #1c1c1c;
  color: white;
  height: 55px;
  width: 200px;
  border: 1px solid transparent;
  background: rgba(28, 28, 28, 0.7);
  border-radius: 10px;
  font-family: Quicksand;
  font-size: 16px;
  outline: 0;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background: #f4d03f;
    color: #000;
    box-shadow: 0px 0px 10px #f4d03f, 0px 0px 40px#F4D03F, 0px 0px 80px #f4d03f;
    transition-delay: 0.7s ease;
  }
`;

export const RedText = styled.h1`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  z-index: 1000;
  position: absolute;
  /* padding-left: 7px; */
  /* padding-top: 70px; */
  color: aliceblue;
  font-family: 'Piedra', cursive;
  font-size: 55px;
  margin-top: 55px;
  filter: drop-shadow(5px 4px 0px black);
`;

export const BlueText = styled.h1`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  z-index: 1000;
  position: absolute;
  /* padding-left: 7px; */
  /* padding-top: 70px; */
  color: aliceblue;
  font-family: 'Piedra', cursive;
  font-size: 55px;
  margin-top: 55px;
  filter: drop-shadow(-5px 4px 0px black);
`;

// const Winner = styled.div`
//   background: url(${winlogo});
//   z-index: 1000;
//   display: flex;
// `;

const baseUrl = 'http://localhost:5000/';

function Getimg(setImageFromServer, team) {
  axios
    .get(`${baseUrl}hamstersPhotos`, { params: team })
    .then((res) => {
      setImageFromServer(res.data);
    })
    .catch((err) => console.log('ERROR ---> ' + err));
}

export function TeamRed({ redFighter, chooseRed }) {
  const [imageFromServer, setImageFromServer] = useState('');

  useEffect(() => {
    Getimg(setImageFromServer, redFighter.imgName);
  }, [redFighter]);

  return (
    <BannerWrapper>
      <div className="rectangle">
        <TeamNames Red>Team Red</TeamNames>
        <span className="age-name">Age</span>
        <div className="dot">
          <span className="age">{redFighter.age}</span>
        </div>
        <div className="popup">
          <TeamImg className="profileImage" image={imageFromServer}></TeamImg>
        </div>
        <div className="weakInfo">
          <CardStats className="weakness">
            <strong>Weakness:</strong>
            <br />
            {redFighter.favFood}
          </CardStats>
        </div>
        <div className="weakInfo">
          <CardStats>
            <strong>Loves:</strong>
            <br />
            {redFighter.loves}
          </CardStats>
        </div>
        <div className="statsInfo">
          <CardStats>Wins: {redFighter.wins}</CardStats>
          <CardStats>Defeats: {redFighter.defeats}</CardStats>
          <CardStats>Games: {redFighter.games}</CardStats>
        </div>
        <Button onClick={chooseRed}>Choose Gladiator</Button>
      </div>
      <div className="triangle"></div>
    </BannerWrapper>
  );
}

const CardStats = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  filter: drop-shadow(1px 1px 0px black);
`;

const TeamNames = styled.h1`
  font-family: 'Piedra', cursive;
  color: ${(props) => (props.Red ? '#ff8f8f' : '#54bcee')};
  position: absolute;
  /* -webkit-filter: drop-shadow(-2px 0px 1px black); */
  filter: ${(props) =>
    props.Red
      ? 'drop-shadow(-1px -2px 1px black)'
      : 'drop-shadow(1px -2px 1px black)'};
  font-size: 45px;
  margin: ${(props) =>
    props.Red ? '-35px 3px 0px 45px' : '-35px 3px 0px 40px'};
`;

export function TeamBlue({ blueFighter, chooseBlue }) {
  const [imageFromServer, setImageFromServer] = useState('');

  useEffect(() => {
    Getimg(setImageFromServer, blueFighter.imgName);
  }, [blueFighter]);

  return (
    <BannerWrapper Blue Left>
      <div className="rectangle">
        <TeamNames>Team Blue</TeamNames>
        <span className="age-name">Age</span>
        <div className="dot">
          <span className="age">{blueFighter.age}</span>
        </div>
        <div className="popup">
          <TeamImg
            Left
            className="profileImage"
            image={imageFromServer}
          ></TeamImg>
        </div>
        <div className="weakInfo">
          <CardStats className="weakness">
            <strong>Weakness:</strong>
            <br />
            {blueFighter.favFood}
          </CardStats>
        </div>
        <div className="weakInfo">
          <CardStats>
            <strong>Loves:</strong>
            <br />
            {blueFighter.loves}
          </CardStats>
        </div>
        <div className="statsInfo">
          <CardStats>Wins: {blueFighter.wins}</CardStats>
          <CardStats>Defeats: {blueFighter.defeats}</CardStats>
          <CardStats>Games: {blueFighter.games}</CardStats>
        </div>
        <Button onClick={chooseBlue}>Choose Gladiator</Button>
      </div>
      <div className="triangle"></div>
    </BannerWrapper>
  );
}
