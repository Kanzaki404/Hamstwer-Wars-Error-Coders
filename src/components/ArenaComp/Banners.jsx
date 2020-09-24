import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const BannerWrapper = styled.div`
  margin: auto;
  .rectangle {
    height: 550px;
    width: 250px;
    background-color: ${(props) => (props.Blue ? '#00355B' : '#790000')};
    border-radius: 10px 10px 0 0;
    text-align: center;
    box-sizing: border-box;
    padding-top: 25px;
    box-shadow: 10px 3px 9px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    h2 {
      color: white;
    }
    .dot {
      height: 50px;
      width: 50px;
      background-color: #1c1c1c;
      border-radius: 50%;
      display: inline-flex;
      z-index: 100;
      margin-bottom: -500px;
      margin-right: -150px;
      border: 2px solid white;
      position: relative;
    }
    .age {
      color: white;
      margin: auto;
    }

    .weakInfo {
      color: white;
    }
    .statsInfo {
      height: 130px;
      width: 150px;
      color: white;

      z-index: 5;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      border-radius: 8px;
      padding-top: 1px;
      background: rgba(255, 255, 255, 0.29);
      border: 1px solid #1c1c1c;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }
  .triangle {
    width: 0;
    height: 0;

    border-left: 125px solid transparent;
    border-right: 125px solid transparent;

    border-top: 75px solid ${(props) => (props.Blue ? '#00355B' : '#790000')};
    margin-top: -5px;
    .weakness {
      font-family: Architects Daughter;
      font-style: normal;
      font-weight: normal;
      font-size: 27px;
      line-height: 38px;
      text-align: center;
    }
  }
`;

const TeamImg = styled.div`
  height: 170px;
  width: 170px;
  background-image: url(${({ image }) => (image !== null ? image : '')});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  border: 5px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(3px 3px 9px rgba(0, 0, 0, 0.7));
  border-radius: 10px;
`;

const Button = styled.button`
  margin: 30px;
  background-color: #1c1c1c;
  color: white;
  height: 40px;
  width: 200px;
  border: 1px solid transparent;
  background: rgba(28, 28, 28, 0.7);
  box-shadow: 10px 3px 9px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  font-family: Quicksand;
`;

export const RedText = styled.h1`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  z-index: 1000;
  position: absolute;
  /* padding-left: 7px; */
  /* padding-top: 70px; */
  color: white;
  font-family: 'Piedra', cursive;
  font-size: 60px;
  margin-top: 70px;
`;

export const BlueText = styled.h1`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  z-index: 1000;
  position: absolute;
  /* padding-left: 7px; */
  /* padding-top: 70px; */
  color: white;
  font-family: 'Piedra', cursive;
  font-size: 60px;
  margin-top: 70px;
`;

const baseUrl = 'http://localhost:5000/';

function Getimg(setImageFromServer, team) {
  axios
    .get(`${baseUrl}hamstersPhotos`, { params: team })
    .then((res) => {
      setImageFromServer(res.data);
    })
    .catch((err) => console.log('ERROR ---> ' + err));
}

export function TeamRed({ redFighter }) {
  const [imageFromServer, setImageFromServer] = useState('');

  useEffect(() => {
    Getimg(setImageFromServer, redFighter.imgName);
  }, [redFighter]);

  return (
    <BannerWrapper>
      <div className="rectangle">
        <div className="dot">
          <span className="age">{redFighter.age}</span>
        </div>
        <TeamImg className="profileImage" image={imageFromServer}></TeamImg>
        <div className="weakInfo">
          <p className="weakness">
            Weakness:&nbsp;
            {redFighter.favFood}
          </p>
          <p>{redFighter.loves}</p>
        </div>
        <div className="statsInfo">
          <p>Wins: {redFighter.wins}</p>
          <p>Defeats: {redFighter.defeats}</p>
          <p>Games: {redFighter.games}</p>
        </div>
        <Button>Choose Team Red</Button>
      </div>
      <div className="triangle"></div>
    </BannerWrapper>
  );
}

export function TeamBlue({ blueFighter }) {
  const [imageFromServer, setImageFromServer] = useState('');

  useEffect(() => {
    Getimg(setImageFromServer, blueFighter.imgName);
  }, [blueFighter]);

  return (
    <BannerWrapper Blue>
      <div className="rectangle">
        <div className="dot">
          <span className="age">{blueFighter.age}</span>
        </div>
        <TeamImg className="profileImage" image={imageFromServer}></TeamImg>
        <div className="weakInfo">
          <p className="weakness">
            Weakness:&nbsp;
            {blueFighter.favFood}
          </p>
          <p>{blueFighter.loves}</p>
        </div>
        <div className="statsInfo">
          <p>Wins: {blueFighter.wins}</p>
          <p>Defeats: {blueFighter.defeats}</p>
          <p>Games: {blueFighter.games}</p>
        </div>
        <Button>Choose Team Blue</Button>
      </div>
      <div className="triangle"></div>
    </BannerWrapper>
  );
}
