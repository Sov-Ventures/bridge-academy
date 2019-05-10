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
    <Layout seoTitle="Intro to Blockstack & Ethereum dApp Development (Beginners)">
      <Hero
        className="inner"
        headline="Blockstack dApp Development"
        subHeadline="Level: Beginner"
        firstDesc="In this program, you'll work with the Blockstack protocol, build projects for real-world application, and gain the essential skills for a future career in this dynamic space."
        secondDesc="<ul><li><strong>Time:</strong>~4 weeks @ 10hrs /week</li><li><strong>Build:</strong> (3) Mini-projects incl: ToDo-list, Animal Kingdom + more.</li><li><strong>Learn:</strong> Blockstack.js, IPFS + more.</li><li><strong>Deposit:</strong> $499 (or $100/mo for 5-months).</li></ul>"
      >
        <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview">
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
    number: 'Week 1: Intro to Blockstack',
    desc: 'Tutorial: Hello Blockstack & To-do List Application Tutorials. Challenge: Add Blockstack auth to a website.'
  },
  {
    number: 'Week 2: Blockstack continued',
    desc: 'Tutorial: Build your own Animal Kingdom. Challenge: Customize your Animal Kingdom and publish it on Netlify.'
  },
  {
    number: 'Week 3: Kickstart your first dApp',
    desc: 'Challenge: Come up with a project idea and start building.'
  },
  {
    number: 'Week 4: Ship your own dApp',
    desc: 'Finnish capstone project and submit to App.co for funding.'
  },
];
