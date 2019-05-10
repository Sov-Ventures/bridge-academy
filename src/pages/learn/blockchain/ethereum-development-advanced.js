import React, { Fragment } from "react";

import ApplicationProcess from "../../../components/application-process";
import CoursesHow from "../../../components/courses-how";
import CourseCurriculum from "../../../components/course-curriculum";
import Layout from "../../../components/layout";
import Hero from "../../../components/hero";
import ReadyTo from "../../../components/readyTo";
import FAQ from "../../../components/faq";
import FlashBar from "../../../components/flash-bar";
import HiringPartners from "../../../components/hiring-partners";
import PrimaryButton from "../../../components/button";
import Mentors from "../../../components/mentors";

import { faqData, processData } from "../../../api/data";

export default function ShowCourse() {
  return (
  <Fragment>
   <FlashBar />
    <Layout seoTitle="Advanced Ethereum Development">
      <Hero
        className="inner"
        headline="Advanced Ethereum Development"
        subHeadline="Level: Intermediate/Advanced"
        firstDesc="In this program, you'll work with the Ethereum protocol, build projects for real-world application, and gain the essential skills for a future career in this dynamic space."
        secondDesc="<ul><li><strong>Time:</strong>~12 weeks @ 10hrs /week</li><li><strong>Build:</strong> (3) Mini-projects incl: Create a Token, Domain Marketplace + more.</li><li><strong>Learn:</strong> Web3.js, Swarm, Zeppelin + more.</li><li><strong>Deposit:</strong> $1,499 (or $125/mo for 12-months).</li></ul>"
      >
        <PrimaryButton className="btn btn-primary"to="https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview">
          Join Now
        </PrimaryButton>
      </Hero>

      <CourseCurriculum
        headline='Course Overview'
        curriculum={curriculum}
       />

      <CoursesHow
        headline="The Bridge Advantage"
        firstDesc="Learn the tech skills required to advance your career."
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

      <FAQ data={faqData} />

   
      <Mentors />

    </Layout>
    </Fragment>
  );
}


const curriculum = [
  {
    number: 'Week 1: Intro to Ethereum',
    desc: 'Intro to Ethereum Tutorial: Set up a wallet using MetaMask and fund on the testnet. Challenge: Set up an Etehreum Node.'
  },
  {
    number: 'Week 2: Transactions & Smart Contracts',
    desc: 'Transactions & Smart Contracts Tutorial: Create your first smart contract. Challenge: TBD Placeholder here goes here'
  },
  {
    number: 'Week 3: Sma﻿rt Contract Security & Oracles',
    desc: 'Tutorial: Integrate a stock market Oracle into your smart contract Challenge: Work on Capstone project'
  },
  {
    number: 'Week 4: Sma﻿rt Contract Security & Oracles',
    desc: 'Tutorial: Integrate a stock market Oracle into your smart contract Challenge: Work on Capstone project'
  },
  {
    number: 'Week 5: Ethereum dApps Tutorial',
    desc: 'Create an Auction dApp based on ENS. Challenge: Work on Capstone project'
  },
  {
    number: 'Week 6: Ethereum Virtual Machine, & Consensus',
    desc: 'Tutorial: TBD Challenge: Capstone project'
  },
];
