import React, { Fragment } from "react";
import PrimaryButton from "../components/button";
import SecondaryButton from "../components/button";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
import FlashBar from "../components/flash-bar";
import Tweets from "../components/tweets";
import Hero from "../components/hero";
import { Link } from "gatsby";


export default function Community() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Bridge Community">
      <Hero 
        className="inner"
        headline="Our Community"
        firstDesc="The Bridge community is a passionate group of life-long learners including developers, mentors and technology enthusiasts."
      
      >

          <p>
              <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/register">Join our community</PrimaryButton>
              <SecondaryButton className="btn btn-secondary" to="#tweets">Explore community</SecondaryButton>
          </p>

      </Hero>

      <Tweets 
        headline="Community Love"
        endSlice={null}
      >
      <p>
        <PrimaryButton className="btn btn-primary" to="https://twitter.com/join_bridge">Follow on Twitter</PrimaryButton><br /><br />
        <SecondaryButton className="btn btn-secondary" to="https://discord.gg/FRevr2N">Join our Discord</SecondaryButton>
      </p>

      </Tweets>
    </Layout>
    </Fragment>
  );
}
