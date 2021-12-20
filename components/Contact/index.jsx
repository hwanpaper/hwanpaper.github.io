import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import { OswaldNormalBlack16px, NotoserifBoldBlack24px } from "../../styledMixins";
import "./Contact.css";

function Contact(props) {
  const { place, text17, callUs, phone, address, address2, mailUs, text16, headerProps, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact screen">
        <OverlapGroup4>
          <Map src="/img/map----------@1x.svg" />
          <OverlapGroup3>
            <BgImage></BgImage>
            <EffectShape id="effect-shape">
              <OverlapGroup>
                <Polygon5 src="/img/polygon-5@2x.svg" />
                <Polygon9 src="/img/polygon-5@2x.svg" />
                <Ellipse4 src="/img/ellipse-4@2x.svg" />
                <Ellipse6 src="/img/ellipse-6@2x.svg" />
              </OverlapGroup>
              <OverlapGroup1>
                <Polygon6 src="/img/polygon-6@2x.svg" />
                <Polygon7 src="/img/polygon-7@2x.svg" />
                <Polygon8 src="/img/polygon-8@2x.svg" />
                <Ellipse5 src="/img/ellipse-5-1@2x.svg" />
              </OverlapGroup1>
            </EffectShape>
            <Text>
              <OverlapGroup2>
                <Underline src="/img/underline@2x.svg" />
                <Place>{place}</Place>
              </OverlapGroup2>
              <Text17>{text17}</Text17>
            </Text>
          </OverlapGroup3>
          <Header className={headerProps.className} />
        </OverlapGroup4>
        <ListOfHelp>
          <Call>
            <OverlapGroup21>
              <OverlapGroup5>
                <CallUs>{callUs}</CallUs>
                <CallSvgrepoCom2 src="/img/call-svgrepo-com-2@2x.svg" />
                <CallSvgrepoCom1 src="/img/call-svgrepo-com-1@2x.svg" />
              </OverlapGroup5>
              <Phone>{phone}</Phone>
            </OverlapGroup21>
          </Call>
          <Address>
            <OverlapGroup11>
              <Location1 src="/img/location-1@2x.svg" />
              <OverlapGroup6>
                <Address1>{address}</Address1>
                <Address2>{address2}</Address2>
              </OverlapGroup6>
            </OverlapGroup11>
          </Address>
          <Address>
            <OverlapGroup7>
              <Group src="/img/group@2x.svg" />
              <MailUs>{mailUs}</MailUs>
              <Text16>{text16}</Text16>
            </OverlapGroup7>
          </Address>
        </ListOfHelp>
        <Footer logo={footerProps.logo} className={footerProps.className} />
      </div>
    </div>
  );
}

const OverlapGroup4 = styled.div`
  width: 2091px;
  height: 1189px;
  position: relative;
  margin-left: -168px;
`;

const Map = styled.img`
  position: absolute;
  width: 1920px;
  height: 586px;
  top: 603px;
  left: 168px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 2091px;
  height: 618px;
  top: 0;
  left: 0;
`;

const BgImage = styled.div`
  position: absolute;
  width: 1926px;
  height: 604px;
  top: 0;
  left: 165px;
  background-color: #f8f8f8;
`;

const EffectShape = styled.div`
  position: absolute;
  height: 501px;
  top: 117px;
  left: 0;
  display: flex;
  padding: 33.4px 21px;
  align-items: center;
  min-width: 2084px;
`;

const OverlapGroup = styled.div`
  width: 356px;
  height: 364px;
  position: relative;
  margin-top: 28.5px;
`;

const Polygon5 = styled.img`
  position: absolute;
  width: 274px;
  height: 237px;
  top: 126px;
  left: 13px;
`;

const Polygon9 = styled.img`
  position: absolute;
  width: 274px;
  height: 237px;
  top: 32px;
  left: 0;
`;

const Ellipse4 = styled.img`
  position: absolute;
  width: 170px;
  height: 170px;
  top: 24px;
  left: 179px;
`;

const Ellipse6 = styled.img`
  position: absolute;
  width: 71px;
  height: 72px;
  top: 0;
  left: 285px;
`;

const OverlapGroup1 = styled.div`
  width: 273px;
  height: 349px;
  position: relative;
  align-self: flex-end;
  margin-left: 1392px;
`;

