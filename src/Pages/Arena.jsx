import React, { useState, useEffect } from 'react';
import background from '../assets/arena-background/colosseum.jpg';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import logo from '../assets/logo/logoHamster.png';

import CustomMode from '../components/ArenaComp/CustomGame';
import CountDown from '../components/ArenaComp/CountDown';
import {
  ReplayBack,
  ReplayBackWinRed,
  ReplayBackWinBlue,
  ReplayBackCustom,
} from '../components/ArenaComp/ReplayBack';
import Menu from '../components/ArenaComp/menu';
import Clouds from '../components/ArenaComp/Clouds';
import { Moon } from '../components/ArenaComp/SunMoon';
import {
  TeamRed,
  TeamBlue,
  RedText,
  BlueText,
} from '../components/ArenaComp/Banners';

import redImg from '../assets/arena-background/redFlag.png';
import blueImg from '../assets/arena-background/blueFlag.png';
import Vs from '../assets/arena-background/VS.png';
import swordsImg from '../assets/arena-background/Swords.png';
import WinImg from '../assets/arena-background/WinnerText.png';
import WinBannerRed from '../assets/arena-background/winBannerRed.png';
import WinBannerBlue from '../assets/arena-background/winBannerBlue.png';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const BackgroundWrapper = styled.div`
  background: url(${background});
  background-size: cover;
  height: 89vh;
  display: flex;
  flex-direction: row;

  /* background-repeat: round; */
  animation: blur 3s ease-in-out;
  @keyframes blur {
    0% {
      filter: blur(20px);
    }
    100% {
      filter: blur(0px);
    }
  }
`;

const VSimg = styled.div`
  margin: auto 0;
  /* color: white;
  font-family: Permanent Marker;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 210px; */

  width: 330px;
  height: 360px;
  background-image: url(${Vs});
  background-repeat: no-repeat;
  animation-name: scale-up-center;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  background-size: contain;
  transform-style: preserve-3d;

  @keyframes scale-up-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    30% {
      transform: scale(0);
      opacity: 0;
    }
    88% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(0.85);
    }
  }
`;

const RedFlag = styled.div`
  background: url(${redImg});
  height: 350px;
  width: 150px;
  background-repeat: no-repeat;
  transform: scale(0.9);
`;

const BlueFlag = styled.div`
  background: url(${blueImg});
  /* margin: auto; */
  height: 350px;
  width: 150px;
  transform: scale(0.9);
  background-repeat: no-repeat;
`;

const CardWrapper = styled.div`
  filter: ${(props) =>
      props.Blue
        ? 'drop-shadow(-3px 0px 4px black)'
        : 'drop-shadow(3px 0px 4px black)'}
    brightness(0.95);
  display: flex;
  flex-direction: row;
  margin: auto;
  animation: slow-move 3s ease-in-out;
  animation-direction: alternate;
  transition: transform 0.6s;
  :hover {
    transform: scale(1.1);
    outline: none;
    filter: ${(props) =>
      props.Blue
        ? 'drop-shadow(0px 0px 20px black)'
        : 'drop-shadow(0px 0px 20px black)'};
  }
  /* animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both; */

  @keyframes slow-move {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0.1;
      filter: blur(20px);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
      filter: blur(0);
    }
  }
`;

const MenuWrapper = styled(CardWrapper)``;

const FlagWrapperLeft = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  margin-right: 15px;
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
  -webkit-animation-duration: 1s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
`;

const FlagWrapperRight = styled.div`
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
  -webkit-animation-duration: 1s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  display: flex;
  flex-direction: row;
  place-content: center;
  margin-left: 15px;
