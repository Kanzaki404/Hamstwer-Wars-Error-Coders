import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentItem from "./ContentItem";
import axios from "axios";
const ContentWraper = styled.div`
  width: 800px;
  border-radius: 3px;
  margin: 0px auto 50px auto;

  box-sizing: border-box;
  /* height:auto;  */
  /**min height 150px */
  min-height: 750px;

  .first {
    h1 {
      overflow: hidden;
      color: white;
    }

    h1:after {
      content: "";
      display: inline-block;
      height: 0.5em;
      vertical-align: bottom;
      width: 100%;
      margin-right: -100%;
      margin-left: 10px;
      border-top: 3px solid white;
    }
    .totalMatchNum {
      font-size: 75px;
      color: white;
      font-weight: 600;
      text-align: center;
    }
  }
  .second {
    min-height: 400px;
    width: 100%;
  }
`;

const Tags = styled.div`
  border-radius: 5px 5px 0px 0px;
  background-color: #1c1c1c;
  color: white;

  .headerInfo {
    display: flex;
    margin-left: 140px;

    #winMar {
      margin-left: 95px;
    }
    #gMar {
      margin-left: 81px;
    }
    #sMar {
      margin-left: 75px;
    }
  }
`;
const ContentScroll = styled.div`
  max-height: 750px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 3px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: #888;  */
    background: #1c1c1c;
  }


  .elementsByColor,
  div ~ div {
    

    :nth-child(odd) {
      background: white;
      color: black;
    }
    :nth-child(odd) {
      background: #1c1c1c;
      color: white;
    }
  }
`;
//---------------------AXIOS API CALL------------------------------------------------------
const baseUrl = "http://localhost:5000/";
function getHamsta(setHamsters,TopHamsters) {
  axios
    .get(`${baseUrl}hamsters`)
    .then((res) => {
      setHamsters(res.data);
     
    })
    .catch((err) => console.log("ERROR ---> " + err));
}



export default function Content({ mode, newList }) {
  const [hamsters, setHamsters] = useState([]);
  //---------------------GET HAMSTERS------------------------------------------------------
  
  //console.log('in Content',newList);
//---------------------GETTING NEW FILTERED LIST---------------------------------------------
  useEffect(() => {
    if (newList !== "remove" && newList.length >= 1) {
      console.log('Triggered');
      setHamsters(newList);
    } else {
      getHamsta(setHamsters);
    }
  }, [newList]);
//---------------------ALL HAMSTERS------------------------------------------------------
  const HamsterElements = hamsters.map((e) => (
    <ContentItem className="elementsByColor" key={e._id} data={e}></ContentItem>
  ));
  //---------------------TOP HAMSTERS------------------------------------------------------
  const TopHamsters = [...hamsters]
  TopHamsters.sort((a, b) => (a.wins > b.wins) ? -1 : 1)

  const TopHam = TopHamsters.slice(0,5).map((e) => (
    <ContentItem className="elementsByColor" key={e._id} data={e}></ContentItem>
    ))
  //---------------------BOTTOM HAMSTERS------------------------------------------------------
  const BottomHamsters = [...hamsters]
  BottomHamsters.sort((a, b) => (a.wins > b.wins) ? 1 : -1)

  const BotHam = BottomHamsters.slice(0,5).map((e) => (
    <ContentItem className="elementsByColor" key={e._id} data={e}></ContentItem>
    ))
  //---------------------TOTAL MATCHES------------------------------------------------------
  let totalMatches = 0; 
  hamsters.map((e)=>(
    totalMatches += e.games/2
  ));


  return (
    <ContentWraper>
      {mode ? (
        <div>
          <div className="first">
            <h1>Top 5</h1>
          </div>

          <div className="second">
          {TopHam}
          </div>
          <div className="first">
            <h1>Bottom 5</h1>
          </div>
          <div className="second">
          {BotHam}
          </div>
          <div className="first">
            <h1>Total Matches</h1>
            <p className="totalMatchNum">{totalMatches}</p>
          </div>
        </div>
      ) : (
        <div>
          <Tags>
            <div className="headerInfo">
              <h4>Name:</h4>
              <h4 id="winMar">Win/Lose rate:</h4>
              <h4 id="gMar">Games:</h4>
              <h4 id="sMar">Special ability:</h4>
            </div>
          </Tags>
          <ContentScroll>{HamsterElements}</ContentScroll>
        </div>
      )}
    </ContentWraper>
  );
}
