import React from "react";
import styled from "styled-components";
import {
  RobotoBoldBlack241px,
  ZenmarugothicNormalGray20px,
  ZenmarugothicLightWhite16px,
  ZenmarugothicNormalBlack20px,
  ValignTextMiddle,
} from "../../styledMixins";


function Footer(props) {
  const { logo, className } = props;

  return (
    <Footer1 className={`footer ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1-1">
        <Contents className="contents">
          <X1 className="x1">
            <Logo className="logo" src={logo} />
            <ContactInfo className="contact-info">
              <CONTACTINFO className="contact-info-1">CONTACT INFO</CONTACTINFO>
              <Text1 className="text-1-1">
                E-MAIL : info@telepossible.com
                <br />
                Telephone : +1 - 484 - 743 - 6940
              </Text1>
            </ContactInfo>
          </X1>
          <X2 className="x2">
            <CONNECTWITHUS className="connect-with-us">CONNECT WITH US</CONNECTWITHUS>
            <Icons className="icons">
              <InstagramIcon className="instagram-icon" src="/img/instagram-icon@2x.png" />
              <TwitterIcon className="twitter-icon" src="/img/twitter-icon@2x.png" />
              <TwitterIcon className="facebook-icon" src="/img/facebook-icon@2x.png" />
            </Icons>
          </X2>
          <Law className="law">
            TelePossible Inc. is a nonprofit, tax-exempt charitable organization under Section 501(c)(3) of the Internal
            Revenue Code. Donations are tax-deductible as allowed by law
          </Law>
        </Contents>
        <Upper className="upper">
          <Line1 className="line-1" src="/img/line-1@1x.svg" />
        </Upper>
      </OverlapGroup1>
      <Copyright className="copyright">
        <OverlapGroup className="overlap-group-6">
          <Text className="text-17">Copyright © 2021 TelePossible</Text>
        </OverlapGroup>
      </Copyright>
    </Footer1>
  );
}

const Footer1 = styled.div`
  width: 1920px;
  margin-top: 260px;
  margin-right: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 400px;
  background-color: var(--white);

  &.footer.footer-1 {
    margin-top: 112px;
    margin-right: unset;
  }

  &.footer.footer-2 {
    z-index: 2;
    margin-left: -1px;
    margin-top: unset;
    margin-right: unset;
  }

  &.footer.footer-3 {
    z-index: 1;
    margin-top: 81px;
    margin-right: unset;
  }
`;

const OverlapGroup1 = styled.div`
  width: 1925px;
  height: 307px;
  position: relative;
`;

const Contents = styled.div`
  position: absolute;
  height: 267px;
  top: 40px;
  left: 0;
  display: flex;
  padding: 66.7px 47.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1920px;
  background-color: var(--white);
`;

const X1 = styled.div`
  height: 105px;
  align-self: flex-start;
  margin-top: 7px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 457px;
`;

const Logo = styled.img`
  width: 67px;
  height: 74px;
  margin-top: 15.06px;
  object-fit: cover;
`;

const ContactInfo = styled.div`
  width: 357px;
  margin-left: 37px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 105px;
`;

const CONTACTINFO = styled.div`
  ${ValignTextMiddle}
  ${RobotoBoldBlack241px}
            height: 28px;
  margin-left: 0;
  letter-spacing: 9.62px;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  ${ZenmarugothicNormalBlack20px}
            width: 353px;
  height: 65px;
  margin-top: 12px;
  letter-spacing: 2px;
`;

const X2 = styled.div`
  width: 413px;
  margin-left: 207px;
  margin-bottom: 1.33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 124px;
`;

const CONNECTWITHUS = styled.div`
  ${ValignTextMiddle}
  ${RobotoBoldBlack241px}
            width: 347px;
  height: 28px;
  margin-right: 0.67px;
  text-align: center;
  letter-spacing: 9.62px;
`;

const Icons = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 413px;
`;

const InstagramIcon = styled.img`
  width: 67px;
  height: 67px;
  margin-top: -0.17px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const TwitterIcon = styled.img`
  width: 67px;
  height: 67px;
  margin-left: 106px;
  margin-top: -0.17px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Law = styled.div`
  ${ValignTextMiddle}
  ${ZenmarugothicNormalGray20px}
            width: 507px;
  height: 133px;
  margin-left: 207px;
  letter-spacing: -0.4px;
`;

const Upper = styled.div`
  position: absolute;
  width: 1925px;
  height: 67px;
  top: 0;
  left: 0;
  display: flex;
  padding: 32.4px 348.4px;
  align-items: flex-start;
`;

const Line1 = styled.img`
  width: 1204px;
  height: 2px;
`;

const Copyright = styled.div`
  margin-top: 27px;
  margin-left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1925px;
  background-color: var(--white);
`;

const OverlapGroup = styled.div`
  height: 67px;
  display: flex;
  padding: 21.4px 721.8px;
  align-items: flex-end;
  min-width: 1925px;
  background-color: var(--telepossible-blue);
`;

const Text = styled.div`
  ${ValignTextMiddle}
  ${ZenmarugothicLightWhite16px}
            width: 480px;
  height: 23px;
  text-align: center;
  letter-spacing: 9.62px;
`;

export default Footer;
