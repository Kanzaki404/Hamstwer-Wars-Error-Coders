import React from 'react';
import styled from "styled-components";


const UploadPageStyle = styled.div `
    width: auto;
    height: 100vh;
    background-color: #790000;
    text-align: center;
    color: white;

    .content {
        display: block;

    }

    .input-field {
        display: flex;
        justify-content: center;
        flex-direction: column;

    }

    h2 {
        font-family: 'Quicksand', sans-serif;
        margin: auto;
        text-align: center;
        padding: 63px;
    }

    .inputfile {
        width: 500px;
        height: 500px;
        overflow: hidden;
        position: absolute;
        z-index: -1;
        font-family: 'Quicksand', sans-serif;
    }

    .inputfile + label {
        font-size: 18px;
        font-weight: 500;
        color: white;
        display: inline-block;
        font-family: 'Quicksand', sans-serif;
    }

    .inputfile:focus + label,
    .inputfile + label:hover {
        cursor: pointer;
    }


    .select-image {
        width: 28vw;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        height: 40px;
        text-align: left;
        font-family: 'Quicksand', sans-serif;

      .file-styling {

        height: 100%;
        box-sizing: border-box;
        background-color: #1c1c1c;
        width: 50%;
        border-radius: 5px;
        padding-top: 6px;
        padding-left: 21px;
      }

    }

    .image-display {
        background-color: #1c1c1c;
        height: 261px;
        width: 455px;
        display: block;
        margin-top: 14px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
    }

    .summon-button {
        font-family: 'Permanent Marker',cursive;
        font-size: 28px;
        width: 392px;
        height: 87px;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        background: #1c1c1c;
        border-radius: 10px;
        color: white;
        border: none;
        outline: none;
        margin: 53px;
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
      box-shadow: 0 0 5px rgba(189, 54 , 54, 1);
      border: 1px solid rgba(189, 54 , 54, 1);
    }

`;

export default function Upload() {
    return (

        <UploadPageStyle>

        <div className ="content">
                <h2>Create a Gladiator</h2>

            <div className ="input-field">
                <div className ="name-input">
                  <UploadInput id="name" type ="text" placeholder ="Name"></UploadInput>
                  <label htmlFor="name"></label>
                </div>
                <br></br>

                <div className="age-input">
                  <UploadInput id="mani" type ="text" placeholder ="Age"></UploadInput>
                  <label htmlFor="mani"></label>
                </div>
                <br></br>


                <div className ="weapon-input">
                  <UploadInput id="weapon" type ="text" placeholder ="Weapon"></UploadInput>
                  <label htmlFor="weapon"></label>
                </div>
                <br></br>

                <div className ="love-input">
                  <UploadInput id="love" type ="text" placeholder ="Loves"></UploadInput>
                  <label htmlFor="love"></label>
                </div>

                <div className ="select-image">
                    <div className ="file-styling">
                        <input type="file" name="file" id="file" className="inputfile" />
                        <label htmlFor="file">Select Image</label>
                    </div>
                </div>

                <div className ="image-display"></div>

            </div>
        </div>


        <button className ="summon-button">SUMMON GLADIATOR</button>

        </UploadPageStyle>
    )
}
