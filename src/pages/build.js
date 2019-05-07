import React, { Fragment } from "react";
import Layout from "../components/layout";
import PrimaryButton from "../components/button";
import Mentors from "../components/mentors";
import FlashBar from "../components/flash-bar";
import FAQ from "../components/faq";
import ReadyTo from "../components/readyTo";
import ContestHero from "../components/contest-hero";
import ContestHow from "../components/contest-how";
import ContestTracks from "../components/contest-tracks";

import { contestFAQData } from "../api/data";

export default function Build() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Build Challenge">
      <ContestHero />
      <ContestHow />
      <ContestTracks 
        headline='Tracks'
      />
      <Mentors />
      <FAQ data={contestFAQData} />
      <ReadyTo headline="Ready to join?">
        <PrimaryButton className="btn btn-primary"  to="https://apply.bridge.academy/b/lxshok/view">
          Apply now
        </PrimaryButton>
      </ReadyTo>
    </Layout>
    </Fragment>
  );
}
