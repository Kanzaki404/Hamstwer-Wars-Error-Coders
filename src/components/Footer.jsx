import React from "react";
import styled from "styled-components";
import hamsterfooter from "../assets/footer/hamster-bubble.png";

const FooterStyling = styled.div`

.footer-image {
  background-image:url(${hamsterfooter});

}
`;

export default function Footer() {
    return (
      <FooterStyling>
        <div className ="footer-image" alt ="default"></div>
      </FooterStyling>
    );
  }

