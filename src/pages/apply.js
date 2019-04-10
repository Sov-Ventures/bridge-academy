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
import { faqData, processData } from "../api/data";

export default function Apply() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Apply to Join Our Talent Network">
      <Hero
        headline="Join World Class Tech Startups"
        firstDesc="Join world class distributed engineering teams at tech startups in Silicon Valley & Europe working on large-scale web, blockchain and mobile platforms."
        secondDesc="Create your profile to connect with top companies, apply for training and receive job offers."
        caveat="One application. Dozens of companies excited to hire remote talent."
      >
        <PrimaryButton to="https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview">
          Create a free profile
        </PrimaryButton>
        <caveat></caveat>
      </Hero>
      <ApplicationProcess
        headline="How it works"
        desc="Our simple three step process."
        data={processData}
      />
      <HiringPartners
        headline="Featured Technology Partners"
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
        <PrimaryButton to="https://blockchain.bridge.academy/b/zjvgu7/view">
          Apply Now
        </PrimaryButton>
      </ReadyTo>
    </Layout>
  </Fragment>

  );
}
