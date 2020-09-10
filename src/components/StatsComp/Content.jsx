import React from "react";
import styled from "styled-components";

const ContentWraper = styled.div`
  width: 800px;
  border-radius: 3px;
  margin: 0px auto 50px auto;
 
  box-sizing: border-box;
  /* height:auto;  */
  /**min height 150px */
  min-height: 750px;
  border: 2px solid black;
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
  }
  .second{
      min-height: 750px;
      width: 100%;
      border: 2px chartreuse solid;
  }
`;
const ListItem = styled.div`
    width: 100%;
    min-height: 100px;
    border: solid 2px green;
    box-sizing: border-box;
    background-color:white;
    border-radius: 5px;
`

export default function Content() {
  return (
    <ContentWraper>
      <div className="first">
        <h1>
          Top 5
        </h1>
      </div>
      
      <div className="second">
      <ListItem></ListItem>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </ContentWraper>
  );
}
