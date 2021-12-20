import React from "react";
import styled from "styled-components";
import { HeeboNormalLicorice20px } from "../../styledMixins";


function Icon1(props) {
  const { children } = props;

  return (
    <Icon2>
      <ABOUT>{children}</ABOUT>
    </Icon2>
  );
}

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

const ABOUT = styled.div`
  ${HeeboNormalLicorice20px}
  width: 90px;
  min-height: 29px;
  text-align: center;
  letter-spacing: 5px;
`;

export default Icon1;
