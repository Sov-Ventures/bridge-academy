import React, { Fragment } from "react";
import Alumni from "../components/alumni";
import PrimaryButton from "../components/button";
import ApplicationProcess from "../components/application-process";
import FAQ from "../components/faq";
import FlashBar from "../components/flash-bar";
import HiringPartners from "../components/hiring-partners";
import HomeHero from "../components/home-hero";
import Investors from "../components/investors";
import Layout from "../components/layout";
import Mentors from "../components/mentors";
import Tweets from "../components/tweets";

import { faqData, processData } from "../api/data";

export default () => (
  <Fragment>
    <FlashBar />
    <Layout seoTitle="Frontier-Tech Focused Talent Accelerator">
      <HomeHero />
      <ApplicationProcess
        headline="Application Process"
        desc="Our three step process to joining."
        data={processData}
      />
      <HiringPartners
        headline="Featured Hiring Partners"
        desc="Our hiring partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={3}
      >
        <PrimaryButton to="/partners">Learn More</PrimaryButton>
      </HiringPartners>
      <Mentors
        desc={`Our team of mentors host office hours, review your final project ideas
          and give you detailed and personalized feedback throughout the
          program.`}
      />

      <FAQ data={faqData} />

      <Alumni />

      <Investors />
    

    </Layout>
  </Fragment>
);
