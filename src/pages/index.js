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
import Layout from "../components/layout";
import Mentors from "../components/mentors";

export default () => (
  <Fragment>
    <FlashBar />
    <Layout>
      <Header />
      <HomeHero />
      <ApplicationProcess />
      <HiringPartners />
      <Mentors
        desc={`Our team of mentors host office hours, review your final project ideas
          and give you detailed and personalized feedback throughout the
          program.`}
      />
      <FAQ />
      <Alumni />
      <br />
      <br />
      <Investors />
    </Layout>
    <Footer />
  </Fragment>
);
