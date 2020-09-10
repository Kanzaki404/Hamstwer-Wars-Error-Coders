import React, {useState} from 'react'
import styled from "styled-components";
import testImage from "../../assets/testPhotoGallery/hamster-26.jpg";

const ListItem = styled.div`
  width: 100%;
  min-height: 75px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
  padding-top: 1px;

  /* justify-content: space-around;
  align-items: center; */
  margin-bottom: 5px;
  margin-top: 5px;
  :nth-child(even) {
    background: #1c1c1c;
    color: white;
  }
  .profile {
    height: 50px;
    width: 50px;
    background-image: url(${testImage});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50px;
  }
  .mainInfo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  .detailInfo {
    display: block;
    width: 60%;
    height: 103px;
    text-align: center;
    margin: 10px auto 0px auto;
    box-sizing: border-box;
  }
`;
export default function ContentItem() {
    const [cardState1, setCardState1] = useState(false);
    return (
        <ListItem onClick={() => setCardState1(!cardState1)}>
          <div className="mainInfo">
            <div className="profile"></div>
            <h3>Bulldozer</h3>
            <h5>Win/Lose Rate: 56/44</h5>
            <h5>Games: 16</h5>
            <h5>Special Ability: ChesseBalls</h5>
          </div>

          {cardState1 ? (
            <p className="detailInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              fugit eaque quae praesentium, quo tempore blanditiis error nostrum
              atque at sapiente quisquam corporis nihil laudantium dolor
              eveniet, rem, illo quidem.
            </p>
          ) : (
            <div></div>
          )}
        </ListItem>
    )
}
