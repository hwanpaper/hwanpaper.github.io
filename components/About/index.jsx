import React from "react";
import Header2 from "../Header2";
import X3ThreeObligations from "../X3ThreeObligations";
import Footer from "../Footer";
import styled from "styled-components";
import {
  NotoserifBoldJaguar55px,
  ZenmarugothicMediumBlueGray18px,
  OswaldNormalYellowOrange16px,
  ZenmarugothicMediumBlack18px,
  ZenmarugothicMediumJaguar18px,
  NotoserifBoldJaguar55px2,
  NotoserifBoldCodGray24px,
  NotoserifBoldCodGray55px,
  NotoserifBoldBlack55px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./About.css";

function About(props) {
  const {
    x1,
    text30,
    text29,
    name,
    coreValues,
    whatWePursue,
    text28,
    since,
    number,
    text23,
    ourVision,
    text24,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    aboutUs,
    text26,
    text27,
    text22,
    ourServices,
    telepImmediatelyProvidesComplexInfo,
    telepProvidesAnOnlineVirtualMeeting,
    basedOnTheChecklistTheOfficerManage,
    evenWhenTheVirtualDiagnosisIsOverTh,
    contributors,
    text20,
    familyMedicine,
    surname,
    screenShot20211115At6361,
    kuyChaeYim,
    entClinic,
    toBeUpdated,
    tbd,
    header2Props,
    x3ThreeObligationsProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="about screen">
        <Banner src="/img/banner-@1x.svg" />
        <Header2
          logoImg={header2Props.logoImg}
          place={header2Props.place}
          works={header2Props.works}
          place2={header2Props.place2}
          icon1Props={header2Props.icon1Props}
        />
        <Introduction>
          <OverlapGroup>
            <X3 src="/img/-----------3@1x.svg" />
            <X2 src="/img/-----------2@1x.svg" />
            <X1 src={x1} />
          </OverlapGroup>
          <Text>
            <Text30 className="animate-enter7" show-on-scroll>
              {text30}
            </Text30>
            <Text29>{text29}</Text29>
            <OverlapGroup1>
              <Name>{name}</Name>
            </OverlapGroup1>
            <CallOutBox2>
              <OverlapGroup2>
                <CoreValues>{coreValues}</CoreValues>
                <WhatWePursue>{whatWePursue}</WhatWePursue>
              </OverlapGroup2>
              <Text28>{text28}</Text28>
            </CallOutBox2>
          </Text>
        </Introduction>
        <OurVision>
          <OverlapGroup6>
            <DollarCollected>
              <OverlapGroup3>
                <SINCE>{since}</SINCE>
                <Number>{number}</Number>
              </OverlapGroup3>
              <Text23>{text23}</Text23>
            </DollarCollected>
            <OurVission>
              <Line5 src="/img/line-5@2x.svg" />
              <FlexCol>
                <OurVision1>{ourVision}</OurVision1>
                <Text24>{text24}</Text24>
                <Text25>
                  <Span06>{spanText}</Span06>
                  <Span16>{spanText2}</Span16>
                  <Span06>{spanText3}</Span06>
                  <Span16>{spanText4}</Span16>
                  <Span06>{spanText5}</Span06>
                </Text25>
              </FlexCol>
            </OurVission>
          </OverlapGroup6>
          <AboutUs>
            <Text1>
              <Line6 src="/img/line-6@2x.svg" />
              <FlexCol1>
                <OurVision1>{aboutUs}</OurVision1>
                <Text26>{text26}</Text26>
                <Text27>{text27}</Text27>
              </FlexCol1>
            </Text1>
            <Image src="/img/image-3@1x.svg" />
          </AboutUs>
        </OurVision>
        <Testimonial>
          <Titles>
            <Text22>{text22}</Text22>
            <OurServices>{ourServices}</OurServices>
          </Titles>
          <FlexCol2>
            <OverlapGroup31>
              <Quote src="/img/quote--3@2x.svg" />
              <TelePImmediatelyProvidesComplexInfo src={telepImmediatelyProvidesComplexInfo} />
            </OverlapGroup31>
            <OverlapGroup11>
              <Quote src="/img/quote--1@2x.svg" />
              <TelePProvidesAnOnlineVirtualMeeting src={telepProvidesAnOnlineVirtualMeeting} />
            </OverlapGroup11>
          </FlexCol2>
          <FlexCol3>
            <OverlapGroup21>
              <Quote src="/img/quote--2@2x.svg" />
              <BasedOnTheChecklistTheOfficermanage src={basedOnTheChecklistTheOfficerManage} />
            </OverlapGroup21>
            <OverlapGroup4>
              <Quote src="/img/quote-@2x.svg" />
              <EvenWhenTheVirtualDiagnosisIsOverTh src={evenWhenTheVirtualDiagnosisIsOverTh} />
            </OverlapGroup4>
          </FlexCol3>
        </Testimonial>
        <X3ThreeObligations
          className={x3ThreeObligationsProps.className}
          imageProps={x3ThreeObligationsProps.imageProps}
          image2Props={x3ThreeObligationsProps.image2Props}
          image3Props={x3ThreeObligationsProps.image3Props}
        />
        <Team>
          <OverlapGroup41>
            <Titles1>
              <CONTRIBUTORS>{contributors}</CONTRIBUTORS>
              <Text20>{text20}</Text20>
            </Titles1>
            <FlexRow>
              <List1>
                <Image1 src="/img/image-1@2x.svg" />
                <OverlapGroup12>
                  <OverlapGroup5>
                    <FamilyMedicine>{familyMedicine}</FamilyMedicine>
                    <Surname>{surname}</Surname>
                  </OverlapGroup5>
                  <Social src="/img/social-@2x.svg" />
                  <Line7 src="/img/line-7@2x.svg" />
                </OverlapGroup12>
              </List1>
              <List2>
                <ScreenShot20211115At6361 src={screenShot20211115At6361} />
                <OverlapGroup22>
                  <OverlapGroup7>
                    <KuyChaeYim>{kuyChaeYim}</KuyChaeYim>
                    <ENTClinic>{entClinic}</ENTClinic>
                  </OverlapGroup7>
                  <Social1 src="/img/social--1@2x.svg" />
                  <Line71 src="/img/line-7-1@2x.svg" />
                </OverlapGroup22>
              </List2>
              <List3>
                <Image2 src="/img/image-2@2x.svg" />
                <OverlapGroup22>
                  <OverlapGroup8>
                    <KuyChaeYim>{toBeUpdated}</KuyChaeYim>
                    <TBD>{tbd}</TBD>
                  </OverlapGroup8>
                  <Social2 src="/img/social--2@2x.svg" />
                  <Line71 src="/img/line-7-1@2x.svg" />
                </OverlapGroup22>
              </List3>
            </FlexRow>
          </OverlapGroup41>
        </Team>
        <Footer logo={footerProps.logo} className={footerProps.className} />
      </div>
    </div>
  );
}

const Banner = styled.img`
  width: 1920px;
  height: 604px;
  z-index: 7;
`;

const Introduction = styled.div`
  height: 951px;
  z-index: 6;
  margin-top: 90px;
  margin-left: 0;
  display: flex;
  padding: 0 72px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1920px;
  background-image: url(/img/dot-style@1x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup = styled.div`
  width: 979px;
  height: 614px;
  position: relative;
  margin-bottom: 1px;
`;

const X3 = styled.img`
  position: absolute;
  width: 939px;
  height: 576px;
  top: 38px;
  left: 0;
`;

const X2 = styled.img`
  position: absolute;
  width: 939px;
  height: 576px;
  top: 18px;
  left: 20px;
`;

const X1 = styled.img`
  position: absolute;
  width: 939px;
  height: 576px;
  top: 0;
  left: 40px;
  object-fit: cover;
`;

const Text = styled.div`
  width: 617px;
  margin-left: 131px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 707px;
`;

const Text30 = styled.div`
  ${NotoserifBoldJaguar55px2}
  width: 470px;
  min-height: 150px;
  letter-spacing: 0;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter7 {
    animation: animate-enter7-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const Text29 = styled.div`
  width: 547px;
  min-height: 200px;
  margin-top: 28px;
  opacity: 0.8;
  font-family: var(--font-family-zen_maru_gothic);
  font-weight: 700;
  color: var(--jaguar);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 40px;
`;

const OverlapGroup1 = styled.div`
  height: 98px;
  margin-top: 43px;
  display: flex;
  padding: 34px 34px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 526px;
  background-color: var(--telepossible-yellow);
  border-radius: 10px;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  height: 30px;
  min-width: 457px;
  font-family: var(--font-family-roboto_slab);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: 4.6px;
`;

const CallOutBox2 = styled.div`
  height: 159px;
  margin-top: 29px;
  display: flex;
  align-items: center;
  min-width: 615px;
`;

const OverlapGroup2 = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  padding: 58px 0;
  align-items: center;
  min-height: 159px;
  background-image: url(/img/rectangle-716-1@2x.svg);
  background-size: 100% 100%;
`;

const CoreValues = styled.div`
  min-height: 5px;
  min-width: 132px;
  font-family: var(--font-family-zen_maru_gothic);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 5px;
  white-space: nowrap;
`;

const WhatWePursue = styled.div`
  ${ValignTextMiddle}
  width: 124px;
  height: 22px;
  margin-top: 16px;
  font-family: var(--font-family-zen_maru_gothic);
  font-weight: 700;
  color: var(--white);
  font-size: 15px;
  text-align: center;
  letter-spacing: 0;
`;

const Text28 = styled.p`
  ${ValignTextMiddle}
  height: 90px;
  margin-left: 14px;
  margin-bottom: 1px;
  min-width: 429px;
  opacity: 0.8;
  font-family: var(--font-family-zen_maru_gothic);
  font-weight: 900;
  color: var(--jaguar);
  font-size: var(--font-size-xxxxs);
  letter-spacing: 0;
  line-height: 30px;
`;

const OurVision = styled.div`
  height: 640px;
  z-index: 5;
  margin-top: 121px;
  margin-right: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 1193px;
`;

const OverlapGroup6 = styled.div`
  width: 591px;
  height: 607px;
  position: relative;
`;

const DollarCollected = styled.div`
  position: absolute;
  height: 159px;
  top: 292px;
  left: 7px;
  display: flex;
  align-items: center;
  min-width: 564px;
`;

const OverlapGroup3 = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  padding: 43px 0;
  align-items: center;
  min-height: 159px;
  background-image: url(/img/rectangle-716@2x.svg);
  background-size: 100% 100%;
`;

const SINCE = styled.div`
  min-height: 34px;
  min-width: 114px;
  font-family: var(--font-family-zen_maru_gothic);
  font-weight: 700;
  color: var(--white);
  font-size: 40px;
  letter-spacing: 0;
  line-height: 34px;
  white-space: nowrap;
`;

const Number = styled.div`
  ${ValignTextMiddle}
  width: 124px;
  height: 28px;
  margin-top: 11px;
  font-family: var(--font-family-zen_maru_gothic);
  font-weight: 700;
  color: var(--white);
  font-size: 30px;
  text-align: center;
  letter-spacing: 3px;
  line-height: 28px;
  white-space: nowrap;
`;

const Text23 = styled.div`
  width: 367px;
  min-height: 140px;
  margin-left: 21px;
  margin-top: 1px;
  opacity: 0.8;
  font-family: var(--font-family-zen_maru_gothic);
  font-weight: 900;
  color: var(--jaguar);
  font-size: var(--font-size-xxxs);
  letter-spacing: 0;
  line-height: 28px;
`;

const OurVission = styled.div`
  position: absolute;
  height: 607px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 591px;
`;

const Line5 = styled.img`
  width: 1px;
  height: 291px;
  margin-top: 20px;
`;

const FlexCol = styled.div`
  width: 567px;
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 607px;
`;

const OurVision1 = styled.div`
  ${NotoserifBoldBlack55px}
  min-height: 75px;
  letter-spacing: 0;
`;

const Text24 = styled.div`
  ${ZenmarugothicMediumJaguar18px}
  width: 484px;
  min-height: 139px;
  margin-top: 23px;
  opacity: 0.8;
  letter-spacing: -0.36px;
  line-height: 30px;
`;

const Text25 = styled.div`
  width: 567px;
  min-height: 111px;
  margin-top: 259px;
  opacity: 0.8;
  font-family: var(--font-family-zen_maru_gothic);
  font-weight: 500;
  color: transparent;
  font-size: var(--font-size-xxxs);
  letter-spacing: -0.36px;
  line-height: 30px;
`;

const Span06 = styled.span`
  ${ZenmarugothicMediumBlack18px}
  letter-spacing: -0.06px;
`;

const Span16 = styled.span`
  ${ZenmarugothicMediumBlueGray18px}
  letter-spacing: -0.06px;
`;

const AboutUs = styled.div`
  width: 508px;
  margin-left: 94px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 640px;
`;

const Text1 = styled.div`
  height: 266px;
  display: flex;
  align-items: center;
  min-width: 514px;
`;

const Line6 = styled.img`
  width: 1px;
  height: 226px;
`;

const FlexCol1 = styled.div`
  width: 489px;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 266px;
`;

const Text26 = styled.div`
  min-height: 34px;
  margin-top: 20px;
  margin-left: 5px;
  font-family: var(--font-family-noto_serif);
  font-weight: 400;
  color: var(--telepossible-red);
  font-size: 30px;
  letter-spacing: 0;
  line-height: 34px;
  white-space: nowrap;
`;

const Text27 = styled.div`
  ${ValignTextMiddle}
  ${ZenmarugothicMediumJaguar18px}
            width: 484px;
  height: 120px;
  align-self: flex-end;
  margin-top: 17px;
  opacity: 0.8;
  letter-spacing: -0.36px;
  line-height: 30px;
`;

const Image = styled.img`
  width: 506px;
  height: 348px;
  margin-top: 26px;
`;

const Testimonial = styled.div`
  height: 1191px;
  z-index: 4;
  margin-top: 230px;
  margin-right: 0.45px;
  display: flex;
  padding: 65px 541px;
  align-items: flex-end;
  min-width: 2496px;
  background-image: url(/img/bg-10@1x.svg);
  background-size: 100% 100%;
`;

const Titles = styled.div`
  width: 467px;
  align-self: center;
  margin-bottom: 21.27px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 170px;
`;

const Text22 = styled.div`
  ${ValignTextMiddle}
  width: 463px;
  height: 90px;
  font-family: var(--font-family-oswald);
  font-weight: 400;
  color: #fab586;
  font-size: var(--font-size-xxs);
  letter-spacing: 9px;
`;

const OurServices = styled.div`
  ${NotoserifBoldJaguar55px}
  min-height: 75px;
  margin-top: 5px;
  letter-spacing: 0;
`;

const FlexCol2 = styled.div`
  width: 371px;
  margin-left: 90px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 986px;
`;

const OverlapGroup31 = styled.div`
  width: 371px;
  display: flex;
  flex-direction: column;
  padding: 38px 26px;
  align-items: flex-start;
  min-height: 473px;
  background-image: url(/img/bg-12@2x.svg);
  background-size: 100% 100%;
`;

const Quote = styled.img`
  width: 58px;
  height: 57px;
  align-self: center;
  margin-right: 1px;
`;

const TelePImmediatelyProvidesComplexInfo = styled.img`
  width: 318px;
  height: 209px;
  margin-top: 72px;
`;

const OverlapGroup11 = styled.div`
  width: 371px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 38px 24.5px;
  align-items: flex-start;
  min-height: 473px;
  background-image: url(/img/bg-12@2x.svg);
  background-size: 100% 100%;
`;

const TelePProvidesAnOnlineVirtualMeeting = styled.img`
  width: 321px;
  height: 271px;
  margin-top: 26px;
`;

const FlexCol3 = styled.div`
  width: 371px;
  margin-left: 29px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 986px;
`;

const OverlapGroup21 = styled.div`
  width: 371px;
  display: flex;
  flex-direction: column;
  padding: 38px 28.5px;
  align-items: flex-start;
  min-height: 473px;
  background-image: url(/img/bg-12@2x.svg);
  background-size: 100% 100%;
`;

const BasedOnTheChecklistTheOfficermanage = styled.img`
  width: 313px;
  height: 300px;
  margin-top: 27px;
`;

const OverlapGroup4 = styled.div`
  width: 371px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 38px 24.5px;
  align-items: flex-start;
  min-height: 473px;
  background-image: url(/img/bg-11@2x.svg);
  background-size: 100% 100%;
`;

const EvenWhenTheVirtualDiagnosisIsOverTh = styled.img`
  width: 321px;
  height: 223px;
  margin-top: 26px;
`;

const Team = styled.div`
  height: 1071px;
  z-index: 2;
  margin-top: 180px;
  margin-right: 0.77px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 2547px;
`;

const OverlapGroup41 = styled.div`
  width: 2548px;
  display: flex;
  flex-direction: column;
  padding: 106px 679.4px;
  align-items: flex-start;
  min-height: 1071px;
  background-image: url(/img/bg-5@1x.svg);
  background-size: 100% 100%;
`;

const Titles1 = styled.div`
  width: 720px;
  align-self: center;
  margin-left: 4.77px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 108px;
`;

const CONTRIBUTORS = styled.div`
  min-height: 30px;
  margin-right: 5px;
  min-width: 215px;
  font-family: var(--font-family-oswald);
  font-weight: 400;
  color: #e89b75;
  font-size: var(--font-size-xxs);
  text-align: center;
  letter-spacing: 9px;
`;

const Text20 = styled.div`
  ${NotoserifBoldCodGray55px}
  min-height: 75px;
  margin-top: 3px;
  margin-right: 4px;
  min-width: 716px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 591px;
  margin-top: 116px;
  display: flex;
  align-items: flex-start;
  min-width: 1180px;
`;

const List1 = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 591px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }
`;

const Image1 = styled.img`
  width: 370px;
  height: 390px;
`;

const OverlapGroup12 = styled.div`
  width: 420px;
  height: 261px;
  position: relative;
  margin-left: -25px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 420px;
  height: 261px;
  top: 0;
  left: 0;
  background-image: url(/img/group-1@2x.svg);
  background-size: 100% 100%;
`;

const FamilyMedicine = styled.div`
  ${OswaldNormalYellowOrange16px}
  position: absolute;
  top: 69px;
  left: 153px;
  letter-spacing: 0;
`;

const Surname = styled.div`
  ${NotoserifBoldCodGray24px}
  position: absolute;
  width: 314px;
  top: 25px;
  left: 53px;
  text-align: center;
  letter-spacing: 0;
  line-height: 36px;
`;

const Social = styled.img`
  position: absolute;
  width: 178px;
  height: 39px;
  top: 135px;
  left: 121px;
`;

const Line7 = styled.img`
  position: absolute;
  width: 302px;
  height: 1px;
  top: 112px;
  left: 51px;
`;

const List2 = styled.div`
  width: 370px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 591px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }
