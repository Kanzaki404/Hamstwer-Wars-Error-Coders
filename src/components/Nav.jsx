import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo/logoHamster.png';
const NavBar = styled.nav`
  height: 110px;
  background: #1c1c1c;
  width: 100%;
  display: flex;
  justify-content: space-center;
  .centerIt {
    margin-left: auto;
    margin-right: auto;
  }
  p {
    color: white;
  }
`;
const Ul = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;

  li {
    padding: 5px;
    padding-bottom: 3px;
    font-size: 15px;
    color: white;

    &:hover {
      border-bottom: 2px solid white;
      padding-bottom: 3px;
    }
  }
  #L1 {
    &:hover {
      border-bottom: 2px solid white;
    }
    border-bottom: ${({ location }) =>
      location === '/' ? '2px solid white' : 'none'};
  }
  #L2 {
    &:hover {
      border-bottom: 2px solid white;
    }
    border-bottom: ${({ location }) =>
      location === '/arena' ? '2px solid white' : 'none'};
  }
  #L3 {
    &:hover {
      border-bottom: 2px solid white;
    }
    border-bottom: ${({ location }) =>
      location === '/gallery' ? '2px solid white' : 'none'};
  }
  #L4 {
    &:hover {
      border-bottom: 2px solid white;
    }
    border-bottom: ${({ location }) =>
      location === '/stats' ? '2px solid white' : 'none'};
  }
  #L5 {
    &:hover {
      border-bottom: 2px solid white;
    }
    border-bottom: ${({ location }) =>
      location === '/upload' ? '2px solid white' : 'none'};
  }
  #L6 {
    &:hover {
      border-bottom: 2px solid white;
    }
    border-bottom: ${({ location }) =>
      location === '/merch' ? '2px solid white' : 'none'};
  }
  div {
    display: flex;
    align-items: center;

    justify-content: space-evenly;
  }
  #sides {
    width: 300px;
  }
`;

const Logo = styled.div`
  width: 69px;
  height: 82px;
  margin-left: 30px;
  margin-right: 30px;
  span {
    background-image: url(${logo});

    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`;
export default function Nav() {
  let location = useLocation();
  return (
    <NavBar>
      <Ul location={location.pathname}>
        <div className="centerIt">
          <div id="sides">
            <Link className="linku" to="/" style={{ textDecoration: 'none' }}>
              <li id="L1">Home</li>
            </Link>

            <Link to="/arena" style={{ textDecoration: 'none' }}>
              <li id="L2">Arena</li>
            </Link>

            <Link to="/gallery" style={{ textDecoration: 'none' }}>
              <li id="L3">Gallery</li>
            </Link>
          </div>
          <Logo>
            <span></span>
          </Logo>
          <div id="sides">
            <Link to="/stats" style={{ textDecoration: 'none' }}>
              <li id="L4">Stats</li>
            </Link>
            <Link to="/upload" style={{ textDecoration: 'none' }}>
              <li id="L5">Upload</li>
            </Link>
            <Link to="/merch" style={{ textDecoration: 'none' }}>
              <li id="L6">Merchandise</li>
            </Link>
          </div>
        </div>
      </Ul>
    </NavBar>
  );
}
