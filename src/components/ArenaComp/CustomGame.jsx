import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { MiniMenu } from '../../components/ArenaComp/ReplayBack';
import { TeamImg } from '../ArenaComp/Banners';

import defHamster from '../../assets/testPhotoGallery/default-warrior.jpg';
import RedFlag from '../../assets/arena-background/redFlag.png';
import BlueFlag from '../../assets/arena-background/blueFlag.png';

const baseUrl = 'http://localhost:5000/';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  animation: test 3s ease;

  @keyframes test {
    0% {
      transform: translate(0, 85vh);
    }

    100% {
      transform: translate(0, 0);
    }
  }
`;

const ChooseRed = styled.div`
  background-image: url(${RedFlag});
  height: 350px;
  width: 155px;
  background-repeat: no-repeat;
  transform: scale(1.8);
  transition: all 0.6s;
  filter: drop-shadow(2px 2px 2px black);

  .statsInfo {
    /* height: 130px; */
    width: 150px;
    color: white;
    /* margin-top: 5px; */
    margin-top: 13px;
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
  .dot {
    height: 30px;
    width: 30px;
    background-color: #1c1c1c;
    border-radius: 50%;
    display: inline-flex;
    z-index: 100;
    margin-top: 20px;
    margin-left: 105px;
    border: 2px solid white;
    position: absolute;
  }
  .age {
    color: white;
    margin: auto;
    font-family: 'Permanent Marker', cursive;
    font-size: 12px;
    position: absolute;
    margin: 10px 0 0 11px;
  }
  .age-name {
    font-family: 'Permanent Marker', cursive;
    font-size: 8px;
    position: absolute;
    color: white;
    margin: 23px 0 0px 114px;
    z-index: 1011;
  }

  :hover {
    transform: scale(1.9);
    outline: none;

    filter: ${(props) =>
      props.Blue
        ? 'drop-shadow(0px 0px 20px black)'
        : 'drop-shadow(0px 0px 20px black)'};
  }
`;

const ChooseBlue = styled(ChooseRed)`
  filter: drop-shadow(-2px 2px 2px black);
  background-image: url(${BlueFlag});
  margin-left: 780px;
`;

const Button = styled.button`
  margin: auto;
  display: flex;
  /* margin-top: 50px; */
  place-content: center;

  margin-top: 15px;
  background-color: #1c1c1c;
  color: white;
  height: 30px;
  width: 100px;
  border: 1px solid transparent;
  background: rgba(28, 28, 28, 0.7);
  border-radius: 10px;
  font-family: Quicksand;
  font-size: 12px;
  outline: 0;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;

  p {
    margin: auto;
  }

  :hover {
    background: #f4d03f;
    color: #000;
    box-shadow: 0px 0px 10px #f4d03f, 0px 0px 40px#F4D03F, 0px 0px 80px #f4d03f;
    transition-delay: 0.7s ease;
  }
`;

const ChooseGladiator = styled(TeamImg)`
  height: 100px;
  width: 100px;
  overflow: hidden;

  img {
    height: 100px;
  }
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-style: dotted;
  border-width: 50px 0 50px 50px;
  border-color: transparent transparent transparent #ffeed0;
  position: absolute;
  left: 260px;
  filter: drop-shadow(2px 2px 0px black);
  transition: all 0.3s;

  :hover {
    transform: scale(1.2);
  }
`;

const ArrowLeft = styled(Arrow)`
  left: -155px;
  transform: rotate(180deg);
  :hover {
    transform: rotate(180deg) scale(1.2);
  }
`;

const Arrow2 = styled.div`
  width: 0;
  height: 0;
  border-style: dotted;
  border-width: 50px 0 50px 50px;
  border-color: transparent transparent transparent #ffeed0;
  position: absolute;
  left: 1195px;
  filter: drop-shadow(2px 2px 0px black);
  transition: all 0.3s;

  :hover {
    transform: scale(1.2);
  }
`;

const Arrow2Left = styled(Arrow2)`
  left: 775px;
  transform: rotate(180deg);
  :hover {
    transform: rotate(180deg) scale(1.2);
  }
`;
const CardStats = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  filter: drop-shadow(1px 1px 0px black);
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 0;
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
  font-size: 27px;
  margin: ${(props) =>
    props.Red ? '-18px 0px 0px 28px' : '-18px 0px 0px 25px'};
`;

function Getimg(setImageFromServer, team) {
  axios
    .get(`${baseUrl}hamstersPhotos`, { params: team })
    .then((res) => {
      setImageFromServer(res.data);
    })
    .catch((err) => console.log('ERROR ---> ' + err));
}

export default function CustomMode({
  mainmenu,
  CustomBattle,
  CustomHamsters,
  Callback,
}) {
  const [imageRed, setimageRed] = useState('');
  const [imageBlue, setimageBlue] = useState('');
  const [choosered, setchoosered] = useState(0);
  const [chooseblue, setchooseblue] = useState(1);
  const [len, setlen] = useState(0);
  const [customfight, setcustomfight] = useState([]);

  useEffect(() => {
    setlen(CustomHamsters.length);
    Getimg(setimageRed, CustomHamsters[choosered].imgName);
    Getimg(setimageBlue, CustomHamsters[chooseblue].imgName);
    GetID();
  }, [choosered, chooseblue]);

  function GetID() {
    setcustomfight([
      CustomHamsters[choosered].id,
      CustomHamsters[chooseblue].id,
    ]);
    console.log(customfight);
  }

  function GetRedData(direction) {
    if (direction === 'left') {
      if (choosered === 0) {
        setchoosered(len - 1);
      } else {
        setchoosered(choosered - 1);
      }
    } else {
      if (choosered === len - 1) {
        setchoosered(0);
      } else {
        setchoosered(choosered + 1);
      }
    }
  }

  function GetBlueData(direction) {
    if (direction === 'left') {
      if (chooseblue === 0) {
        setchooseblue(len - 1);
      } else {
        setchooseblue(chooseblue - 1);
      }
    } else {
      if (chooseblue === len - 1) {
        setchooseblue(0);
      } else {
        setchooseblue(chooseblue + 1);
      }
    }
  }

  return (
    <Wrapper>
      <ArrowLeft onClick={() => GetRedData('left')} />
      <ChooseRed>
        <TeamNames Red>Team Red</TeamNames>
        <span className="age-name">Age</span>
        <div className="dot">
          <span className="age">{CustomHamsters[choosered].age}</span>
        </div>
        <ChooseGladiator>
          <img src={imageRed}></img>
        </ChooseGladiator>
        <div className="statsInfo">
          <CardStats>Wins: {CustomHamsters[choosered].wins}</CardStats>
          <CardStats>Defeats: {CustomHamsters[choosered].defeats}</CardStats>
          <CardStats>Games: {CustomHamsters[choosered].games}</CardStats>
        </div>
        <Button>
          <p>{CustomHamsters[choosered].name}</p>
        </Button>
      </ChooseRed>
      <Arrow onClick={() => GetRedData('right')} />
      <MiniMenu
        customfight={customfight}
        Callback={Callback}
        mainmenu={() => mainmenu()}
        CustomBattle={() => CustomBattle()}
      />

      <Arrow2Left onClick={() => GetBlueData('left')} />
      <ChooseBlue>
        <TeamNames>Team Blue</TeamNames>
        <span className="age-name">Age</span>
        <div className="dot">
          <span className="age">{CustomHamsters[chooseblue].age}</span>
        </div>
        <ChooseGladiator>
          <img src={imageBlue}></img>
        </ChooseGladiator>
        <div className="statsInfo">
          <CardStats>Wins: {CustomHamsters[chooseblue].wins}</CardStats>
          <CardStats>Defeats: {CustomHamsters[chooseblue].defeats}</CardStats>
          <CardStats>Games: {CustomHamsters[chooseblue].games}</CardStats>
        </div>
        <Button>
          <p>{CustomHamsters[chooseblue].name}</p>
        </Button>
      </ChooseBlue>
      <Arrow2 onClick={() => GetBlueData('right')} />
    </Wrapper>
  );
}
