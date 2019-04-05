import React from "react";
import ApplicationProcess from "../components/application-process";
import PrimaryButton from "../components/button";
import HiringPartners from "../components/hiring-partners";
import FAQ from "../components/faq";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Mentors from "../components/mentors";
import { faqData, processData } from "../api/data";

export default function Apply() {
  return (
    <Layout seoTitle="Apply to Join Our Talent Network">
      <Hero
        headline="Work with World Class Tech Startups"
        firstDesc="Join world class distributed engineering teams at tech startups in Silicon Valley & Europe working on large-scale web, blockchain and mobile platforms."
        secondDesc="Create your profile to connect with top companies, get preparation materials, courses and receive job offers."
      >
        <PrimaryButton to="https://apply.bridge.academy/b/rvd2ba/view">
          Sign Up Here to Apply
        </PrimaryButton>
      </Hero>
      <ApplicationProcess
        headline="How it works"
        desc="Our three step process to joining."
        data={processData}
      />
      <HiringPartners
        headline="Featured Technology Partners"
        desc="Our hiring partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={null}
      />

      <ReadyTo headline="Interested in becoming a hiring partner?">
        <PrimaryButton to="https://goo.gl/forms/zG2AxZ4x9hUgnYSm2">
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
  );
}
