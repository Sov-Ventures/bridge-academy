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
import CareerTracks from "../components/career-tracks";
import TechTracks from "../components/tech-tracks";
import TracksMatrix from "../components/tracks-matrix";
import { Link } from "gatsby";

import { faqData, processData } from "../api/data";

export default function TracksPage() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Bridge Career Tracks">     
      <Hero 
        headline="Learn new technologies"
        firstDesc="Take part-time and go at your own pace. Most participants finish in ~3 months. Each Track has Beginner, Intermediate & Advanced Sub-Tracks."

      >
     <TechTracks
        category="tech"
        endSlice={null}
      />

      </Hero>



      <section><br /><br /><br /></section>


      <CareerTracks
        headline="Career 'LevelUp' Tracks"
        desc="Complete our part-time in 6 months @ 20hrs/week. Full-time program completed in 3 months @ 40hrs/week."
        category='career'
        endSlice={null}
      />



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
        desc="Our technology partners provide training materials, beta developer tools and access to real problems & projects."
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
