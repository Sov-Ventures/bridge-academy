import React from "react";

import ApplicationProcess from "../../components/application-process";
import TracksHow from "../../components/tracks-how";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ReadyTo from "../../components/readyTo";
import FAQ from "../../components/faq";
import HiringPartners from "../../components/hiring-partners";
import PrimaryButton from "../../components/button";
import Mentors from "../../components/mentors";

import { faqData, processData } from "../../api/data";

export default function FullStack() {
  return (
    <Layout seoTitle="Full-Stack Engineer Career Track">
      <Hero
        className="grey"
        headline="Full Stack Engineer (Career Track)"
        subHeadline="$0 Up-front. Part-time: 10-15hrs /week."
        firstDesc="Your bridge into a Silicon-valley tech career working remotely as a Full-stack Engineer, Principal Product Engineer, Lead Software Engineer, Ruby on Rails Engineer + more."
        secondDesc="Learn: node, react, redux, serverless, typescript, test driven development, mongo, git, graphql, continuous integration + more"
      >
        <PrimaryButton to="https://apply.bridge.academy/b/rvd2ba/view">
          Apply Now
        </PrimaryButton>
      </Hero>
      <TracksHow />
      <ApplicationProcess
        headline="Application Process"
        desc="Our three step process to joining."
        data={processData}
      />
      <HiringPartners
        headline="Featured Technology Partners"
        desc="Our hiring partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={3}
      />
      <ReadyTo headline="Interested in becoming a technology partner?">
        <PrimaryButton to="https://goo.gl/forms/qtScXtCY68S21tQc2">
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
  );
}
