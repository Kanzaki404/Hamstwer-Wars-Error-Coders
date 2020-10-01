import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { Doughnut  } from "react-chartjs-2";
import axios from 'axios'
import defImage from '../../assets/testPhotoGallery/default-warrior.jpg'

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
  
  .mainInfo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

  
  
`;
const ChartContainer = styled.div`

  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .chartContainer{
    margin-bottom: 15px;
  }
`;

const Profile = styled.div`
    height: 50px;
    width: 50px;
    background-image: url(${({ ifp }) => ifp !== null ? ifp : {defImage}});
    
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50px;
    margin-top: 10px;

`;


export default function ContentItem({ data }) {
  const [cardState1, setCardState1] = useState(false);
  const [imageFromServer, setImageFromServer] = useState('');
  const baseUrl = "http://localhost:5000/";
  useEffect(() => {
    
    axios
    .get(`${baseUrl}hamstersPhotos`,{ params: data.imgName })
    .then((res) => {
       setImageFromServer(res.data)
    })
    .catch((err) => console.log("ERROR ---> " + err));
  },[data])


  const chartData = {
    labels: ['Win','Loss'],
    datasets: [
      {
        label: "Nr of Wins",
        data: [data.wins, data.defeats],
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
        <Profile 
        ifp={imageFromServer}
        ></Profile>
        <h3>{data.name}</h3>
        <h5>
          {data.wins}/{data.defeats}
        </h5>
        <h5>{data.games}</h5>
        <h5>{data.favFood}</h5>
      </div>

      {cardState1 ? (
        <ChartContainer className="testo">
          <div className="chartContainer">

          <Doughnut   data={chartData}></Doughnut>
          </div>
          <div>
           <p>Loves :</p> 
           <p>{data.loves}</p>
          </div>
        </ChartContainer>
      ) : (
        <div></div>
      )}
    </ListItem>
  );
}
