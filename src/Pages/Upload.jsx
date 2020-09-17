import React, { useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';

const UploadPageStyle = styled.div`
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
    font-family: "Quicksand", sans-serif;
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
    font-family: "Quicksand", sans-serif;
  }

  .inputfile + label {
    font-size: 18px;
    font-weight: 500;
    color: white;
    display: inline-block;
    font-family: "Quicksand", sans-serif;
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
    font-family: "Quicksand", sans-serif;

    .file-styling {
      height: 100%;
      box-sizing: border-box;
      background-color: #1c1c1c;
      width: 50%;
      border-radius: 5px;
      padding-top: 6px;
      padding-left: 21px;

      p {
        font-family: "Quicksand", sans-serif;
        font-family: "Quicksand", sans-serif;
        text-align: left;
        font-size: 19px;
        margin-left: auto;
        margin-right: auto;
        margin: 1px;
      }
    }
  }

  .image-display {
    background-color: #790000;
    height: 261px;
    width: 455px;
    display: block;
    margin-top: 14px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;

    img {
      height: 100%;
      width: 100%;
      display: block;
      border-radius: 5px;
      object-fit: contain;
    }
  }

  .summon-button {
    font-family: "Permanent Marker", cursive;
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
    box-shadow: 0 0 5px rgba(189, 54, 54, 1);
    border: 1px solid rgba(189, 54, 54, 1);
  }
`;
// const config = {
//   headers: { 'content-type': 'multipart/form-data' }
// }
function summonHamster(Hamster, resetInput,formData) {

    axios.post(`${pageUrl}upload`, {params: Hamster,formData})
  .then((res) =>{
      console.log(res.data);
      resetInput();
  })
  .catch((error) => console.log(error));

}

const pageUrl ="http://localhost:5000/";

function GetAllHamsta(setHamsters) {
    axios
      .get(`${pageUrl}hamsters`)
      .then((res) => {
        setHamsters(res.data);
      })
      .catch((err) => console.log("ERROR ---> " + err));
  }
  function savePhoto(formData) {

    axios.post(`${pageUrl}upload/photo`, formData,{
      headers: {
        'Content-type' : 'multipart/formData'
      }
    })
  .then((res) =>{
      console.log(res.data);

  })
  .catch((error) => console.log(error));

}


export default function Upload() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [prevFile, setPrevFile] = useState("");
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weapon, setWeapon] = useState('');
  const [love, setLove] = useState('');
  const [Image, setImage] = useState('default');
  const [hamsters, setHamsters] =  useState([]);
  const Hamster = {};

  useEffect(() => {

    GetAllHamsta(setHamsters)


  }, [])


  function resetInput() {

    setName('');
    setAge('');
    setWeapon('');
    setLove('');
    setImage('');

  }


  const onChange = (e) => {
    if (e.target.files.length !== 0) {
      setImage(e.target.files[0].name)
      setFile(e.target.files[0]);

      if (e.target.files[0].name.length > 10) {
        setFileName(e.target.files[0].name.substring(0, 20) + "...");
      }
      setPrevFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  function uploadHamster() {
    const formData = new FormData();
    formData.append('file', file)
    Hamster.id = hamsters.length + 1;
    Hamster.name = name;
    Hamster.age = parseInt(age);
    Hamster.favFood = weapon;
    Hamster.loves = love;
    Hamster.ImgName = Image;
    Hamster.wins = 0;
    Hamster.defeats = 0;
    Hamster.games = 0;
    summonHamster(Hamster, resetInput, );
    savePhoto(formData)
  }
  return (
    <UploadPageStyle filo={file}>
      <div className="content">
        <h2>Create a Gladiator</h2>

        <div className="input-field">
          <div className="name-input">
            <UploadInput id="name" type="text" placeholder="Name" value = {name} onChange = {(e) => setName(e.target.value)}></UploadInput>
            <label htmlFor="name"></label>
          </div>
          <br></br>

          <div className="age-input">
            <UploadInput id="mani" type="text" placeholder="Age" value ={age} onChange = {(e) => setAge(e.target.value)}></UploadInput>
            <label htmlFor="mani"></label>
          </div>
          <br></br>

          <div className="weapon-input">
            <UploadInput
              id="weapon"
              value = {weapon} onChange = {(e) => setWeapon(e.target.value)}
              type="text"
              placeholder="Weapon/FavFood"
            ></UploadInput>
            <label htmlFor="weapon"></label>
          </div>
          <br></br>

          <div className="love-input">
            <UploadInput
              id="love"
              value = {love} onChange = {(e) => setLove(e.target.value)}
              type="text"
              placeholder="Loves"
            ></UploadInput>
            <label htmlFor="love"></label>
          </div>

          <div className="select-image">
            <div className="file-styling">
              <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                onChange={onChange}
              />
              <label htmlFor="file">
                {fileName ? fileName : <p>Choose a File...</p>}
              </label>
            </div>
          </div>

          <div className="image-display" id="preview">
            <img
              src={
                prevFile
                  ? prevFile
                  : require("../assets/testPhotoGallery/default-warrior.jpg")
              }
              alt="img"
            ></img>
          </div>
        </div>
      </div>

      <button className="summon-button" onClick={uploadHamster}>SUMMON GLADIATOR</button>
    </UploadPageStyle>
  );
}
