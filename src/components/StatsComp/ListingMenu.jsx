import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const MenuWrapper = styled.div`
  width: 800px;
  border-radius: 3px;
  margin: 0px auto 50px auto;
  height: auto;
  /**min height 150px */

  background-color: #1c1c1c;
`;
const ButtonWrapper = styled.div`
  height: 150px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .overveiw {
    background-color: #790000;
    color: white;
  }
  .manual {
    background-color: #ffffff;
    color: Black;
  }
`;
const MenuButtons = styled.button`
  width: 40%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;

  font-size: 17px;
  font-weight: 600;
`;

const SearchFields = styled.div`
  height: 250px;
  box-sizing: border-box;
  padding-left: 5px;

  .InputField1 {
    padding-left: 45px;
    margin-bottom: 15px;
    label {
      display: block;
      color: #ccc;
    }
    input {
      width: 690px;
      height: 30px;
      outline: none;
      caret-color: #6d6d6d;
    }
  }
  .deleteThis {
      display:none;
    }
  .InputField2 {
    display: flex;
    justify-content: left;
    padding-left: 40px;
    color: white;
    
   
    .firstRadio {
      margin-right: 260px;
    }
  }

  .actionButtons {
    margin: 40px auto 0px auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .rem {
      background-color: #790000;
      color: white;
    }
  }
`;
const baseUrl = "http://localhost:5000/";
function sendFileterToServer(filter, setFilterResult,clearInputs) {
  axios
    .get(`${baseUrl}search`, { params: filter })
    .then((res) => {
      setFilterResult(res.data);
      clearInputs()
    })
    .catch((err) => console.log("ERROR AT FILTER SEARCH ---> " + err));
}

export default function ListingMenu({ dataCallback }) {
  const [searchType, setSearchtype] = useState(true);
  const [inputName, setInputName] = useState("");
  const [matchCount, setMatchCount] = useState("");
  //const [winRate, setWinRate] = useState("");
  const [filterResult, setFilterResult] = useState([]);
  function switchSearchType(type) {
    if (type !== "manual") {
      setSearchtype(true);
     
    } else {
      setSearchtype(false);
     
    }
  }
  useEffect(() => {
    dataCallback(searchType, filterResult);
    // eslint-disable-next-line
  }, [searchType, filterResult]);
  function clearInputs(){
    setInputName("")
    setMatchCount("")
    //setWinRate("")
   
   }
  const filter = {};
  function setSearchObj() {
    if (inputName) {
      filter.name = inputName;
    }
    if (matchCount === "MM") {
      filter.matchCount = matchCount;
    } else {
      filter.matchCount = matchCount;
    }
    // if (winRate === "HWR") {
    //   filter.winRate = "HWR";
    // } else {
    //   filter.winRate = "LWR";
    // }
    sendFileterToServer(filter, setFilterResult,clearInputs);
  }

  
  return (
    <MenuWrapper>
      <ButtonWrapper>
        <MenuButtons
          className="overveiw"
          onClick={() => switchSearchType("overView")}
        >
          Overview
        </MenuButtons>
        <MenuButtons
          className="manual"
          onClick={() => switchSearchType("manual")}
        >
          Manual Search
        </MenuButtons>
      </ButtonWrapper>
      {searchType ? (
        <div></div>
      ) : (
        <SearchFields>
          <div className="InputField1">
            <label htmlFor="nameInput">Name:</label>
            <input
              type="text"
              id="nameINput"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            ></input>
          </div>
          <div className="InputField2">
            <div
              className="firstRadio"
              onChange={(e) => setMatchCount(e.target.value)}
            >
              <input
                type="radio"
                id="MostMatches"
                name="choice1"
                value="MM"
              ></input>
              <label htmlFor="MostMatches">Most Matches</label>
              <br />
              <input
                type="radio"
                id="LeastMatches"
                name="choice1"
                value="LM"
              ></input>
              <label htmlFor="LeastMatches">Least Matches</label>
            </div>
            <div className="deleteThis">
              <input
                type="radio"
                id="HighestWinRate"
                name="choice2"
                value="HWR"
              ></input>
              <label htmlFor="HighestWinRate">Most Matches Won</label>
              <br />
              <input
                type="radio"
                id="LowestWinRate"
                name="choice2"
                value="LWR"
              ></input>
              <label htmlFor="LowestWinRate">Least Matches Won</label>
            </div>
          </div>
          <div className="actionButtons">
            <MenuButtons onClick={() => setSearchObj()}>Search</MenuButtons>
            <MenuButtons className="rem" onClick={()=> dataCallback(searchType,'remove')}>Remove Filter</MenuButtons>
          </div>
        </SearchFields>
      )}
    </MenuWrapper>
  );
}
