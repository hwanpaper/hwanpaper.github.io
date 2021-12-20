import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import X3ThreeObligations from "../X3ThreeObligations";
import Footer from "../Footer";
import styled from "styled-components";
import {
  ZenkakugothicnewMediumBlueGray25px,
  RobotoslabMediumBlack20px,
  ZenkakugothicnewMediumJaguar25px,
  ZenkakugothicnewMediumBlack25px,
  NotoserifBoldCodGray55px,
  ZenkakugothicnewMediumWhite25px,
  NotoserifBoldWhite55px,
  OswaldNormalAquaPearl20px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Index.css";

function Index(props) {
  const {
    bgImage,
    joinNow,
    text,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    learnMore,
    screenShot20211116At12241,
    actions,
    title,
    spanText11,
    spanText12,
    spanText13,
    donationGoals,
    text10,
    donation,
    text6,
    text5,
    text4,
    text3,
    text2,
    joinNow2,
    spanText14,
    spanText15,
    spanText16,
    text8,
    text7,
    x3ThreeObligationsProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="index screen">
        <OverlapGroup8>
          <OverlapGroup6>
            <BgImage src={bgImage} />
            <OverlapGroup6 id="effect-shape" src="/img/effect-shape-@1x.svg" />
            <Link to="/contact">
              <DonationButton>
                <OverlapGroup>
                  <Rectangle702></Rectangle702>
                  <JoinNow>{joinNow}</JoinNow>
                </OverlapGroup>
              </DonationButton>
            </Link>
            <Text className="animate-enter5">{text}</Text>
          </OverlapGroup6>
          <Header />
        </OverlapGroup8>
        <OverlapGroup10>
          <OverlapGroup5>
            <BGEffects>
              <VectorSmartObjectCopy4 src="/img/vector-smart-object-copy-4@2x.svg" />
              <OverlapGroup1>
                <Ellipse6></Ellipse6>
                <VectorSmartObjectCopy src="/img/vector-smart-object-copy@2x.svg" />
              </OverlapGroup1>
            </BGEffects>
            <OverlapGroup11>
              <Ellipse714 src="/img/ellipse-714@2x.svg" />
            </OverlapGroup11>
            <Text1>
              <WeAreHereTo className="animate-enter4" show-on-scroll>
                <span className="notoserif-bold-jaguar-55px-2">{spanText}</span>
                <span className="notoserif-bold-cinnabar-55px">{spanText2}</span>
              </WeAreHereTo>
              <Text14>
                <span>
                  <Span01>{spanText3}</Span01>
                  <Span11>{spanText4}</Span11>
                  <Span2>{spanText5}</Span2>
                </span>
              </Text14>
              <Text13>
                <span>
                  <Span11>{spanText6}</Span11>
                  <Span2>{spanText7}</Span2>
                  <Span11>{spanText8}</Span11>
                  <Span2>{spanText9}</Span2>
                  <Span11>{spanText10}</Span11>
                </span>
              </Text13>
              <Link to="/about">
                <Button>
                  <OverlapGroup2>
                    <LearnMore>{learnMore}</LearnMore>
                  </OverlapGroup2>
                </Button>
              </Link>
            </Text1>
          </OverlapGroup5>
          <Image src="/img/image@1x.svg" />
          <ScreenShot20211116At12241 src={screenShot20211116At12241} />
        </OverlapGroup10>
        <X3ThreeObligations
          imageProps={x3ThreeObligationsProps.imageProps}
          image2Props={x3ThreeObligationsProps.image2Props}
          image3Props={x3ThreeObligationsProps.image3Props}
        />
        <X4CenterInfo>
          <OverlapGroup3>
            <BgEffect src="/img/bg-effect@1x.svg" />
            <OverlapGroup4>
              <Image1 src="/img/image-@1x.svg" />
              <Image2 src="/img/image--1@1x.svg" />
            </OverlapGroup4>
            <Quote src="/img/quote@2x.svg" />
          </OverlapGroup3>
          <Text2>
            <ACTIONS>{actions}</ACTIONS>
            <Title className="animate-enter2" show-on-scroll>
              {title}
            </Title>
            <Text11>
              <Span03>{spanText11}</Span03>
              <Span13>{spanText12}</Span13>
              <Span03>{spanText13}</Span03>
            </Text11>
          </Text2>
        </X4CenterInfo>
        <OverlapGroup9>
          <X5FundingGoals>
            <Title1 className="animate-enter1" show-on-scroll>
              <DONATIONGOALS>{donationGoals}</DONATIONGOALS>
              <Text10>{text10}</Text10>
            </Title1>
            <Blocks>
              <List1 src="/img/list-1@1x.svg" />
              <List2 src="/img/list-2@1x.svg" />
              <List2 src="/img/list-3@1x.svg" />
            </Blocks>
          </X5FundingGoals>
          <Group28>
            <OverlapGroup7>
              <Rectangle703></Rectangle703>
              <Donation>{donation}</Donation>
              <DonationSvgrepoCom1 src="/img/donation-svgrepo-com-1@2x.svg" />
            </OverlapGroup7>
          </Group28>
        </OverlapGroup9>
        <X6Recruiting>
          <OverlapGroup21>
            <BgEffect1 src="/img/bg-effect-@1x.svg" />
            <DropDownText>
              <Box1>
                <X1Plus src="/img/1-plus@2x.svg" />
                <FlexCol>
                  <Text6>{text6}</Text6>
                  <Text5>{text5}</Text5>
                </FlexCol>
              </Box1>
              <Box2>
                <X2Plus src="/img/4-plus@2x.svg" />
                <Text4>{text4}</Text4>
              </Box2>
              <Box3>
                <X3Plus src="/img/4-plus@2x.svg" />
                <Text4>{text3}</Text4>
              </Box3>
              <Box4>
                <X4Plus src="/img/4-plus@2x.svg" />
                <Text21>{text2}</Text21>
              </Box4>
              <Link to="/contact" className="align-self-flex-center">
                <Button1>
                  <OverlapGroup12>
                    <JOINNOW>{joinNow2}</JOINNOW>
                  </OverlapGroup12>
                </Button1>
              </Link>
            </DropDownText>
            <Text3>
              <Text9 className="animate-enter" show-on-scroll>
                <span className="notoserif-bold-jaguar-55px-2">{spanText14}</span>
                <span className="notoserif-bold-cinnabar-55px">{spanText15}</span>
                <span className="notoserif-bold-jaguar-55px-2">{spanText16}</span>
              </Text9>
              <Text8>{text8}</Text8>
              <Text7>{text7}</Text7>
            </Text3>
          </OverlapGroup21>
        </X6Recruiting>
        <Footer logo={footerProps.logo} />
      </div>
    </div>
  );
}

const OverlapGroup8 = styled.div`
  width: 2643px;
  height: 1265px;
  position: relative;
  margin-top: -104px;
  margin-right: -429px;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 2643px;
  height: 1265px;
  top: 0;
  left: 0;
`;

const BgImage = styled.img`
  position: absolute;
  width: 1920px;
  height: 1008px;
  top: 188px;
  left: 293px;
`;

const DonationButton = styled.div`
  position: absolute;
  height: 120px;
  top: 765px;
  left: 625px;
  display: flex;
  align-items: flex-start;
  min-width: 228px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup = styled.div`
  width: 226px;
  height: 120px;
  position: relative;
`;

const Rectangle702 = styled.div`
  position: absolute;
  width: 226px;
  height: 68px;
  top: 26px;
  left: 0;
  background-color: var(--telepossible-blue);
  border-radius: 35px;
`;

const JoinNow = styled.div`
  position: absolute;
  top: 0;
  left: 69px;
  font-family: var(--font-family-oswald);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: 120px;
  white-space: nowrap;
`;

const Text = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 1500px;
  height: 218px;
  top: 499px;
  left: 625px;
  font-family: var(--font-family-noto_serif);
  font-weight: 700;
  color: var(--white);
  font-size: 80px;
  letter-spacing: 0;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter5 {
    animation: animate-enter5-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const OverlapGroup10 = styled.div`
  width: 2389px;
  height: 928px;
  position: relative;
  margin-top: 60px;
  margin-right: -546px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 2389px;
  height: 905px;
  top: 23px;
  left: 0;
`;

const BGEffects = styled.div`
  position: absolute;
  height: 850px;
  top: 55px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 2389px;
`;

const VectorSmartObjectCopy4 = styled.img`
  width: 191px;
  height: 259px;
  align-self: flex-end;
  margin-bottom: -0.03px;
`;

const OverlapGroup1 = styled.div`
  width: 750px;
  height: 673px;
  position: relative;
  margin-left: 1448px;
`;

const Ellipse6 = styled.div`
  position: absolute;
  width: 673px;
  height: 673px;
  top: 0;
  left: 77px;
  background-color: #e1e1e1;
  border-radius: 336.5px;
  opacity: 0.4;
`;

const VectorSmartObjectCopy = styled.img`
  position: absolute;
  width: 196px;
  height: 197px;
  top: 155px;
  left: 0;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  height: 800px;
  top: 0;
  left: 61px;
  display: flex;
  padding: 41.3px 165px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 811px;
  background-image: url(/img/ellipse-5@1x.svg);
  background-size: 100% 100%;
`;

const Ellipse714 = styled.img`
  width: 278px;
  height: 223px;
`;

const Text1 = styled.div`
  position: absolute;
  width: 706px;
  top: 76px;
  left: 865px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 647px;
`;

const WeAreHereTo = styled.div`
  ${NotoserifBoldWhite55px}
  min-height: 75px;
  letter-spacing: 0;
  opacity: 0;

  &.animate-enter4 {
    animation: animate-enter4-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const Text14 = styled.div`
  ${ValignTextMiddle}
  width: 700px;
  height: 144px;
  margin-top: 60px;
  opacity: 0.8;
  font-family: var(--font-family-zen_kaku_gothic_new);
  font-weight: 700;
  color: transparent;
  font-size: var(--font-size-m);
  letter-spacing: 2px;
`;

const Span01 = styled.span`
  font-weight: 700;
  color: var(--jaguar);
  letter-spacing: 0.5px;
`;

const Span11 = styled.span`
  ${ZenkakugothicnewMediumJaguar25px}
  letter-spacing: 0.50px;
`;

const Span2 = styled.span`
  ${ZenkakugothicnewMediumBlueGray25px}
  letter-spacing: 0.50px;
`;

const Span03 = styled.span`
  ${ZenkakugothicnewMediumBlack25px}
  letter-spacing: 0.50px;
`;

const Text13 = styled.div`
  ${ValignTextMiddle}
  ${ZenkakugothicnewMediumWhite25px}
            width: 700px;
  height: 216px;
  margin-top: 23px;
  opacity: 0.8;
  letter-spacing: 2px;
`;

const Button = styled.div`
  margin-top: 65px;
  display: flex;
  align-items: flex-start;
  min-width: 252px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup2 = styled.div`
  height: 64px;
  display: flex;
  padding: 15px 50px;
  align-items: flex-start;
  min-width: 250px;
  border-radius: 35px;
  border: 2px solid var(--black);
`;

const LearnMore = styled.div`
  min-height: 29px;
  min-width: 147px;
  font-family: var(--font-family-heebo);
  font-weight: 400;
  color: #141313;
  font-size: var(--font-size-xxs);
  text-align: center;
  letter-spacing: 5px;
`;

const Image = styled.img`
  position: absolute;
  width: 495px;
  height: 579px;
  top: 131px;
  left: 104px;
`;

const ScreenShot20211116At12241 = styled.img`
  position: absolute;
  width: 481px;
  height: 580px;
  top: 99px;
  left: 150px;
  object-fit: cover;
`;

const X4CenterInfo = styled.div`
  width: 1533px;
  height: 1134px;
  position: relative;
  align-self: center;
  margin-top: 89px;
  margin-left: 80.97px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1007px;
  height: 1135px;
  top: 0;
  left: 526px;
`;

const BgEffect = styled.img`
  position: absolute;
  width: 959px;
  height: 1135px;
  top: 0;
  left: 0;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 840px;
  height: 657px;
  top: 204px;
  left: 167px;
`;

const Image1 = styled.img`
  position: absolute;
  width: 561px;
  height: 495px;
  top: 0;
  left: 0;
`;

const Image2 = styled.img`
  position: absolute;
  width: 571px;
  height: 504px;
  top: 153px;
  left: 269px;
`;

const Quote = styled.img`
  position: absolute;
  width: 321px;
  height: 215px;
  top: 729px;
  left: 274px;
`;

const Text2 = styled.div`
  position: absolute;
  width: 526px;
  top: 184px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 726px;
`;

const ACTIONS = styled.div`
  ${ValignTextMiddle}
  ${OswaldNormalAquaPearl20px}
            width: 300px;
  height: 21px;
  letter-spacing: 9px;
`;

const Title = styled.div`
  ${ValignTextMiddle}
  ${NotoserifBoldCodGray55px}
            height: 150px;
  margin-top: 25px;
  letter-spacing: 0;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter2 {
    animation: animate-enter2-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const Text11 = styled.div`
  ${ZenkakugothicnewMediumWhite25px}
  width: 450px;
  min-height: 504px;
  margin-top: 26px;
  opacity: 0.8;
  letter-spacing: 2px;
`;

const Span13 = styled.span`
  font-family: var(--font-family-zen_kaku_gothic_new);
  font-weight: 900;
  color: var(--telepossible-blue);
  font-size: var(--font-size-m);
  letter-spacing: 0.5px;
`;

const OverlapGroup9 = styled.div`
  width: 1921px;
  height: 1257px;
  position: relative;
  margin-top: 69px;
  margin-right: 2px;
`;

const X5FundingGoals = styled.div`
  position: absolute;
  width: 1921px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 83px 273px;
  align-items: flex-end;
  min-height: 1257px;
  background-image: url(/img/bg@1x.svg);
  background-size: 100% 100%;
`;

const Title1 = styled.div`
  width: 570px;
  height: 194px;
  position: relative;
  align-self: center;
  margin-left: 49px;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter1 {
    animation: animate-enter1-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const DONATIONGOALS = styled.div`
  position: absolute;
  top: 0;
  left: 160px;
  font-family: var(--font-family-oswald);
  font-weight: 400;
  color: #f25e25;
  font-size: var(--font-size-xxs);
  text-align: center;
  letter-spacing: 9px;
`;

const Text10 = styled.div`
  ${NotoserifBoldCodGray55px}
  position: absolute;
  top: 44px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Blocks = styled.div`
  height: 725px;
  margin-top: 107px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 1330px;
`;

const List1 = styled.img`
  width: 450px;
  height: 806px;
  margin-top: -25.5px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const List2 = styled.img`
  width: 450px;
  height: 806px;
  margin-left: 30px;
  margin-top: -25.5px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Group28 = styled.div`
  position: absolute;
  height: 102px;
  top: 1133px;
  left: 896px;
  display: flex;
  align-items: flex-start;
  min-width: 166px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup7 = styled.div`
  width: 166px;
  height: 102px;
  position: relative;
`;

const Rectangle703 = styled.div`
  position: absolute;
  width: 166px;
  height: 47px;
  top: 27px;
  left: 0;
  background-color: var(--white);
  border-radius: 29.75px;
  border: 1.7px solid #fe6711;
`;

const Donation = styled.div`
  position: absolute;
  width: 73px;
  top: 0;
  left: 35px;
  font-family: var(--font-family-oswald);
  font-weight: 500;
  color: #f96703;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 102px;
  white-space: nowrap;
`;

const DonationSvgrepoCom1 = styled.img`
  position: absolute;
  width: 22px;
  height: 23px;
  top: 40px;
  left: 117px;
`;

const X6Recruiting = styled.div`
  align-self: center;
  margin-top: 288px;
  margin-right: 5.79px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 1692px;
`;

const OverlapGroup21 = styled.div`
  width: 1693px;
  height: 597px;
  position: relative;
  margin-top: -0.13px;
`;

const BgEffect1 = styled.img`
  position: absolute;
  width: 1693px;
  height: 492px;
  top: 0;
  left: 0;
`;

const DropDownText = styled.div`
  position: absolute;
  width: 805px;
  top: 28px;
  left: 773px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 569px;
`;

const Box1 = styled.div`
  height: 214px;
  display: flex;
  align-items: flex-start;
  min-width: 789px;
`;

const X1Plus = styled.img`
  width: 16px;
  height: 2px;
  margin-left: -1px;
  margin-top: 14px;
`;

const FlexCol = styled.div`
  width: 755px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 214px;
`;

const Text6 = styled.div`
  ${RobotoslabMediumBlack20px}
  min-height: 30px;
  letter-spacing: -0.4px;
  line-height: 30px;
  white-space: nowrap;
`;

const Text5 = styled.div`
  width: 755px;
  min-height: 180px;
  margin-top: 4px;
  opacity: 0.8;
  font-family: var(--font-family-zen_kaku_gothic_new);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xxxs);
  letter-spacing: -0.36px;
  line-height: 30px;
`;

const Box2 = styled.div`
  height: 60px;
  margin-top: 28px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 609px;
`;

const X2Plus = styled.img`
  width: 11px;
  height: 11px;
  margin-left: -1px;
  margin-top: 9px;
`;

const Text4 = styled.div`
  ${RobotoslabMediumBlack20px}
  min-height: 60px;
  margin-left: 18px;
  letter-spacing: -0.4px;
  line-height: 30px;
`;

const Box3 = styled.div`
  height: 60px;
  margin-top: 28px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 540px;
`;

const X3Plus = styled.img`
  width: 11px;
  height: 11px;
  margin-left: -1px;
  margin-top: 12px;
`;

const Box4 = styled.div`
  height: 30px;
  margin-top: 28px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 805px;
`;

const X4Plus = styled.img`
  width: 11px;
  height: 11px;
  margin-left: -1px;
  margin-bottom: 1px;
`;

const Text21 = styled.div`
  ${RobotoslabMediumBlack20px}
  min-height: 30px;
  margin-left: 18px;
  min-width: 775px;
  letter-spacing: -0.4px;
  line-height: 30px;
  white-space: nowrap;
`;

const Button1 = styled.div`
  align-self: center;
  margin-top: 66px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 252px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup12 = styled.div`
  height: 55px;
  display: flex;
  padding: 13px 56px;
  align-items: flex-start;
  min-width: 250px;
  background-color: var(--telepossible-red);
  border-radius: 35px;
`;

const JOINNOW = styled.div`
  ${ValignTextMiddle}
  height: 29px;
  min-width: 138px;
  font-family: var(--font-family-heebo);
  font-weight: 800;
  color: var(--white);
  font-size: var(--font-size-xxs);
  text-align: center;
  letter-spacing: 6px;
`;

const Text3 = styled.div`
  position: absolute;
  width: 542px;
  top: 1px;
  left: 89px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 591px;
`;

const Text9 = styled.div`
  ${NotoserifBoldWhite55px}
  min-height: 150px;
  letter-spacing: 0;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter {
    animation: animate-enter-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const Text8 = styled.div`
  ${ZenkakugothicnewMediumJaguar25px}
  width: 530px;
  min-height: 324px;
  margin-top: 33px;
  opacity: 0.8;
  letter-spacing: 2px;
`;

const Text7 = styled.div`
  min-height: 45px;
  margin-top: 39px;
  font-family: var(--font-family-roboto_slab);
  font-weight: 700;
  color: var(--telepossible-blue);
  font-size: 34px;
  letter-spacing: 0;
`;

export default Index;
