import React from 'react';
import Layout from "../src/components/Layout";
import NavOne from "../src/components/NavOne";
import Footer from "../src/components/Footer";
import SliderOne from "../src/components/SliderOne";
import EntryArea from "../src/components/EntryArea";
import HiwArea from "../src/components/HiwArea";
import ServiceArea from "../src/components/ServiceArea";
import MixerArea from "../src/components/MixerArea";
import CausesArea from "../src/components/CausesArea";
import ClientsLogo from "../src/components/ClientsLogo";
import HelpingArea from "../src/components/HelpingArea";
import TeamArea from "../src/components/TeamArea";
import CallToAction from "../src/components/CallToAction";
import BlogHome from "../src/components/BlogHome";
import Map from "../src/components/Map";
import CallToActionTwo from "../src/components/CallToActionTwo";

const HomePage = (props) => {
  return (
    <Layout pageTitle="ROSHANI - Light towards life">
      <NavOne />
      <SliderOne />
      <HiwArea />
      <ServiceArea />
      <MixerArea />
      <CausesArea />
      <HelpingArea />
      <TeamArea />
      <CallToAction />
      <CallToActionTwo />
      <Footer />
    </Layout>
  );
};
export default HomePage;
