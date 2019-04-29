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
import TracksMatrix from "../components/tracks-matrix";
import { Link } from "gatsby";


import { faqData, processData } from "../api/data";

export default function Apply() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Apply to Join Our Talent Network">     
      <Hero 
        headline="Turn your passion project into your next career"
        firstDesc="Learn new skills along-side like-minded technologists and access our network of global tech startups for mentorship and career opportunities. All of our programs are 100% project-based, because we think that's the best way to pick up new skills."
      >
     
      <PrimaryButton to="#plan-comparison">
          Choose your path
      </PrimaryButton>
      <p>
        <Link to="/tracks">See All Tracks.</Link>
      </p>
      </Hero>




      <ApplicationProcess
        headline="How to join"
        desc="Our simple three step process."
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

      <ReadyTo headline="Interested in becoming a technology partner?">
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
