import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const TimerStyle = styled.div`
  h1 {
    font-size: 250px;
    color: aliceblue;

    animation: fighttext 1s ease-in-out infinite;
    /* animation-delay: 2s; */

    @keyframes fighttext {
      0% {
        transform: scale(0.3);
      }
      80% {
      }

      100% {
        transform: scale(2);
      }
    }
  }

  h1 span {
    color: white;
  }
`;

const CountDown = () => {
  const [seconds, setSeconds] = useState(3);
  const [isActive, setIsActive] = useState(true);
  const [fight, setfight] = useState(true);

  useEffect(() => {
    setfight(true);
    let interval = null;
    if (seconds > 0) {
      if (isActive) {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
    setIsActive(false);
    setSeconds('');
    if (fight) {
      return setfight('FIGHT!');
    }
  }, [isActive, seconds]);

  return (
    <TimerStyle className="time">
      <h1>
        {seconds}
        <span>{fight}</span>
      </h1>
    </TimerStyle>
  );
};

export default CountDown;
