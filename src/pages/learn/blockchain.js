import React, { Fragment } from "react";

import ApplicationProcess from "../../components/application-process";
import TracksHow from "../../components/tracks-how";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ReadyTo from "../../components/readyTo";
import FAQ from "../../components/faq";
import FlashBar from "../../components/flash-bar";
import HiringPartners from "../../components/hiring-partners";
import PrimaryButton from "../../components/button";
import Mentors from "../../components/mentors";

import { faqData, processData } from "../../api/data";

export default function BlockChain() {
  return (
  <Fragment>
   <FlashBar />
    <Layout seoTitle="Blockchain Engineer Career Track">
      <Hero
        className="inner"
        headline="Blockchain (Career Track)"
        subHeadline="Part-time: 10-15hrs /week."
        firstDesc="Your bridge into a Silicon-valley tech career working remotely as a Blockchain Developer, dApp Developer + more."
        secondDesc="Learn: Smart Contracts & dApp development + more alongside top industry mentors."
      >
        <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/b/rvd2ba/view">
          Apply Now
        </PrimaryButton>
      </Hero>
      <TracksHow />
      <ApplicationProcess
        headline="Joining Bridge"
        repaymentcap="19,000"
        desc="Our three step process to joining."
        data={processData}
      />
      <HiringPartners
        headline="Featured Technology Partners"
        desc="Our technology partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={3}
      />
      <ReadyTo headline="Interested in becoming a technology partner?">
        <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/b/axv6ye/view">
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

          <div className="description">Fill out our quick online application.</div>

          <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/b/rvd2ba/view">
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
