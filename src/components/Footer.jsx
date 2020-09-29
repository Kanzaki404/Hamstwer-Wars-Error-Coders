import React from "react";
import styled from "styled-components";
import hamsterfooter from "../assets/footer/hamstergif.gif";

const FooterStyling = styled.footer`
  #footer-image {
    background-image: url(${hamsterfooter});
    height: 1042px;
    background-position: right;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 0;
    width: auto;
  }
`;

export default function Footer() {
    return (

      <FooterStyling>
        <div id ="footer-image" alt ="default"></div>
      </FooterStyling>
    );
}

