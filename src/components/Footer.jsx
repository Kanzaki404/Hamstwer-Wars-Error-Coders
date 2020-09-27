import React from "react";
import styled from "styled-components";
import hamsterbubble from "../assets/footer/hamster-bubble.png";

const FooterStyling = styled.footer`

.footer-image {
  background-image: url('hamsterbubble');
  background-attachment: relative;
  background-repeat: no-repeat;
}
`;

export default function Footer() {
    return (
      <FooterStyling>

      <img className ="footer-image" alt ="default"></img>
      </FooterStyling>
    );
  }