`;

const ScreenShot20211115At6361 = styled.img`
  width: 370px;
  height: 390px;
  margin-left: 0.27px;
  object-fit: cover;
`;

const OverlapGroup22 = styled.div`
  width: 421px;
  height: 261px;
  position: relative;
  margin-left: -25.5px;
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  width: 421px;
  height: 261px;
  top: 0;
  left: 0;
  background-image: url(/img/group-2@2x.svg);
  background-size: 100% 100%;
`;

const KuyChaeYim = styled.div`
  ${NotoserifBoldCodGray24px}
  position: absolute;
  width: 314px;
  top: 25px;
  left: 54px;
  text-align: center;
  letter-spacing: 0;
  line-height: 36px;
`;

const ENTClinic = styled.div`
  ${OswaldNormalYellowOrange16px}
  position: absolute;
  top: 69px;
  left: 182px;
  letter-spacing: 0;
`;

const Social1 = styled.img`
  position: absolute;
  width: 178px;
  height: 39px;
  top: 135px;
  left: 122px;
`;

const Line71 = styled.img`
  position: absolute;
  width: 303px;
  height: 1px;
  top: 112px;
  left: 51px;
`;

const List3 = styled.div`
  width: 370px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 591px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }
`;

const Image2 = styled.img`
  width: 371px;
  height: 390px;
  margin-left: -0.5px;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 421px;
  height: 261px;
  top: 0;
  left: 0;
  background-image: url(/img/group-3@2x.svg);
  background-size: 100% 100%;
`;

const TBD = styled.div`
  ${OswaldNormalYellowOrange16px}
  position: absolute;
  top: 69px;
  left: 199px;
  letter-spacing: 0;
`;

const Social2 = styled.img`
  position: absolute;
  width: 179px;
  height: 39px;
  top: 135px;
  left: 129px;
`;

export default About;
