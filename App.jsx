
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import Contact from "./components/Contact";
import Work from "./components/Work";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/index">
          <Index {...indexData} />
        </Route>
        <Route path="/contact">
          <Contact {...contactData} />
        </Route>
        <Route path="/work">
          <Work image5="/img/image-5@1x.png" headerProps={workData.headerProps} footerProps={workData.footerProps} />
        </Route>
        <Route path="/:path(|about)">
          <About {...aboutData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const imageData = {
    socialIcon: "/img/social-icon@2x.png",
};

const image2Data = {
    socialIcon: "/img/global@2x.png",
    className: "image-4",
};

const image3Data = {
    socialIcon: "/img/moral-icon@2x.png",
};

const x3ThreeObligationsData = {
    imageProps: imageData,
    image2Props: image2Data,
    image3Props: image3Data,
};

const footerData = {
    logo: "/img/logo@2x.png",
};

const indexData = {
    bgImage: "/img/bg-image-@1x.png",
    joinNow: "Join Now",
    text: <>Hope runs from <br />screen to the World</>,
    spanText: "We are here to",
    spanText2: ",",
    spanText3: "TelePossible",
    spanText4: " exists to provide consistent medical aid to developing countries. We establish a nationwide telemedicine governance in collaboration with international and local medical staff, ",
    spanText5: "starting in Laos",
    spanText6: "Providing ",
    spanText7: "consistent",
    spanText8: ", ",
    spanText9: "long-term",
    spanText10: " medical aid to developing countries. Overcome difficulties of providing in-person diagnoses due to Covid-19 and other infectious diseases. Help countries in need of medical aid beginning with Laos and expanding worldwide.",
    learnMore: "Learn More",
    screenShot20211116At12241: "/img/screen-shot-2021-11-16-at-12-24-1@1x.png",
    actions: "ACTIONS",
    title: <>Leading to change <br />begins here</>,
    spanText11: "Our first target population are Laotian citizens in ",
    spanText12: "the Lao People's Democratic Republic",
    spanText13: ". We designated our service to two community centers located in Vientiane, the capital of Laos. These centers are and will continue to be run by Korean missionary leaders who have been residing in the country since pre-COVID 19 times. Kiosks within these cites will provide visiting patients with necessary equipment for full access to our platform.",
    donationGoals: "DONATION GOALS",
    text10: <>We need your help <br />to make this happen</>,
    donation: "Donation",
    text6: "How can I get involved TelePossible and help others?",
    text5: "Unlike a face-to-face medical appointment where a doctor can directly check the patient's physical condition and symptoms, remote telemedicine communication only allows doctors to provide diagnosis through indirect measures, such as patient's descriptions of their symptoms, x-ray, blood pressure, and other various data. Therefore, we need doctors who are willing to provide accurate and good-faith diagnoses to patients overseas. By joining TelePossible today, you can bring a brighter future to those in need tomorrow.",
    text4: <>Establish nationwide telemedicine governance in collaboration <br />with international and local medical staff</>,
    text3: <>Overcome difficulties of providi ng in-person diagnoses <br />due to COVID-19 and  other infectious disease</>,
    text2: "Help countries in need of medical aid beginning with Laos and expanding worldwide",
    joinNow2: "JOIN NOW",
    spanText14: <>TelePossible needs <br />doctor</>,
    spanText15: "’",
    spanText16: "s help",
    text8: "We are in the process of recruiting doctors and physicians for our service. Our mission is to provide consistent, long-term medical aid to developing countries. The hope is that the TelePossible can provide a meaningful medical platform that can break the spatial, and language barrier between nations.",
    text7: "A relationship where we care",
    x3ThreeObligationsProps: x3ThreeObligationsData,
    footerProps: footerData,
};

const header2Data = {
    className: "header-1",
};

const footer2Data = {
    logo: "/img/logo-1@2x.png",
    className: "footer-1",
};

const contactData = {
    place: "Contact",
    text17: "We are looking forward to hearing from you",
    callUs: "Call us",
    phone: "+1 - 484 - 743 - 6940",
    address: "333 Logan Ave, State College, PA 16801",
    address2: "Address",
    mailUs: "Mail us",
    text16: "info@telepossible.com",
    headerProps: header2Data,
    footerProps: footer2Data,
};

const header3Data = {
    className: "header-2",
};

const footer3Data = {
    logo: "/img/logo-1@2x.png",
    className: "footer-2",
};

const workData = {
    headerProps: header3Data,
    footerProps: footer3Data,
};

const icon1Data = {
    children: "ABOUT",
};

const header22Data = {
    logoImg: "/img/logo-img@2x.png",
    place: "HOME",
    works: "WORKS",
    place2: "CONTACT",
    icon1Props: icon1Data,
};

const image4Data = {
    socialIcon: "/img/social-icon@2x.png",
};

const image5Data = {
    socialIcon: "/img/global@2x.png",
    className: "image-6",
};

const image6Data = {
    socialIcon: "/img/moral-icon@2x.png",
};

const x3ThreeObligations2Data = {
    className: "three-obligations",
    imageProps: image4Data,
    image2Props: image5Data,
    image3Props: image6Data,
};

const footer4Data = {
    logo: "/img/logo@2x.png",
    className: "footer-3",
};

const aboutData = {
    x1: "/img/-----------1@1x.png",
    text30: "Novel Way to Connect Paitents",
    text29: "Starting from Laos to multiple nations medical in need, we are putting our best effort to expand the accessibility to the medical service line and construct untact medical governance beyond the borderlines and nationalities.",
    name: "Hope runs screen to the world",
    coreValues: "Core Values",
    whatWePursue: "What we pursue",
    text28: <>Equality, A brand that provides equal service across borders<br />Connection, A brand that connects everyone in need<br />Dependability, A reliable brand with confidence</>,
    since: "SINCE",
    number: "2021",
    text23: "To achieve such a goal, Tele’P has been onboarding with currently fast-developing un-tact technologies to provide better services from the medical volunteers and for the more patients in need.",
    ourVision: "Our Vision",
    text24: "Tele’P has a mission to activate intact medical voluntary works through empathy and sympathy in a global society. The vision is to provide and improve the world’s medical environments by offering accessible and comfortable medical services for people in need.",
    spanText: "Providing ",
    spanText2: "consistent, long-term medical aid",
    spanText3: " to developing countries.Overcome difficulties of providing in-person diagnoses due to COVID-19 andother infectious diseases. Help countries in need of medical aid beginning ",
    spanText4: "with Laos and expandingworldwide",
    spanText5: ".",
    aboutUs: "About Us",
    text26: "Help is Our Main Goal",
    text27: "Tele’P is a non-profit virtual medical voluntary organization in Pennsylvania. Tele’P was established with the purpose of “guaranteeing the fairness and accessibility of medical service for all.”",
    text22: <>Borderless <br />limitless <br />and costless</>,
    ourServices: "Our Services",
    telepImmediatelyProvidesComplexInfo: "/img/tele-p-immediately-provides-complex-information-on-the-designate@1x.png",
    telepProvidesAnOnlineVirtualMeeting: "/img/tele-p-provides-an-online-virtual-meeting-service-through-a-mobi@1x.png",
    basedOnTheChecklistTheOfficerManage: "/img/based-on-the-checklist--the-officer-manager-of-tele-p-considers-@1x.png",
    evenWhenTheVirtualDiagnosisIsOverTh: "/img/even-when-the-virtual-diagnosis-is-over--the-service-continues-t@1x.png",
    contributors: "CONTRIBUTORS",
    text20: "Doctors with TelePossible",
    familyMedicine: "Family Medicine",
    surname: "Young Sil Kim",
    screenShot20211115At6361: "/img/screen-shot-2021-11-15-at-6-36-1@2x.png",
    kuyChaeYim: "Kuy Chae Yim",
    entClinic: "ENT Clinic",
    toBeUpdated: "To Be Updated",
    tbd: "TBD",
    header2Props: header22Data,
    x3ThreeObligationsProps: x3ThreeObligations2Data,
    footerProps: footer4Data,
};

