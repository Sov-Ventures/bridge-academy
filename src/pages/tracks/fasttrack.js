import React, { Fragment } from "react";

import ApplicationProcess from "../../components/application-process";
import FastTrackHow from "../../components/fasttrack-how";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ReadyTo from "../../components/readyTo";
import FAQ from "../../components/faq";
import FlashBar from "../../components/flash-bar";
import HiringPartners from "../../components/hiring-partners";
import PrimaryButton from "../../components/button";
import Mentors from "../../components/mentors";

import { faqData, processData } from "../../api/data";

export default function FullStack() {
  return (
  <Fragment>
   <FlashBar />
    <Layout seoTitle="FastTrack Your Career">
      <Hero
        className="hero"
        headline="Career FastTrack"
        subHeadline="$0 up-front. "
        firstDesc="Your Bridge into a Silicon-valley tech career working remotely. Only make payments if you are earning at least a 25% higher salary."
        secondDesc="Includes: Interview Prep, Career Coaching/Mentoring & Relevant Intros & Job Referrals."
      >
        <PrimaryButton to="https://apply.bridge.academy/b/rvd2ba/view">
          Apply Now
        </PrimaryButton>
      </Hero>

      <FastTrackHow />

      <ApplicationProcess
        headline="Application Process"
        repaymentcap="9,500"
        desc="Our three step process to joining."
        data={processData}
      />
      <HiringPartners
        headline="Featured Hiring Partners"
        desc="Our hiring partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={3}
      />
      <ReadyTo headline="Interested in becoming a hiring partner?">
        <PrimaryButton to="https://apply.bridge.academy/b/axv6ye/view">
          Contact Us
        </PrimaryButton>
      </ReadyTo>
      <Mentors />
      <FAQ data={faqData} />

      <section id="referrals">
        <div className="container">
          <h2 className="section-header">
            <big>
              <br />
              <span style={{ textAlign: "center" }}>Ready to apply?</span>
            </big>
          </h2>

          <p className="description">Fill out our quick online application.</p>

          <PrimaryButton to="https://apply.bridge.academy/b/rvd2ba/view">
            Apply now
          </PrimaryButton>

          <p>
            <br />
          </p>
          <br />
          <br />
        </div>
      </section>
    </Layout>
    </Fragment>

  );
}