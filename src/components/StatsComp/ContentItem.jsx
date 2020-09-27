import React, { useState } from "react";
import styled from "styled-components";
import testImage from "../../assets/testPhotoGallery/hamster-26.jpg";
import { Doughnut  } from "react-chartjs-2";
const ListItem = styled.div`
  width: 100%;
  min-height: 75px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
  padding-top: 1px;
  
  /* justify-content: space-around;
  align-items: center; */
  margin-bottom: 5px;
  margin-top: 5px;

  :nth-child(odd) {
    background: #1c1c1c;
    color: white;
  }
  .profile {
    height: 50px;
    width: 50px;
    background-image: url(${testImage});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50px;
  }
  .mainInfo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  
`;
const ChartContainer = styled.div`
  width: 400px;
  height: 300px;
  
 
   
 
      
      
  
`;
export default function ContentItem({ data }) {
  const [cardState1, setCardState1] = useState(false);
  const chartData = {
    labels: ['Win','Loss'],
    datasets: [
      {
        label: "Nr of Wins",
        data: [0, 0],
        backgroundColor: [
          'rgba(45, 255, 251, 0.7)',
          'rgba(163, 163, 163, 0.7)',
          
        ],
        borderColor: [
          'rgba(45, 255, 251, 0.7)',
          'rgba(163, 163, 163, 0.7)',
          
        ],
        borderAlign: 'inner',
      },
    ],
  };
  return (
    <ListItem className="bakcC" onClick={() => setCardState1(!cardState1)}>
      <div className="mainInfo">
        <div className="profile"></div>
        <h3>{data.name}</h3>
        <h5>
          {data.wins}/{data.defeats}
        </h5>
        <h5>{data.games}</h5>
        <h5>{data.favFood}</h5>
      </div>

      {cardState1 ? (
        <ChartContainer className="testo">
          <Doughnut   data={chartData}></Doughnut>
        </ChartContainer>
      ) : (
        <div></div>
      )}
    </ListItem>
  );
}
