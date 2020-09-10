import React from "react";
import styled from "styled-components";
import Banner from "../components/GalleryComp/BannerItem"
const GalleryWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 50px;
 

  background-color: #790000;
    .elementArea{
        margin-left: auto;
        margin-right: auto;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-items: center;
        grid-gap: 60px 0px;
    }
`;

export default function Gallery() {
  return (
    <GalleryWrapper>
        <div className="elementArea">
        <Banner></Banner>
        <Banner></Banner>
        <Banner></Banner>
        <Banner></Banner>
        <Banner></Banner>
        <Banner></Banner>
        <Banner></Banner>
        <Banner></Banner>
        <Banner></Banner>
        <Banner></Banner>
        </div>
     
    </GalleryWrapper>
  );
}
