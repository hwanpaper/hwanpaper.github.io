import React from "react";
import styled from "styled-components";


function Image(props) {
  const { socialIcon, className } = props;

  return (
    <Image1 className={`image-3 ${className || ""}`}>
      <SocialIcon className="social-icon" src={socialIcon} />
    </Image1>
  );
}

const Image1 = styled.div`
  height: 81px;
  margin-right: 1px;
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 81px;
  background-image: url(/img/ellipse-648@2x.svg);
  background-size: 100% 100%;

  &.image-3.image-4 {
    margin-left: 1px;
    margin-right: unset;
  }

  &.image-3.image-6 {
    margin-left: 1px;
    margin-right: unset;
  }
`;

const SocialIcon = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

export default Image;
