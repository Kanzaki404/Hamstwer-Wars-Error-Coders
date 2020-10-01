import React, {useState} from "react";
import styled from "styled-components";
import blood from "../assets/blood/red stain 1.jpg";
import blood2 from "../assets/blood/black-blood.jpg";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import volume from "../assets/musicIcons/volumevw.svg";
import mute from "../assets/musicIcons/mutewv.svg";
import hamsterfooter from "../assets/footer/hamster.png";
import sovjetMarch from '../assets/music/C&C Red Alert 3 Theme - Soviet March.mp3'
import img1 from '../assets/testPhotoGallery/gla-test1.png';
import img2 from '../assets/testPhotoGallery/hamster-bloody.jpg';

const LandingPageStyle = styled.div`
  width: auto;
  height: 91vh;
  text-align: center;
  background-image: url(${({ hovering }) => hovering === false ? img1 : img2});
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment:fixed;
  overflow: auto;
  z-index: 0;

  .info-text {
    display: flex;
    justify-content: center;
  }

  .welcome {
    font-size: 40px;
    font-family: 'Quicksand',sans-serif;
    margin-bottom: 30px;
    margin-top: 67px;
    -webkit-animation: fade-in;
    animation: fade-in;
    -webkit-animation-duration: 1.8s;
    animation-duration: 1.8s;

    .small {
      font-size: 28px;
      font-weight: bold;
    }
  }

  .text {
    display: block;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    color: white;
    margin: 20px;
    letter-spacing: 1px;
    line-height: 38px;
    width: 700px;

    .darker {
      font-size: 43px;
      font-weight: lighter;
      font-family: "Permanent Marker",cursive;
    }
    .goham-text {
        text-align: center;
        margin-bottom: 15px;
        animation: puff-in-center;
        animation-duration: 0.5s;
        span {
          font-weight: bold;
        }
    }
  }
  /* .warRat{
    <div className="warRat"></div>
    background-image: url(${hamsterfooter});
    height: 200px;
    width: 300px;
    position: absolute;
    top: 110px;
    right: 0;
    object-fit: contain;
    background-size: contain;
    background-repeat: no-repeat;
  } */
  .to-battle {
    font-family: 'Piedra', cursive;
    background-image:url(${blood});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 33px;
    width: 307px;
    height: 87px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    background: transparent;
    border-radius: 10px;
    color: white;
    border: 3px solid white;
    outline: none;
    :hover {
        animation: vibrate-3;
        animation-duration: 0.7s;
        animation-iteration-count: infinite;
        background-image:url(${blood2});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        font-family: "Permanent Marker", cursive;
    }
    .battle {
      font-size: 28px;
      font-weight: 400;
      margin-top: 24px;
    }
  }

  @keyframes blinking {
  0%{
    color: white;
  }
  100%{
    opacity: 0.9;
  }
}

  @keyframes vibrate-3 {
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
  @-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@media(max-width: 581px) {

    .welcome {

      font-size: 28px;

      .small {
        font-size: 34px;
        font-weight: bold;
      }

    }
    .text {
      font-size: 13px;
    }
}

@media (max-width: 456px) {

  .goham-text {
        font-size: 10px;
    }
}

@media(max-width: 360px) {

  .welcome {
    font-size: 23px;
    .small {
      font-size: 28px;
      font-weight: bold;
    }
  }
  .text {
      font-size: 10px;
      line-height: 25px;
    }

    .darker {
      font-size: 32px;
      font-weight: lighter;
      font-family: "Permanent Marker",cursive;
    }
  }
`;

const MusicWrapper = styled.div`
position: absolute;
bottom: 0;
left:0;
`;
const Volume = styled.button `
  background-image: url(${volume});
  background-color: transparent;
  color: white;
  margin: 90px;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  height: 74px;
  width: 60px;
  border: none;
  outline: none;
  background-position: center;
  cursor: pointer;

`;

const Mute = styled.div `
  background-image: url(${mute});
  background-color: transparent;
  color: white;
  margin: 90px;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  height: 74px;
  width: 60px;
  border: none;
  outline: none;
  background-position: center;
  cursor: pointer;
`;


