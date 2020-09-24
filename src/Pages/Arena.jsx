import React, { useState, useEffect } from 'react';
import background from '../assets/arena-background/arena.png';
import styled from 'styled-components';
import axios from 'axios';

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
  const [hamsters, setHamsters] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getHamsta(setHamsters);
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
  const def = [
    {
      _id: '',
      id: 0,
      name: '',
      age: 0,
      favFood: '',
      loves: '',
      imgName: '',
      wins: 0,
      defeats: 0,
      games: 0,
    },
    {
      _id: '',
      id: 0,
      name: '',
      age: 0,
      favFood: '',
      loves: '',
      imgName: '',
      wins: 0,
      defeats: 0,
      games: 0,
    },
  ];
  if (loading) {
    return (
      (<TeamRed redFighter={def[0]} />), (<TeamBlue blueFighter={def[1]} />)
    );
  }
  return (
    <BackgroundWrapper>
      <CardWrapper>
        <FlagWrapperLeft>
          <RedFlag />
          <RedText>{hamsters[0].name}</RedText>
        </FlagWrapperLeft>
        <TeamRed redFighter={hamsters[0]} />
      </CardWrapper>
      <VSimg></VSimg>
      <CardWrapper>
        <TeamBlue blueFighter={hamsters[1]} />
        <FlagWrapperRight>
          <BlueFlag />
          <BlueText>{hamsters[1].name}</BlueText>
        </FlagWrapperRight>
      </CardWrapper>
    </BackgroundWrapper>
  );
}
