import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import "./Work.css";

function Work(props) {
  const { image5, headerProps, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="work screen">
        <Header className={headerProps.className} />
        <Image5 id="image-5" src={image5} />
        <Footer logo={footerProps.logo} className={footerProps.className} />
      </div>
    </div>
  );
}

const Image5 = styled.img`
  width: 1920px;
  height: 1366px;
  z-index: 1;
  margin-top: 85px;
  margin-left: -0.41px;
  object-fit: cover;
`;

export default Work;
