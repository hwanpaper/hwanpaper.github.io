import React from "react";
import styled from "styled-components";
import { OswaldMediumWhite20px } from "../../styledMixins";


function DonationButton() {
  return (
    <DonationButton1>
      <OverlapGroup>
        <Rectangle703></Rectangle703>
        <Donation>Donation</Donation>
      </OverlapGroup>
    </DonationButton1>
  );
}

const DonationButton1 = styled.div`
  margin-left: 351px;
  display: flex;
  align-items: flex-start;
  min-width: 175px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup = styled.div`
  width: 173px;
  height: 120px;
  position: relative;
`;

const Rectangle703 = styled.div`
  position: absolute;
  width: 173px;
  height: 55px;
  top: 32px;
  left: 0;
  background-color: var(--telepossible-red);
  border-radius: 35px;
`;

const Donation = styled.div`
  ${OswaldMediumWhite20px}
  position: absolute;
  top: 0;
  left: 53px;
  text-align: center;
  letter-spacing: 0;
  line-height: 120px;
  white-space: nowrap;
`;

const DonationButton2 = styled.div`
  margin-left: 351px;
  display: flex;
  align-items: flex-start;
  min-width: 175px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup1 = styled.div`
  width: 173px;
  height: 120px;
  position: relative;
`;

const Rectangle7031 = styled.div`
  position: absolute;
  width: 173px;
  height: 55px;
  top: 32px;
  left: 0;
  background-color: var(--telepossible-red);
  border-radius: 35px;
`;

const Donation1 = styled.div`
  ${OswaldMediumWhite20px}
  position: absolute;
  top: 0;
  left: 53px;
  text-align: center;
  letter-spacing: 0;
  line-height: 120px;
  white-space: nowrap;
`;

const DonationButton3 = styled.div`
  margin-left: 351px;
  display: flex;
  align-items: flex-start;
  min-width: 175px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup2 = styled.div`
  width: 173px;
  height: 120px;
  position: relative;
`;

const Rectangle7032 = styled.div`
  position: absolute;
  width: 173px;
  height: 55px;
  top: 32px;
  left: 0;
  background-color: var(--telepossible-red);
  border-radius: 35px;
`;

const Donation2 = styled.div`
  ${OswaldMediumWhite20px}
  position: absolute;
  top: 0;
  left: 53px;
  text-align: center;
  letter-spacing: 0;
  line-height: 120px;
  white-space: nowrap;
`;

const DonationButton4 = styled.div`
  margin-left: 351px;
  display: flex;
  align-items: flex-start;
  min-width: 175px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup3 = styled.div`
  width: 173px;
  height: 120px;
  position: relative;
`;

const Rectangle7033 = styled.div`
  position: absolute;
  width: 173px;
  height: 55px;
  top: 32px;
  left: 0;
  background-color: var(--telepossible-red);
  border-radius: 35px;
`;

const Donation3 = styled.div`
  ${OswaldMediumWhite20px}
  position: absolute;
  top: 0;
  left: 53px;
  text-align: center;
  letter-spacing: 0;
  line-height: 120px;
  white-space: nowrap;
`;

export default DonationButton;