const GoHamText = styled.div `
    font-family: 'Permanent Marker', cursive;
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 90px;
      margin: 67px;
      margin-bottom: 11px;
      -webkit-filter: url(#goo);
      filter: url(#goo);
      position: relative;
      -webkit-letter-spacing: -.12em;
      -moz-letter-spacing: -.12em;
      -ms-letter-spacing: -.12em;
      letter-spacing: -.12em;
      color: white;
      text-transform: uppercase;

      }

    .drop {
      width: .2em; height: .2em;
      border-radius: 0 100% 100% 100%;
      background-color: white;
      position: absolute;
      top: 72%;
      animation: drop 3s infinite both;

      &:nth-child(1) {
        left: 14%;
      }

      &:nth-child(2) {
        left: 39%;
        animation-delay: -.4s;
      }

      &:nth-child(3) {
        left: 55%;
        animation-delay: -1.5s;
      }

      &:nth-child(4) {
        left: 82%;
        animation-delay: -.8s;
      }

      &:nth-child(5) {
        left: 95.5%;
        animation-delay: -1.3s;
      }
    }

    @media(max-width: 360px) {

      .title {

        font-size: 60px;
      }

    }

      @keyframes drop {
        0% {
          transform: translateY(0) scaleX(.85) rotate(45deg);
          animation-timing-function: ease-out;
        }
        60% {
          transform: translateY(120%) scaleX(.85) rotate(45deg);
          animation-timing-function: ease-in;
        }
        80%, 100% {
          transform: translateY(5vh) scaleX(.85) rotate(45deg);
        }
      }
  `;


export default function LandingPage() {
  // const [play, { stop, isPlaying }] = useSound(sovjetMarch);
  // const [play] = useSound(sovjetMarch);
  //const [play, { stop, isPlaying }] = useSound(sovjetMarch);
  const [play, { stop }] = useSound(sovjetMarch, { volume: 0.2 });
  const [isPlaying, setisPlaying] = React.useState(true);
  const [hovering, setHovering] = useState(false)
  // const [hasPlayed, setPlayed] = React.useState(true);

  function playStop(){
    if(isPlaying){
      play();
    }else{
      stop();
    }
  }

  function resetMusic() {
      stop();
  }

  return (
    <LandingPageStyle hovering={hovering}>

      <div className="info-text">

        <div className="text">
        <GoHamText>
          <h1 className="title">
          GoHam
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
        </h1>
        </GoHamText>
          <p className="welcome">Welcome <span className="small">to</span> <span className="darker">GoHam!</span></p>

        <p className="goham-text">
          <span> GoHam</span> Arena hosts the <span>bloodiest</span>, most <span>intense</span> and <span>adorable</span> voting <span>Battles</span> in the Cosmos!

          <br></br>
          In the early dawn of year 2020, GoHam was created for its purpose for bringing All hamster lovers together to witness the glory of you and other powerful Hamster Warriors in action!
          <br></br>
          <br></br>

          The most loved Warrior takes their <span>VICTORY</span>
          <br></br>
         </p>
        </div>
      </div>



      <Link to="/arena"  >
        <button className="to-battle"
        onMouseEnter={() => {
          setHovering(true)
          playStop();
          setisPlaying(!isPlaying);
        }}
        onMouseLeave={() => {
          setHovering(false);
          playStop();
          setisPlaying(!isPlaying);
        }}
        >
         <p className="battle"
          onClick={() => {
            playStop();
            setisPlaying(!isPlaying);
          }}
         >TO BATTLE!</p>
        </button>
      </Link>


      <MusicWrapper>
        {!isPlaying ? <Volume className ="music-btn"
          onClick={() => {
            resetMusic();
            playStop();
            setisPlaying(!isPlaying);
          }}
          >
          </Volume>:

          <Mute className ="music-btn"
          onClick={() => {
          resetMusic();
          playStop();
          setisPlaying(!isPlaying);
        }}
        >
        </Mute>
        }
      </MusicWrapper>
    </LandingPageStyle>
  );
}