`;

const Load = styled.div`
  --effect: hover 5s linear infinite;

  margin: 0;

  display: flex;

  height: 89vh;
  background: black;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    display: inline-block;
    text-transform: uppercase;
    text-align: center;
    font-size: 4em;
    font-family: arial;
    font-weight: 600;
    transform: scale(0.5);
    color: #121212;
    -webkit-text-stroke: 2px gray;
  }

  p:nth-child(1) {
    animation: var(--effect);
  }

  p:nth-child(2) {
    animation: var(--effect) 0.385s;
  }

  p:nth-child(3) {
    animation: var(--effect) 0.771s;
  }

  p:nth-child(4) {
    animation: var(--effect) 1.15s;
  }

  p:nth-child(5) {
    animation: var(--effect) 1.54s;
  }

  p:nth-child(6) {
    animation: var(--effect) 1.92s;
  }

  p:nth-child(7) {
    animation: var(--effect) 2.31s;
  }
  p:nth-child(8) {
    animation: var(--effect) 2.7s;
  }
  p:nth-child(9) {
    animation: var(--effect) 3.08s;
  }

  @keyframes hover {
    0% {
      transform: scale(0.5);
      color: white;
      -webkit-text-stroke: 2px gray;
    }

    20% {
      transform: scale(0.85);
      color: white;
      -webkit-text-stroke: 3px red;
      filter: drop-shadow(0 0 1px black) drop-shadow(0 0 1px black)
        drop-shadow(0 0 3px red) drop-shadow(0 0 5px red) hue-rotate(200turn);
    }

    50% {
      transform: scale(0.5);
      color: white;
      -webkit-text-stroke: 2px gray;
    }
  }
`;

const ConstantSpin = styled.div`
  display: flex;
  flex-direction: row;
  animation: spin 25s infinite;
  filter: saturate(1.05);

  .red-winner {
    /* .age {
      display: none;
    }
    .age-name {
      display: none;
    }
    .dot {
      display: none;
    } */
    .weakInfo {
      display: none;
    }
    h1 {
      display: none;
    }
    .rectangle {
      height: 400px;
    }
    Button {
      display: none;
    }
    /* .ejVJCT {
      margin: 130px 0 0 0;
    } */

    margin: 130px 0 0 0;

    .statsInfo {
      display: none;
    }
  }

  @keyframes spin {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(8px, 0);
    }
    50% {
      transform: translate(0, 8px);
    }
    75% {
      transform: translate(8px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .rotate {
    display: flex;

    animation-name: vibrate-fast;
    animation-duration: 25s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
  }
  @keyframes vibrate-fast {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    10% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    20% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    30% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    50% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    70% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    80% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    90% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
`;

const Book = styled.div`
  background: rgb(255 165 0 / 20%);
  filter: drop-shadow(0px 0px 1px black);
  background-size: cover;
  height: 89vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  z-index: 2;

  animation: weather 45s infinite ease-in-out;
  animation-direction: alternate;

  @keyframes weather {
    from {
      background: rgb(255 165 0 / 20%);
    }
    to {
      background: rgb(0 0 0 / 30%);
    }
  }
`;

const RedWinner = styled(TeamRed)``;

const BlueWinner = styled(TeamBlue)``;

const WinText = styled.div`
  background: url(${WinImg});
  height: 355px;
  width: 700px;
  transform: scale(0.6);
  display: flex;
  position: absolute;
  z-index: 100;
  margin: -170px 0 0 -215px;
  animation-name: scale-up-center;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 2.2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;

  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(0.5);
    }
  }
`;

const WinTextWrapper = styled.div`
  background: url(${WinBannerRed});
  height: 165px;
  width: 800px;

  display: flex;
  position: absolute;
  margin: 345px 0 0 -275px;

  .animation {
  }
  animation-name: slide;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translate(3000px, 0);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
      transform: scale(0.6);
    }
  }

  .winner-text {
    margin: auto;
    h1 {
      margin: 0;
      z-index: 1000;
      color: white;
      font-family: 'Piedra', cursive;
      font-size: 80px;
      position: relative;
      /* margin: 35px 0 0 310px; */
      -webkit-filter: drop-shadow(5px 4px 0px black);
      filter: drop-shadow(5px 4px 0px black);
      writing-mode: horizontal-tb;
    }
  }
`;

const BlueWrapper = styled(WinTextWrapper)`
  background: url(${WinBannerBlue});
`;

const WinIcon = styled.div`
  background: url(${logo});
  width: 150px;
  height: 176px;
  background-repeat: no-repeat;
  position: absolute;
  margin: 445px 0 0 50px;
  transform: scale(0.45);
  filter: drop-shadow(0px 2px 1px black);
  opacity: 0;

  animation: fadein 3s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const GameText = styled.h1`
  filter: drop-shadow(-4px 2px 8px black);
  font-family: 'Piedra', cursive;
  font-weight: bolder;
  color: white;
  position: absolute;
  font-size: 50px;
  margin: 0px 0 40px 40px;
  bottom: 0;

  animation: fader 5s ease-in-out;

  @keyframes fader {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CustomText = styled(GameText)`
  margin: 0px 0 40px 30px;
