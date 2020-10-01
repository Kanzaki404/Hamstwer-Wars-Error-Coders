import styled from 'styled-components';
import clouds from '../../assets/arena-background/Clouds.png';
import React from 'react';

import fog from './FogStyle/fog.css';

const BotCloud = styled.div`
  transform: scale(0.4);
  z-index: 0;
  position: fixed;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0px;
  padding: 0px;
  background: url(${clouds});
  background-repeat: no-repeat;

  filter: grayscale(1);

  animation: awan-animasi 100s linear infinite;
  @keyframes awan-animasi {
    0% {
      left: -151%;
      bottom: -77vh;
      top: 65vh;
    }
    10% {
      top: 70vh;
    }
    25% {
      top: 70vh;
    }
    35% {
      top: 65vh;
    }
    50% {
      top: 65vh;
    }
    85% {
      top: 70vh;
    }
    100% {
      left: 100%;
      bottom: -77vh;
      top: 70vh;
    }
  }
`;

const BotCloud2 = styled.div`
  transform: scale(0.55);
  z-index: 0;
  position: fixed;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0px;
  padding: 0px;
  background: url(${clouds});
  background-repeat: no-repeat;

  /* filter: grayscale(0.7); */
  filter: grayscale(1);
  /* filter: brightness(0.3); */

  animation: gliding 100s linear infinite;
  @keyframes gliding {
    0% {
      left: -81%;
      bottom: -77vh;
      top: 70vh;
    }
    10% {
      top: 65vh;
    }
    25% {
      top: 65vh;
    }
    35% {
      top: 70vh;
    }
    50% {
      top: 70vh;
    }
    85% {
      top: 65h;
    }
    100% {
      left: 100%;
      bottom: -77vh;
      top: 65vh;
    }
  }
`;

const BotReverse = styled.div`
  transform: scale(0.3);
  z-index: 1;
  position: fixed;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0px;
  padding: 0px;
  background: url(${clouds});
  background-repeat: no-repeat;

  /* filter: grayscale(0.7); */
  filter: sepia(0.9);
  /* filter: brightness(0.5); */

  animation: reverse-cloud 100s linear infinite;
  @keyframes reverse-cloud {
    0% {
      left: 72%;
      bottom: 10vh;
    }

    100% {
      left: -100%;
      bottom: 10vh;
    }
  }
`;

const Bot3 = styled.div`
  transform: scale(0.42);
  z-index: 0;
  position: fixed;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0px;
  padding: 20px;
  background: url(${clouds});
  background-repeat: no-repeat;

  filter: brightness(10);
  /* filter: sepia(0.8);
  filter: brightness(0.7); */

  animation: small-cloud 99s linear infinite;
  @keyframes small-cloud {
    0% {
      left: -61%;
      bottom: -90vh;
      top: 63vh;
    }
    25% {
      top: 64vh;
    }
    50% {
      top: 63vh;
    }
    100% {
      left: 100%;
      bottom: -90vh;
      top: 64vh;
    }
  }
`;

const Bot2 = styled.div`
  transform: scale(0.6);
  z-index: 0;
  position: fixed;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0px;
  padding: 15px;
  background: url(${clouds});
  background-repeat: no-repeat;

  filter: brightness(10);
  /* filter: sepia(0.5); */
  /* filter: brightness(0.4); */

  animation: medium-cloud 100s linear infinite;
  @keyframes medium-cloud {
    0% {
      left: -110%;
      bottom: -77vh;
      top: 72vh;
    }
    25% {
      top: 69vh;
    }
    50% {
      top: 72vh;
    }
    100% {
      left: 100%;
      bottom: -77vh;
      top: 72vh;
    }
  }
`;

const LastWhite = styled.div`
  transform: scale(0.6);
  z-index: 0;
  position: fixed;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0px;
  padding: 20px;
  background: url(${clouds});
  background-repeat: no-repeat;

  filter: brightness(10);
  /* filter: sepia(0.5); */
  /* filter: brightness(0.4); */

  animation: last-cloud 100s linear infinite;
  @keyframes last-cloud {
    0% {
      left: -230%;
      bottom: -77vh;
      top: 72vh;
    }
    25% {
      top: 69vh;
    }
    50% {
      top: 72vh;
    }
    100% {
      left: 100%;
      bottom: -77vh;
      top: 72vh;
    }
  }
`;

const BotCloudReverse = styled.div`
  transform: scale(0.55);
  z-index: 0;
  position: fixed;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0px;
  padding: 10px;
  background: url(${clouds});
  background-repeat: no-repeat;

  /* filter: grayscale(0.7); */
  filter: grayscale(1);
  /* filter: brightness(0.3); */

  animation: bot-delay 100s linear infinite;
  @keyframes bot-delay {
    0% {
      left: -182%;
      bottom: -77vh;
      top: 75vh;
    }
    10% {
      top: 70h;
    }
    25% {
      top: 75vh;
    }
    35% {
      top: 70vh;
    }
    50% {
      top: 75vh;
    }
    85% {
      top: 70vh;
    }
    100% {
      left: 100%;
      bottom: -77vh;
      top: 75vh;
    }
  }
`;

const Wrapper = styled.div``;

export default function Clouds() {
  return (
    <Wrapper>
      <div id="foglayer_01" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_02" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_03" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <BotCloud />
      <BotCloud2 />
      <BotCloudReverse />
      <Bot2 />
      <Bot3 />
      <BotReverse />
      <LastWhite />
    </Wrapper>
  );
}
