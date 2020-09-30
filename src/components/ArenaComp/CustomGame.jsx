import React from 'react';
import styled from 'styled-components';
import { MiniMenu } from '../../components/ArenaComp/ReplayBack';
import { TeamImg } from '../ArenaComp/Banners';

import defHamster from '../../assets/testPhotoGallery/default-warrior.jpg';
import RedFlag from '../../assets/arena-background/redFlag.png';
import BlueFlag from '../../assets/arena-background/blueFlag.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const ChooseRed = styled.div`
  background-image: url(${RedFlag});
  height: 350px;
  width: 155px;
  background-repeat: no-repeat;
  transform: scale(2);
`;

const ChooseBlue = styled(ChooseRed)`
  background-image: url(${BlueFlag});
  margin-left: 35vw;
`;

const Button = styled.button`
  margin: auto;
  display: flex;
  margin-top: 7vh;
  place-content: center;

  /* margin-top: 5px; */
  background-color: #1c1c1c;
  color: white;
  height: 35px;
  width: 110px;
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

export default function CustomMode({ mainmenu }) {
  return (
    <Wrapper>
      <ChooseRed>
        <ChooseGladiator>
          <img src={defHamster}></img>
        </ChooseGladiator>
        <Button>
          <p>Select Gladiator</p>
        </Button>
      </ChooseRed>
      <MiniMenu mainmenu={() => mainmenu()} />
      <ChooseBlue>
        <ChooseGladiator>
          <img src={defHamster}></img>
        </ChooseGladiator>
        <Button>
          <p>Select Gladiator</p>
        </Button>
      </ChooseBlue>
    </Wrapper>
  );
}
