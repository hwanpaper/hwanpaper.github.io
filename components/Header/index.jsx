import React from "react";
import { Link } from "react-router-dom";
import DonationButton from "../DonationButton";
import styled from "styled-components";
import { HeeboNormalLicorice20px } from "../../styledMixins";


function Header(props) {
  const { className } = props;

  return (
    <Header1 className={`header ${className || ""}`}>
      <a href="#effect-shape" className="align-self-flex-center">
        <LogoImg className="logo-img" src="/img/logo-img@2x.png" />
      </a>
      <HeaderIcons className="header-icons">
        <a href="#effect-shape">
          <Icon1 className="icon-1">
            <Place className="place">HOME</Place>
          </Icon1>
        </a>
        <Link to="/about">
          <Icon2 className="icon-2">
            <Place className="about">ABOUT</Place>
          </Icon2>
        </Link>
        <Link to="/work">
          <Icon3 className="icon-3">
            <WORKS className="works">WORKS</WORKS>
          </Icon3>
        </Link>
        <Link to="/contact">
          <Icon4 className="icon-4">
            <Place1 className="place-1">CONTACT</Place1>
          </Icon4>
        </Link>
        <DonationButton />
      </HeaderIcons>
    </Header1>
  );
}

const Header1 = styled.div`
  position: absolute;
  height: 85px;
  top: 104px;
  left: 294px;
  display: flex;
  padding: 0 29.9px;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--white);

  &.header.header-1 {
    top: 0;
    left: 168px;
  }

  &.header.header-2 {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
  }
`;

const LogoImg = styled.img`
  width: 116px;
  height: 55px;
  align-self: center;
  object-fit: cover;
  cursor: pointer;
`;

const HeaderIcons = styled.div`
  height: 120px;
  position: relative;
  margin-left: 414px;
  margin-top: -18px;
  display: flex;
  align-items: center;
  min-width: 1326px;
`;

const Icon1 = styled.div`
  height: 55px;
  margin-top: 1px;
  display: flex;
  padding: 0 40px;
  align-items: center;
  min-width: 172px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Place = styled.div`
  ${HeeboNormalLicorice20px}
  width: 90px;
  min-height: 29px;
  text-align: center;
  letter-spacing: 5px;
`;

const Icon2 = styled.div`
  height: 55px;
  margin-left: 38px;
  margin-top: 1px;
  display: flex;
  padding: 0 40px;
  align-items: center;
  min-width: 172px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Icon3 = styled.div`
  height: 55px;
  margin-left: 38px;
  margin-top: 1px;
  display: flex;
  padding: 0 25px;
  align-items: center;
  min-width: 172px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const WORKS = styled.div`
  ${HeeboNormalLicorice20px}
  width: 120px;
  min-height: 29px;
  text-align: center;
  letter-spacing: 5px;
`;

const Icon4 = styled.div`
  height: 55px;
  margin-left: 38px;
  margin-top: 1px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  min-width: 172px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Place1 = styled.div`
  ${HeeboNormalLicorice20px}
  width: 150px;
  min-height: 29px;
  text-align: center;
  letter-spacing: 5px;
`;

export default Header;
