import React, { Fragment } from "react";
import Alumni from "../components/alumni";
import ApplicationProcess from "../components/application-process";
import FAQ from "../components/faq";
import FlashBar from "../components/flash-bar";
import Footer from "../components/footer";
import Header from "../components/header";
import HiringPartners from "../components/hiring-partners";
import HomeHero from "../components/home-hero";
import Investors from "../components/investors";
import Mentors from "../components/mentors";

export default () => (
  <Fragment>
    <FlashBar />
    <div id="content" className="container-fluid pub-content">
      <div className="row">
        <Header />
        <HomeHero />
        <ApplicationProcess />
        <HiringPartners />
        <Mentors />
        <FAQ />
        <Alumni />
        <br />
        <br />
        <Investors />
      </div>
    </div>
    <Footer />
  </Fragment>
);
