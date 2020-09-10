import React from 'react';
import styled from "styled-components";


const UploadPageStyle = styled.div `
    width: auto;
    height: 100vh;
    background-color: #790000;
    text-align: left;
    color: white;

    .content {
        display: flex;
        justify-content: center;

    }
    h3 {
        font-family: 'Quicksand', sans-serif;
        margin: auto

    }
    .summon-button {
        font-family: 'Permanent Marker',cursive;
        font-size: 28px;
        width: 392px;
        height: 87px;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        background: black;
        border-radius: 10px;
        color: white;
        border: none;
        outline: none;
    }

`;

const UploadInput = styled.input`
    width: 28vw;
    padding: 12px 21px;
    outline: none;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    UploadInput[type="text"]:focus,
    :focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }

`;


export default function Upload() {
    return (
        <UploadPageStyle>

        <div className ="content">

            <h3>Name</h3>
        </div>

        <div className =""></div>

                <UploadInput></UploadInput>


        <button className ="summon-button">SUMMON GLADIATOR</button>

        </UploadPageStyle>
    )
}
