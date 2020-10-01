import React from 'react';
import styled from 'styled-components';

import playbtn from '../../assets/arena-background/playbtn.png';
import refresh from '../../assets/arena-background/reload.png';
import back from '../../assets/arena-background/left-arrow.png';

const BackBtn = styled.button`
  background-color: firebrick;
  position: absolute;
  bottom: 35px;
  left: 20px;
  height: 50px;
  width: 50px;
  border: 0px solid black;
  border-radius: 50%;
  filter: drop-shadow(0px 2px 3px black) opacity(1);
  opacity: 0.8;
  transition: transform 1s;
  outline: 0;
  opacity: 0;

  img {
    height: 20px;
    margin: 0px 0 0px 0px;
    /* filter: invert(1); */
  }
  :hover {
    transform: scale(1.1);
    transition: all 1s;

    img {
      padding-right: 5px;
    }
  }
  animation: rise 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  @keyframes rise {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const RefreshBtn = styled.div`
  background-color: aliceblue;

  position: absolute;
  bottom: 17px;
  left: 80px;
  height: 90px;
  width: 90px;
  border: 0px solid black;
  border-radius: 50%;
  filter: drop-shadow(0px 2px 3px black) opacity(1);
  opacity: 0.8;
  transition: transform 0.5s;
  outline: 0;
  opacity: 0;

  img {
    height: 55px;
    margin: 16px 0 0px 18px;

    /* filter: invert(1); */
  }

  :hover {
    transform: scale(1.1) rotate(-360deg);
  }
  animation: rise 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  @keyframes rise {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  background-color: rgb(72 72 72 / 90%);
  width: 184px;
  position: absolute;
  bottom: 130px;
  left: 62px;
  height: 120px;
  margin: 0px 0 0 0;
  border: 0px solid transparent;
  border-radius: 65px;
  opacity: 0.8;
  filter: drop-shadow(0px 0px 6px black) opacity(0.95);
  animation: rise 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  opacity: 0;
  transform: scale(0.9);
  transition: 0.3s;

  :hover {
    transform: scale(0.95);
  }

  @keyframes rise {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.9;
    }
  }
`;

const Wrapper2 = styled(Wrapper)`
  bottom: 5px;
  left: 32px;
  background-color: rgb(255 0 0);
`;
const Wrapper3 = styled(Wrapper)`
  bottom: 5px;
  left: 32px;
  background-color: rgb(52 82 132);
`;

const Wrapper4 = styled(Wrapper)`
  bottom: 0px;
  left: 445px;
  background-color: rgb(185 185 185 / 90%);
`;

const Back = styled(BackBtn)`
  background-color: rgb(255 207 1);
`;

const RefreshWin = styled(RefreshBtn)`
  background-color: black;
  img {
    filter: invert(1);
  }
`;

const PlayButton = styled(RefreshBtn)`
  img {
    height: 45px;
    margin: 22px 0 0px 26px;
  }
`;

export function ReplayBack({ mainmenu, replay }) {
  return (
    <Wrapper>
      <RefreshBtn onClick={replay}>
        <img src={refresh} />
      </RefreshBtn>
      <Back onClick={mainmenu}>
        <img src={back} />
      </Back>
    </Wrapper>
  );
}
export function ReplayBackWinRed({ mainmenu, replay }) {
  return (
    <Wrapper2>
      <RefreshWin onClick={replay}>
        <img src={refresh} />
      </RefreshWin>
      <Back onClick={mainmenu}>
        <img src={back} />
      </Back>
    </Wrapper2>
  );
}
export function ReplayBackWinBlue({ mainmenu, replay }) {
  return (
    <Wrapper3>
      <RefreshWin onClick={replay}>
        <img src={refresh} />
      </RefreshWin>
      <Back onClick={mainmenu}>
        <img src={back} />
      </Back>
    </Wrapper3>
  );
}
export function MiniMenu({ mainmenu, CustomBattle, Callback, customfight }) {
  console.log(customfight);

  return (
    <Wrapper4>
      <PlayButton
        onClick={() => {
          CustomBattle();
          Callback(customfight);
        }}
      >
        <img src={playbtn} />
      </PlayButton>
      <Back onClick={mainmenu}>
        <img src={back} />
      </Back>
    </Wrapper4>
  );
}

export function ReplayBackCustom({ CustomGame, mainmenu }) {
  // console.log(customfight);

  return (
    <Wrapper>
      <RefreshBtn onClick={CustomGame}>
        <img src={refresh} />
      </RefreshBtn>
      <Back onClick={mainmenu}>
        <img src={back} />
      </Back>
    </Wrapper>
  );
}
