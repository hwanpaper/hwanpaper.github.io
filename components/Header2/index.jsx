import React from "react";
import { Link } from "react-router-dom";
import Icon1 from "../Icon1";
import DonationButton from "../DonationButton";
import styled from "styled-components";
import { HeeboNormalLicorice20px } from "../../styledMixins";


function Header2(props) {
  const { logoImg, place, works, place2, icon1Props } = props;

  return (
    <Header1>
      <Link to="/index" className="align-self-flex-center">
        <LogoImg src={logoImg} />
      </Link>
      <HeaderIcons>
        <Link to="/index">
          <Icon11>
            <Place>{place}</Place>
          </Icon11>
        </Link>
        <Icon1>{icon1Props.children}</Icon1>
        <Link to="/work">
          <Icon3>
            <WORKS>{works}</WORKS>
          </Icon3>
        </Link>
        <Link to="/contact">
          <Icon4>
            <Place1>{place2}</Place1>
          </Icon4>
        </Link>
        <DonationButton />
      </HeaderIcons>
    </Header1>
  );
}

const Header1 = styled.div`
  position: fixed;
  height: 85px;
  top: 0;
  left: 0;
  z-index: 8;
  display: flex;
  padding: 0 29.9px;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--white);
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

const Icon11 = styled.div`
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

export default Header2;
