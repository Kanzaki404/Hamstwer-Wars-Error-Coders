import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import defImage from '../../assets/testPhotoGallery/default-warrior.jpg'

import axios from 'axios'
const BannerWrapper = styled.div`
  background-color: #790000;
  .rectangle {
    height: 500px;
    width: 250px;
    background-color: #1c1c1c;
    border-radius: 10px 10px 0 0;
    text-align: center;
    box-sizing: border-box;
    padding-top: 25px;
    h2 {
      color: white;
    }
    
    .weakInfo {
      color: white;
    }
    .statsInfo {
      height: 130px;
      width: 150px;
      color: white;
      background-color: #5f5f5f;
      z-index: 5;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      border-radius: 8px;
      padding-top: 1px;
    }
  }
  .triangle {
    width: 0;
    height: 0;
    border-left: 125px solid transparent;
    border-right: 125px solid transparent;

    border-top: 75px solid #1c1c1c;
  }
`;
const ProfileImg = styled.div`


      height: 170px;
      width: 170px;
    
     background-image: url(${({ ifp }) => ifp !== null ? ifp : {defImage}});
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
      
    
`;
const baseUrl = "http://localhost:5000/";
function getImage(imgName,setImageFromServer){
  axios
  .get(`${baseUrl}hamstersPhotos`,{ params: imgName })
  .then((res) => {
    setImageFromServer(res.data)
  })
  .catch((err) => console.log("ERROR ---> " + err));
}
export default function BannerItem({ data }) {
  const [imageFromServer, setImageFromServer] = useState('');
  
  useEffect(() => {
    getImage(data.imgName,setImageFromServer)
    
  },[data.imgName])
  return (
    <BannerWrapper>
      
      <div className="rectangle">
        <h2>{data.name}</h2>
        <ProfileImg 
        className="profileImage" 
        ifp={imageFromServer}
        
        ></ProfileImg>
        <div className="weakInfo">
          <p>Weakness:</p>
          <p>{data.favFood}</p>
        </div>
        <div className="statsInfo">
          <p>Wins: {data.wins}</p>
          <p>Defeats: {data.defeats}</p>
          <p>Games: {data.games}</p>
        </div>
      </div>
      <div className="triangle"></div>
    </BannerWrapper>
  );
}
