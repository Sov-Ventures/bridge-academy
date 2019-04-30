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
        headline="Tech Explorer &amp; Career Tracks"
        firstDesc="Gain hands-on experience learning bleeding edge tools & tech alongside our community through one of our tech explorer tracks.  Looking for a new job? Work with a personal mentor to develop your tech &amp; professional skills to land your next opportunity via our career 'levelup' program."
      >

        <PrimaryButton to="#tech-tracks">
          See Explorer Tracks
        </PrimaryButton>
      <p>
        <Link to="/tracks#career-tracks">See Career Tracks.</Link>
      </p>

      </Hero>

      <section><br /><br /><br /></section>


     <TechTracks
        headline="Tech 'Explorer' Tracks"
        desc="Take part-time and go at your own pace. Most participants finish in ~3 months. <br />Each Track has Beginner, Intermediate & Advanced Sub-Tracks."
        category="tech"
        endSlice={null}
      />

      <section><br /><br /><br /></section>


      <CareerTracks
        headline="Career 'LevelUp' Tracks"
        desc="Part-time in 6 months @ 20hrs/week. Full-time in 3 months @ 40hrs/week."
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
