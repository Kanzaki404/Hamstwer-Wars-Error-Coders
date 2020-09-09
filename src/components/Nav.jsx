import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  height: 75px;
  background: #1c1c1c;
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    color: white;
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 10;
  li {
    padding: 5px;
    font-size: 23px;
    color: white;
  }
`;
export default function Nav() {
  return (
    <NavBar>
      <Ul>
        <Link className="linku" to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>

          <hr />
        </Link>

        <Link to="/arena" style={{ textDecoration: "none" }}>
          <li>Arena</li>
          <hr />
        </Link>
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <li>Gallery</li>
          <hr />
        </Link>
        <Link to="/stats" style={{ textDecoration: "none" }}>
          <li>Stats</li>
          <hr />
        </Link>
        <Link to="/upload" style={{ textDecoration: "none" }}>
          <li>Upload</li>
          <hr />
        </Link>
        <Link to="/merch" style={{ textDecoration: "none" }}>
          <li>Merchandise</li>
          <hr />
        </Link>
      </Ul>
    </NavBar>
  );
}
