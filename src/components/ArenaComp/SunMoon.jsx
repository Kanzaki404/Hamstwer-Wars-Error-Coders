import styled from 'styled-components';

export const Moon = styled.div`
  animation: spin 4s linear infinite;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 140px;
  border-radius: 50%;
  position: absolute;
  right: 34vw;
  top: 2vh;
  z-index: 3;
  opacity: 0;
  box-shadow: inset 0 0 50px #fff, inset 20px 0 60px #b4ff0040,
    inset -20px 0 60px #ff9900, inset 20px 0 300px #fffffff2,
    inset -20px 0 300px white, 0 0 50px #fff, -10px 0 60px #fbff00,
    10px 0 60px red;

  animation: spinner 45s infinite ease-in-out;
  animation-direction: alternate;
  width: 180px;
  height: 180px;
  filter: drop-shadow(2px 4px 38px orange) brightness(0.9);

  @keyframes spinner {
    0% {
      opacity: 0;
      box-shadow: inset 0 0 50px #fff, inset 20px 0 60px #b4ff0040,
        inset -20px 0 60px #ff9900, inset 20px 0 300px #fffffff2,
        inset -20px 0 300px white, 0 0 50px #fff, -10px 0 60px #fbff00,
        10px 0 60px red;

      transform: rotate(0deg);
      filter: drop-shadow(2px 4px 38px orange) brightness(0.9);
    }
    35% {
      opacity: 1;
    }
    50% {
    }

    100% {
      box-shadow: inset 0 0 50px #fff, inset 20px 0 60px #fafafa,
        inset -20px 0 60px #04b2ea, inset 20px 0 300px #ffffff,
        inset -20px 0 300px #f4f4f4, 0 0 50px #fff, -10px 0 60px #ffffff,
        10px 0 60px #0ee9ff;
      transform: rotate(360deg);
      filter: drop-shadow(2px 4px 38px blue) brightness(0.9);
    }
  }
`;
