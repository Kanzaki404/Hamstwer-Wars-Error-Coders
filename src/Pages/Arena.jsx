import React from 'react';
import background from '../assets/arena-background/arena.png';
import styled from 'styled-components';

import {
  TeamRed,
  TeamBlue,
  RedText,
  BlueText,
} from '../components/ArenaComp/Banners';
import redImg from '../assets/arena-background/redFlag.png';
import blueImg from '../assets/arena-background/blueFlag.png';
import Vs from '../assets/arena-background/VS.png';

const BackgroundWrapper = styled.div`
  background: url(${background});
  background-size: cover;
  height: 90vh;
  display: flex;
  flex-direction: row;
`;

const VSimg = styled.img`
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
`;

const RedFlag = styled.div`
  background: url(${redImg});
  /* margin: auto; */
  height: 350px;
  width: 150px;

  background-repeat: no-repeat;
`;

const BlueFlag = styled.div`
  background: url(${blueImg});
  /* margin: auto; */
  height: 350px;
  width: 150px;

  background-repeat: no-repeat;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const FlagWrapperLeft = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  margin-right: 15px;
`;

const FlagWrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  margin-left: 15px;
`;

export default function Arena() {
  return (
    <BackgroundWrapper>
      <CardWrapper>
        <FlagWrapperLeft>
          <RedFlag />
          <RedText>Sven</RedText>
        </FlagWrapperLeft>
        <TeamRed />
      </CardWrapper>
      <VSimg></VSimg>
      <CardWrapper>
        <TeamBlue />
        <FlagWrapperRight>
          <BlueFlag />
          <BlueText>Sixten</BlueText>
        </FlagWrapperRight>
      </CardWrapper>
    </BackgroundWrapper>
  );
}
