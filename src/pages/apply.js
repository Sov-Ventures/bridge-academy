import React, { Fragment } from "react";
import ApplicationProcess from "../components/application-process";
import PrimaryButton from "../components/button";
import HiringPartners from "../components/hiring-partners";
import FlashBar from "../components/flash-bar";
import FAQ from "../components/faq";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
//import Hero from "../components/hero";
import Mentors from "../components/mentors";
import Tracks from "../components/tracks";
import Matrix from "../components/matrix";

import { faqData, processData } from "../api/data";

export default function Apply() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Apply to Join Our Talent Network">
      <Tracks
        endSlice={null}
      />
      <ApplicationProcess
        headline="How it works"
        desc="Our simple three step process."
        data={processData}
      />

      <Matrix />

      <HiringPartners
        headline="Featured Hiring Partners"
        desc="Our hiring partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={null}
      />

      <ReadyTo headline="Interested in becoming a hiring partner?">
        <PrimaryButton to="https://apply.bridge.academy/b/axv6ye/view">
          Start Hiring Now
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
