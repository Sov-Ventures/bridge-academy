import React, { Fragment } from "react";

import ApplicationProcess from "../../../components/application-process";
import CoursesHow from "../../../components/courses-how";
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
    <Layout seoTitle="Introduction to Blockchain">
      <Hero
        className="inner"
        headline="Introduction to Blockchain"
        subHeadline="Level: Beginner"
        firstDesc="Demand for blockchain developers is skyrocketing. In this program, you'll work with the Blockstack and Ethereum protocols, build projects for real-world application, and gain the essential skills for a future career in this dynamic space."
        secondDesc="<ul><li><strong>Time:</strong> 1 week, 10-15hrs /week</li><li><strong>Learn:</strong> Blockchain fundamentals, Key concepts + more. <li><strong>Deposit:</strong> $125. <a href='/fund'>Scholarships Available</a>.</li></li></ul>"
      >
        <PrimaryButton to="https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview">
          Join Now
        </PrimaryButton>
      </Hero>

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
        <PrimaryButton to="https://apply.bridge.academy/b/axv6ye/view">
          Contact Us
        </PrimaryButton>
      </ReadyTo>


      <FAQ data={faqData} />
      <Mentors />

   
    </Layout>
    </Fragment>
  );
}
