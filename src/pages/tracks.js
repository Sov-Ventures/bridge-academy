import React, { Fragment } from "react";
import ApplicationProcess from "../components/application-process";
import PrimaryButton from "../components/button";
import HiringPartners from "../components/hiring-partners";
import FlashBar from "../components/flash-bar";
import FAQ from "../components/faq";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Mentors from "../components/mentors";
import Tracks from "../components/tracks";
import TracksMatrix from "../components/tracks-matrix";

import { faqData, processData } from "../api/data";

export default function TracksPage() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Bridge Career Tracks">     
      <Hero 
        headline="LevelUp Your Tech Career"
        firstDesc="Gain first-hand experience by working on side projects. Work alongside a personal mentor and find a new job."
      >
     

      <Tracks
        endSlice={null}
      />

      </Hero>






      <ApplicationProcess
        headline="How to join"
        desc="Bridge is currently in invite-only beta."
        data={processData}
      />

      <TracksMatrix 
        className="container"
      />

      <HiringPartners
        headline="Featured Technology Partners"
        desc="Our hiring partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={null}
      />

      <ReadyTo headline="Interested in becoming a hiring partner?">
        <PrimaryButton to="https://apply.bridge.academy/b/axv6ye/view">
         Join the Waitlist
        </PrimaryButton>
      </ReadyTo>

      <FAQ data={faqData} />

      <Mentors />

      <ReadyTo headline="Want to become a mentor?">
        <PrimaryButton to="https://apply.bridge.academy/b/zjvgu7/view">
          Apply Now
        </PrimaryButton>
      </ReadyTo>
    </Layout>
  </Fragment>

  );
}