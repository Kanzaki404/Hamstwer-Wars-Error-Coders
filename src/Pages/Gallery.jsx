import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/GalleryComp/BannerItem";
import axios from "axios";
const GalleryWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 50px;

  background-color: #790000;
  .elementArea {
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: 60px 0px;
  }
`;
// testing purposes (result: works!)
const baseUrl = "http://localhost:5000/";
function getHamsta(setHamsters) {
  axios
    .get(`${baseUrl}hamsters`)
    .then((res) => {
      console.log(res.data)
      setHamsters(res.data);
      
    })
    .catch((err) => console.log("ERROR ---> " + err));
}
export default function Gallery() {
  const [hamsters, setHamsters] = useState([]);

  useEffect(() => {
    getHamsta(setHamsters);
    
  }, []);

  const HamsterBanner = hamsters.map((e) => (
    <div key={e._id}>
      <Banner data={e}></Banner>
    </div>
  ));
  return (
    <GalleryWrapper>
      <div className="elementArea">{HamsterBanner}</div>
    </GalleryWrapper>
  );
}
