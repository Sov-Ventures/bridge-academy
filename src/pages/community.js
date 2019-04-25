import React, { Fragment } from "react";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
import FlashBar from "../components/flash-bar";
import Tweets from "../components/tweets";
import Hero from "../components/hero";

export default function Community() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Community Love">
      <Hero 
        headline="Community Love"
        firstDesc="The Bridge community is a passionate group of developers, mentors and technology enthusiasts."
      />
      <Tweets 
        endSlice={null}
      />
    </Layout>
    </Fragment>
  );
}
