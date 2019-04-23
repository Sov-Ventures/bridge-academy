import React, { Fragment } from "react";
import Layout from "../components/layout";
import FlashBar from "../components/flash-bar";
import Tweets from "../components/tweets";

export default function Community() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Community Love">
      <Tweets />
    </Layout>
    </Fragment>
  );
}
