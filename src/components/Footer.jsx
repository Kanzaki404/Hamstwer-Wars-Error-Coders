import React from "react";
import styled from "styled-components";
import hamsterfooter from "../assets/footer/hamstergif.gif";

const FooterStyling = styled.footer`
  background-color: #6d0002;
  min-height: 500px;
  padding-top: 50px;
`;


const FooterImage = styled.div `

.footer-image {
    background-image: url(${hamsterfooter});
    height: 700px;
    width: 900px;
    background-position: right;
    background-repeat: no-repeat;
    width: auto;
    right: 0px;
    bottom: 0px;
    border: 1px solid #6d0002;
  }
`;

export default function Footer() {
    return (
      <FooterStyling>
        <FooterImage>
          <div className ="footer-image" alt ="default"></div>
        </FooterImage>
      </FooterStyling>
    );
}

