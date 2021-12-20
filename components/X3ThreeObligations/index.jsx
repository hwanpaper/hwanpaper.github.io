import React from "react";
import Image from "../Image";
import styled from "styled-components";
import {
  RobotoslabBoldBlueGray23px,
  OswaldNormalAquaPearl20px,
  NotoserifBoldWhite55px,
  ValignTextMiddle,
} from "../../styledMixins";


function X3ThreeObligations(props) {
  const { className, imageProps, image2Props, image3Props } = props;

  return (
    <X3ThreeObligations1 className={`x3-three-obligations ${className || ""}`}>
      <OverlapGroup4 className="overlap-group4">
        <BgEffect className="bg-effect-2" src="/img/bg-effect-1@1x.svg" />
        <Blocks className="blocks-1">
          <Block1 className="block-1">
            <Image socialIcon={imageProps.socialIcon} />
            <Title className="title-2">Social Obligation</Title>
            <Text className="text-12" src="/img/text-2@1x.png" />
          </Block1>
          <Block3 className="block-3">
            <Image socialIcon={image2Props.socialIcon} className={image2Props.className} />
            <Title1 className="title-3">Obligation as a Global Citizen</Title1>
            <Text1 className="text-15" src="/img/text@1x.png" />
          </Block3>
          <Block2 className="block-2">
            <Image socialIcon={image3Props.socialIcon} />
            <Title className="title-4">Moral Obligation</Title>
            <Text2 className="text-16" src="/img/text-1@1x.png" />
          </Block2>
        </Blocks>
        <Title2 className="title-5 animate-enter3" show-on-scroll>
          <Text12 className="text-12-1">
            <span className="span0-5 notoserif-bold-jaguar-55px">TelePossible</span>
            <span className="span1-5 notoserif-bold-cinnabar-55px">’</span>
            <span className="span2-4 notoserif-bold-jaguar-55px">s Three Obligations</span>
          </Text12>
          <OBLIGATIONS className="obligations">OBLIGATIONS</OBLIGATIONS>
        </Title2>
      </OverlapGroup4>
    </X3ThreeObligations1>
  );
}

const X3ThreeObligations1 = styled.div`
  height: 1041px;
  margin-top: 16px;
  margin-right: -397.23px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 2715px;

  &.x3-three-obligations.three-obligations {
    z-index: 3;
    margin-top: 179px;
    margin-right: 0.77px;
  }
`;

const OverlapGroup4 = styled.div`
  width: 2716px;
  height: 1042px;
  position: relative;
  margin-top: -0.33px;
  background-image: url(/img/bg-1@1x.svg);
  background-size: 100% 100%;
`;

const BgEffect = styled.img`
  position: absolute;
  width: 1626px;
  height: 737px;
  top: 207px;
  left: 547px;
`;

const Blocks = styled.div`
  position: absolute;
  height: 420px;
  top: 406px;
  left: 647px;
  display: flex;
  align-items: flex-start;
  min-width: 1422px;
`;

const Block1 = styled.div`
  width: 370px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 56px 29.5px;
  align-items: center;
  min-height: 420px;
  transition: all 0.2s ease;
  background-image: url(/img/bg-2@2x.svg);
  background-size: 100% 100%;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.div`
  ${RobotoslabBoldBlueGray23px}
  width: 250px;
  min-height: 30px;
  margin-top: 38px;
  text-align: center;
  letter-spacing: 2.3px;
`;

const Text = styled.img`
  width: 310px;
  height: 74px;
  align-self: flex-start;
  margin-top: 46px;
`;

const Block3 = styled.div`
  width: 370px;
  position: relative;
  margin-left: 156px;
  display: flex;
  flex-direction: column;
  padding: 46px 24px;
  align-items: center;
  min-height: 420px;
  transition: all 0.2s ease;
  background-image: url(/img/bg-2@2x.svg);
  background-size: 100% 100%;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }
`;

const Title1 = styled.div`
  ${RobotoslabBoldBlueGray23px}
  width: 250px;
  min-height: 60px;
  margin-top: 38px;
  margin-left: 2px;
  text-align: center;
  letter-spacing: 2.3px;
`;

const Text1 = styled.img`
  width: 321px;
  height: 74px;
  align-self: flex-end;
  margin-top: 36px;
`;

const Block2 = styled.div`
  width: 370px;
  position: relative;
  margin-left: 156px;
  display: flex;
  flex-direction: column;
  padding: 56px 24px;
  align-items: center;
  min-height: 420px;
  transition: all 0.2s ease;
  background-image: url(/img/bg-2@2x.svg);
  background-size: 100% 100%;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  }
`;

const Text2 = styled.img`
  width: 321px;
  height: 47px;
  align-self: flex-start;
  margin-top: 44px;
`;

const Title2 = styled.div`
  position: absolute;
  width: 905px;
  height: 121px;
  top: 161px;
  left: 907px;
  opacity: 0;

  &.animate-enter3 {
    animation: animate-enter3-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const Text12 = styled.div`
  ${NotoserifBoldWhite55px}
  position: absolute;
  top: 46px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const OBLIGATIONS = styled.div`
  ${ValignTextMiddle}
  ${OswaldNormalAquaPearl20px}
            position: absolute;
  width: 250px;
  height: 30px;
  top: 0;
  left: 325px;
  text-align: center;
  letter-spacing: 9px;
`;

const OverlapGroup5 = styled.div`
  .x3-three-obligations.three-obligations & {
    background-image: url(/img/bg-6@1x.svg);
  }
`;

const Block11 = styled.div`
  .x3-three-obligations.three-obligations &:hover {
    transform: scale(0.9);
  }
`;

const Title3 = styled.div`
  &.animate-enter6 {
    animation: animate-enter6-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

export default X3ThreeObligations;
