import React from "react";
import Layout from "../components/layout";
import PrimaryButton from "../components/button";
import Mentors from "../components/mentors";
import FAQ from "../components/faq";
import ReadyTo from "../components/readyTo";
import ContestHero from "../components/contest-hero";
import ContestHow from "../components/contest-how";
import { contestFAQData } from "../api/data";

export default function Build() {
  return (
    <Layout seoTitle="Build Challenge">
      <ContestHero />
      <ContestHow />
      <Mentors />
      <FAQ data={contestFAQData} />
      <ReadyTo headline="Ready to join?">
        <PrimaryButton to="https://apply.bridge.academy/b/lxshok/view">
          Apply now
        </PrimaryButton>
      </ReadyTo>
    </Layout>
  );
}
