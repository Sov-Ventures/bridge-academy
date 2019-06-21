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
    {/*
    <FlashBar />
  */}
    <Layout seoTitle="Frontier-Tech Focused Talent Accelerator">
      <HomeHero />
      {/*<ApplicationProcess
        headline="How it works"
        desc="Fast-track your personal learning & development by joining our community."
        data={processData}
      />
      
        <HiringPartners
        headline="Featured Technology Partners"
        desc="Our technology partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={3}
      >
        <PrimaryButton to="/partners">Learn More</PrimaryButton>
      </HiringPartners>
      <Mentors
        desc={`Our community of mentors host office hours, review project ideas
          and give you detailed and personalized feedback on your project.`}
      />

      <FAQ data={faqData} />

      <Alumni 
        endSlice={6}
      />


      <Investors />


      <section>
        <h2 class="section-header text-center"><big>Community Love</big></h2>
        <p><a href="/community">See more</a></p>
      </section>

      <Tweets 
        endSlice={3}
      />

      */}


    </Layout>
  </Fragment>
);
