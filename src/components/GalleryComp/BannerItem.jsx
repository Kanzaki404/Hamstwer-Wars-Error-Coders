import React from "react";
import styled from "styled-components";
import testImage from "../../assets/testPhotoGallery/hamster-26.jpg";

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
    .profileImage {
      height: 170px;
      width: 170px;
      background-image: url(${testImage});
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
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

export default function BannerItem({ data }) {
  
  return (
    <BannerWrapper>
      <div className="rectangle">
        <h2>{data.name}</h2>
        <div className="profileImage"></div>
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