`;
const CustomText2 = styled(CustomText)`
  bottom: 115px;
  left: 320px;
  font-size: 70px;
`;

const ModeDiv = styled.div``;

const WinnerWrapper = styled(CardWrapper)``;

export default function Arena() {
  const [hamsters, setHamsters] = useState([]);
  const [CustomHamsters, setCustomHamsters] = useState([]);
  const [loading, setloading] = useState(true);
  const [red, setred] = useState(false);
  const [blue, setblue] = useState(false);
  const [menu, setmenu] = useState(true);
  const [battle, setbattle] = useState(false);
  const [clean, setclean] = useState(false);
  const [customgame, setcustomgame] = useState(false);
  const [customgamebattle, setcustomgamebattle] = useState(false);
  const [customduo, setcustomduo] = useState([]);
  const [redcustom, setredcustom] = useState(false);
  const [bluecustom, setbluecustom] = useState(false);

  useEffect(() => {
    getHamsta(setHamsters);
    AllHamsters(setCustomHamsters);
    setredcustom(false);
    setbluecustom(false);
    setred(false);
    setblue(false);
    setclean(false);
    setbattle(false);
    setcustomgame(false);
    setcustomgamebattle(false);
    setmenu(true);
  }, []);

  const baseUrl = 'http://localhost:5000/';

  function getHamsta(setHamsters) {
    axios
      .get(`${baseUrl}battle`)
      .then((res) => {
        setHamsters(res.data);
        setloading(false);
      })
      .catch((err) => console.log('ERROR ---> ' + err));
  }

  function AllHamsters(setCustomHamsters) {
    axios
      .get(`${baseUrl}hamsters`)
      .then((res) => {
        console.log(res.data);
        setCustomHamsters(res.data);
      })
      .catch((err) => console.log('ERROR ---> ' + err));
  }

  function Callback(e) {
    axios
      .get(`${baseUrl}battle/${e[0]}/${e[1]}`)
      .then((res) => {
        console.log(res.data);
        setcustomduo(res.data);
      })
      .catch((err) => console.log('ERROR ---> ' + err));

    // setcustomduo(e);
  }

  function SendWinner() {
    let winner = {};

    if (red) {
      winner.red = hamsters[0].id;
      winner.blue = hamsters[1].id;
    }
    if (blue) {
      winner.blue = hamsters[0].id;
      winner.red = hamsters[1].id;
    }
    let datatosend = JSON.stringify(winner);

    axios
      .put(`${baseUrl}result/${datatosend}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log('ERROR ---> ' + err));
  }

  function SendCustomWinner() {
    let winner = {};

    if (redcustom) {
      winner.red = customduo[0].id;
      winner.blue = customduo[1].id;
    }
    if (bluecustom) {
      winner.blue = customduo[0].id;
      winner.red = customduo[1].id;
    }
    let datatosend = JSON.stringify(winner);

    axios
      .put(`${baseUrl}result/${datatosend}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log('ERROR ---> ' + err));
  }

  function mainmenu() {
    setred(false);
    setblue(false);
    setclean(false);
    setbattle(false);
    setcustomgamebattle(false);
    setcustomgame(false);
    setredcustom(false);
    setbluecustom(false);
    setmenu(true);
  }

  function replay() {
    setclean(true);
    setred(false);
    setblue(false);
    setbattle(false);
    setcustomgamebattle(false);
    setredcustom(false);
    setbluecustom(false);
    setTimeout(() => {
      getHamsta(setHamsters);
      setclean(false);
    }, 3900);

    setbattle(true);
  }

  function TooBattle() {
    setmenu(false);
    setclean(true);
    setTimeout(() => {
      getHamsta(setHamsters);
      setclean(false);
    }, 3900);
    setbattle(true);
  }

  function CustomGame() {
    setmenu(false);
    setred(false);
    setblue(false);
    setclean(false);
    setbattle(false);
    setTimeout(() => {}, 3800);
    setcustomgame(true);
  }

  function CustomBattle() {
    setred(false);
    setblue(false);
    setbattle(false);
    setcustomgame(false);
    setmenu(false);
    setclean(true);
    setTimeout(() => {
      setclean(false);
    }, 3800);
    setcustomgamebattle(true);
  }

  function CustomWinRed() {
    setbluecustom(false);
    setred(false);
    setblue(false);
    setclean(false);
    setbattle(false);
    setcustomgame(false);
    setcustomgamebattle(false);
    setmenu(false);
    setredcustom(true);
  }

  function CustomWinBlue() {
    setredcustom(false);
    setred(false);
    setblue(false);
    setclean(false);
    setbattle(false);
    setcustomgame(false);
    setcustomgamebattle(false);
    setmenu(false);
    setbluecustom(true);
  }

  if (loading) {
    return (
      <Load>
        <p>l</p>
        <p>o</p>
        <p>a</p>
        <p>d</p>
        <p>i</p>
        <p>n</p>
        <p>g</p>
        <p>.</p>
        <p>.</p>
      </Load>
    );
  }
  if (clean) {
    return (
      <BackgroundWrapper style={{ transition: '0s' }}>
        <GlobalStyle />
        <Clouds />
        <Moon />
        <Book>
          <MenuWrapper>
            <ConstantSpin>
              <CountDown />
            </ConstantSpin>
          </MenuWrapper>
        </Book>
      </BackgroundWrapper>
    );
  }
  if (menu) {
    return (
      <BackgroundWrapper>
        <GlobalStyle />
        <Clouds />

        <Book>
          <MenuWrapper>
            <ConstantSpin>
              <Menu
                TooBattle={() => TooBattle()}
                CustomGame={() => CustomGame()}
              />
            </ConstantSpin>
          </MenuWrapper>
        </Book>
        <Moon />
      </BackgroundWrapper>
    );
  }

  if (customgame) {
    return (
      <BackgroundWrapper>
        <GlobalStyle />
        <Clouds />

        <Book>
          <ConstantSpin style={{ margin: 'auto' }}>
            <CustomMode
              Callback={(e) => Callback(e)}
              CustomHamsters={CustomHamsters}
              mainmenu={() => mainmenu()}
              CustomBattle={() => CustomBattle()}
            />

            <CustomText2>Custom Game</CustomText2>
          </ConstantSpin>
        </Book>
        <Moon />
      </BackgroundWrapper>
    );
  }

  if (customgamebattle) {
    return (
      <BackgroundWrapper>
        <GlobalStyle />
        <Clouds />

        <Book>
          <CardWrapper>
            <ConstantSpin>
              <FlagWrapperLeft>
                <RedFlag />
                <RedText>{customduo[1].name}</RedText>
              </FlagWrapperLeft>
              <TeamRed
                chooseRed={() => CustomWinRed()}
                redFighter={customduo[1]}
              />
            </ConstantSpin>
          </CardWrapper>
          <ConstantSpin>
            <div className="rotate">
              <VSimg />
              <ReplayBackCustom
                mainmenu={() => mainmenu()}
                CustomGame={() => CustomGame()}
              />
              <CustomText>Custom Game</CustomText>
            </div>
          </ConstantSpin>
          <CardWrapper Blue>
            <ConstantSpin>
              <TeamBlue
                chooseBlue={() => CustomWinBlue()}
                blueFighter={customduo[0]}
              />
              <FlagWrapperRight>
                <BlueFlag />
                <BlueText>{customduo[0].name}</BlueText>
              </FlagWrapperRight>
            </ConstantSpin>
          </CardWrapper>
        </Book>
        <Moon />
      </BackgroundWrapper>
    );
  }

  if (red) {
    SendWinner();
    return (
      <BackgroundWrapper>
        <GlobalStyle />
        <Clouds />

        <Book>
          <WinnerWrapper>
            <ConstantSpin>
              <WinText />
              <div className="red-winner">
                <RedWinner redFighter={hamsters[0]} />
              </div>
              <WinTextWrapper Red>
                <div className="winner-text">
                  <RedText>{hamsters[0].name}</RedText>
                </div>
              </WinTextWrapper>
              {/* <FlagWrapperLeft>
                <RedFlag />
                
              </FlagWrapperLeft> */}
              {/* <WinIcon /> */}
              <ReplayBackWinRed
                mainmenu={() => mainmenu()}
                replay={() => replay()}
                className="win-menu"
              />
            </ConstantSpin>
          </WinnerWrapper>
        </Book>
        <Moon />
      </BackgroundWrapper>
    );
  }
  if (redcustom) {
    SendCustomWinner();
    return (
      <BackgroundWrapper>
        <GlobalStyle />
        <Clouds />

        <Book>
          <WinnerWrapper>
            <ConstantSpin>
              <WinText />
              <div className="red-winner">
                <RedWinner redFighter={customduo[1]} />
              </div>
              <WinTextWrapper Red>
                <div className="winner-text">
                  <RedText>{customduo[1].name}</RedText>
                </div>
              </WinTextWrapper>
              {/* <FlagWrapperLeft>
                <RedFlag />
                
              </FlagWrapperLeft> */}
              {/* <WinIcon /> */}
              <ReplayBackWinRed
                mainmenu={() => mainmenu()}
                replay={() => CustomGame()}
                className="win-menu"
              />
            </ConstantSpin>
          </WinnerWrapper>
        </Book>
        <Moon />
      </BackgroundWrapper>
    );
  }
  if (blue) {
    SendWinner();
    return (
      <BackgroundWrapper>
        <GlobalStyle />
        <Clouds />

        <Book>
          <WinnerWrapper>
            <ConstantSpin>
              <WinText />
              <div className="red-winner">
                <BlueWinner blueFighter={hamsters[1]} />
              </div>
              <BlueWrapper>
                <div className="winner-text">
                  <RedText>{hamsters[1].name}</RedText>
                </div>
              </BlueWrapper>
              {/* <FlagWrapperLeft>
                <RedFlag />
                
              </FlagWrapperLeft> */}
              {/* <WinIcon /> */}
              <ReplayBackWinBlue
                mainmenu={() => mainmenu()}
                replay={() => replay()}
                className="win-menu"
              />
            </ConstantSpin>
          </WinnerWrapper>
        </Book>
        <Moon />
      </BackgroundWrapper>
    );
  }
  if (bluecustom) {
    SendCustomWinner();
    return (
      <BackgroundWrapper>
        <GlobalStyle />
        <Clouds />

        <Book>
          <WinnerWrapper>
            <ConstantSpin>
              <WinText />
              <div className="red-winner">
                <BlueWinner blueFighter={customduo[0]} />
              </div>
              <BlueWrapper>
                <div className="winner-text">
                  <RedText>{customduo[0].name}</RedText>
                </div>
              </BlueWrapper>
              {/* <FlagWrapperLeft>
                <RedFlag />
                
              </FlagWrapperLeft> */}
              {/* <WinIcon /> */}
              <ReplayBackWinBlue
                mainmenu={() => mainmenu()}
                replay={() => CustomGame()}
                className="win-menu"
              />
            </ConstantSpin>
          </WinnerWrapper>
        </Book>
        <Moon />
      </BackgroundWrapper>
    );
  }
  if (battle) {
    return (
      <BackgroundWrapper>
        <GlobalStyle />
        <Clouds />

        <Book>
          <CardWrapper>
            <ConstantSpin>
              <FlagWrapperLeft>
                <RedFlag />
                <RedText>{hamsters[0].name}</RedText>
              </FlagWrapperLeft>
              <TeamRed
                chooseRed={() => setred(true)}
                redFighter={hamsters[0]}
              />
            </ConstantSpin>
          </CardWrapper>
          <ConstantSpin>
            <div className="rotate">
              <VSimg />
              <ReplayBack mainmenu={() => mainmenu()} replay={() => replay()} />
              <GameText>Quick Game</GameText>
            </div>
          </ConstantSpin>
          <CardWrapper Blue>
            <ConstantSpin>
              <TeamBlue
                chooseBlue={() => setblue(true)}
                blueFighter={hamsters[1]}
              />
              <FlagWrapperRight>
                <BlueFlag />
                <BlueText>{hamsters[1].name}</BlueText>
              </FlagWrapperRight>
            </ConstantSpin>
          </CardWrapper>
        </Book>
        <Moon />
      </BackgroundWrapper>
    );
  }
}