const Polygon6 = styled.img`
  position: absolute;
  width: 208px;
  height: 224px;
  top: 0;
  left: 65px;
`;

const Polygon7 = styled.img`
  position: absolute;
  width: 208px;
  height: 223px;
  top: 59px;
  left: 34px;
`;

const Polygon8 = styled.img`
  position: absolute;
  width: 208px;
  height: 224px;
  top: 125px;
  left: 0;
`;

const Ellipse5 = styled.img`
  position: absolute;
  width: 31px;
  height: 31px;
  top: 37px;
  left: 190px;
`;

const Text = styled.div`
  position: absolute;
  width: 1017px;
  top: 261px;
  left: 621px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 170px;
`;

const OverlapGroup2 = styled.div`
  width: 1013px;
  height: 138px;
  position: relative;
  margin-right: 4px;
`;

const Underline = styled.img`
  position: absolute;
  width: 433px;
  height: 32px;
  top: 106px;
  left: 312px;
`;

const Place = styled.h1`
  position: absolute;
  width: 1013px;
  top: 0;
  left: 0;
  font-family: var(--font-family-noto_serif);
  font-weight: 700;
  color: var(--black);
  font-size: 120px;
  text-align: center;
  letter-spacing: 0;
  line-height: 125.5px;
  white-space: nowrap;
`;

const Text17 = styled.p`
  width: 350px;
  min-height: 22px;
  margin-top: 10px;
  margin-right: 5px;
  font-family: var(--font-family-zen_kaku_gothic_antique);
  font-weight: 500;
  color: #494949;
  font-size: 15px;
  text-align: center;
  letter-spacing: 1.5px;
`;

const ListOfHelp = styled.div`
  align-self: center;
  margin-top: 146px;
  display: flex;
  align-items: flex-start;
  min-width: 1170px;
`;

const Call = styled.div`
  height: 224px;
  display: flex;
  align-items: flex-start;
  min-width: 374px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }
`;

const OverlapGroup21 = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  padding: 36px 0;
  align-items: center;
  min-height: 224px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 14px 20px #ded7d740;
`;

const OverlapGroup5 = styled.div`
  width: 82px;
  height: 105px;
  position: relative;
  margin-top: 4px;
`;

const CallUs = styled.div`
  ${NotoserifBoldBlack24px}
  position: absolute;
  top: 67px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const CallSvgrepoCom2 = styled.img`
  position: absolute;
  width: 49px;
  height: 49px;
  top: 21px;
  left: 3px;
`;

const CallSvgrepoCom1 = styled.img`
  position: absolute;
  width: 67px;
  height: 67px;
  top: 0;
  left: 14px;
`;

const Phone = styled.p`
  ${OswaldNormalBlack16px}
  min-height: 38px;
  margin-top: 5px;
  min-width: 128px;
  opacity: 0.8;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const Address = styled.div`
  height: 224px;
  margin-left: 26px;
  display: flex;
  align-items: flex-start;
  min-width: 374px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }
`;

const OverlapGroup11 = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  padding: 36px 69px;
  align-items: flex-end;
  min-height: 224px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 14px 20px #ded7d740;
`;

const Location1 = styled.img`
  width: 57px;
  height: 57px;
  align-self: center;
  margin-top: 6px;
  margin-right: 7px;
`;

const OverlapGroup6 = styled.div`
  width: 231px;
  height: 81px;
  position: relative;
  margin-top: 8px;
`;

const Address1 = styled.p`
  ${OswaldNormalBlack16px}
  position: absolute;
  top: 43px;
  left: 0;
  opacity: 0.8;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const Address2 = styled.div`
  ${NotoserifBoldBlack24px}
  position: absolute;
  top: 0;
  left: 60px;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
`;

const OverlapGroup7 = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  padding: 36px 118px;
  align-items: center;
  min-height: 224px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 14px 20px #ded7d740;
`;

const Group = styled.img`
  width: 59px;
  height: 39px;
  margin-top: 18px;
  margin-right: 5.42px;
`;

const MailUs = styled.div`
  ${NotoserifBoldBlack24px}
  min-height: 38px;
  margin-top: 14px;
  margin-left: 1px;
  min-width: 89px;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const Text16 = styled.div`
  ${OswaldNormalBlack16px}
  min-height: 38px;
  align-self: flex-end;
  margin-top: 5px;
  min-width: 133px;
  opacity: 0.8;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

export default Contact;
