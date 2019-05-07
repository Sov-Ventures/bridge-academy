import React, { Fragment } from "react";
import ApplicationProcess from "../components/application-process";
import PrimaryButton from "../components/button";
import SecondaryButton from "../components/button";
import FlashBar from "../components/flash-bar";
import FAQ from "../components/faq";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import EarnJobs from "../components/earn-jobs";
import EarnGigs from "../components/earn-gigs";
import EarnBounties from "../components/earn-bounties";

import { Link } from "gatsby";

import { faqData, processData } from "../api/data";

export default function EarnPage() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Earn">     
      <Hero 
        className="inner"
        headline="Find Jobs, Gigs and Bounties"
        firstDesc="Here we showcase selected jobs, gigs and bounties from our network of hiring partners."
        secondDesc="Looking to post your job, gig or bounty? Apply as a <a href='https://apply.bridge.academy/b/axv6ye/view'>hiring partner</a>."
      >
        <PrimaryButton className="btn btn-primary" to="#tech-tracks">Explore Jobs</PrimaryButton>

      </Hero>

     <EarnJobs
        headline="Featured Jobs"
        category="jobs"
        endSlice={null}
      />

      <EarnGigs
        headline="Featured Gigs"
        category="gigs"
        endSlice={null}
      />

      <EarnBounties
        headline="Featured Bounties"
        category="bounties"
        endSlice={null}
      />


    </Layout>
  </Fragment>

  );
}
