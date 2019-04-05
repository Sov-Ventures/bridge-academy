import React from "react";

import ApplicationProcess from "../../components/application-process";
import TracksHow from "../../components/tracks-how";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ReadyTo from "../../components/readyTo";
import FAQ from "../../components/faq";
import HiringPartners from "../../components/hiring-partners";
import PrimaryButton from "../../components/button";
import Mentors from "../../components/mentors";

export default function BlockChain() {
  return (
    <Layout>
      <Hero
        className="grey"
        headline="Blockchain Engineer (Career Track)"
        subHeadline="$0 Up-front. Part-time: 10-15hrs /week."
        firstDesc="Your bridge into a Silicon-valley tech career working remotely as a Blockchain Developer, dApp Developer + more."
        secondDesc="Learn: Smart Contracts & dApp development + more alongside top industry mentors."
      >
        <PrimaryButton to="https://apply.bridge.academy/b/rvd2ba/view">
          Apply Now
        </PrimaryButton>
      </Hero>
      <TracksHow />
      <ApplicationProcess
        headline="Application Process"
        desc="Our three step process to joining."
        data={processData}
      />
      <HiringPartners
        headline="Featured Technology Partners"
        desc="Our hiring partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={3}
      />
      <ReadyTo headline="Interested in becoming a technology partner?">
        <PrimaryButton to="https://goo.gl/forms/qtScXtCY68S21tQc2">
          Contact Us
        </PrimaryButton>
      </ReadyTo>
      <Mentors />
      <FAQ data={faqData} />

      <section id="referrals">
        <div className="container">
          <h2 className="section-header">
            <big>
              <br />
              <span style={{ textAlign: "center" }}>Ready to apply?</span>
            </big>
          </h2>

          <p className="description">Fill out our quick online application.</p>

          <PrimaryButton to="https://apply.bridge.academy/b/rvd2ba/view">
            Apply now
          </PrimaryButton>

          <p>
            <br />
          </p>
          <br />
          <br />
        </div>
      </section>
    </Layout>
  );
}

const processData = [
  {
    headline: "Online Application",
    desc:
      "Complete a 10-15 minute application covering your background, goals, and experience.",
  },
  {
    headline: "Fit Interview",
    desc:
      "A short IM interview to assess your fit for our program, after which we'll send you a customized program plan based on your goals.",
  },
  {
    headline: "Accept & Start",
    desc:
      "If accepted, we'll send you an offer. Select a payment plan, or choose from one of our many financing options.",
  },
];

const faqData = [
  {
    question: "Is Bridge a Coding Bootcamp?",
    answer:
      "No. Our program is built for experienced developers, looking to gain new skills and uplevel their careers.",
  },
  {
    question: "How long does the program last?",
    answer:
      "Our default part-time program lasts for 3 months, 10-15hrs per week. The full-time program lasts for twelve weeks and is a 50-60hrs per week commitment.",
  },
  {
    question: "Why is there a deposit required?",
    answer:
      "Once you are accepted we ask for a $100 USD deposit to secure your spot. Your deposit will be refunded after you complete the first program phase.",
  },
  {
    question: "How much do I pay in total?",
    answer:
      "You will never pay more than the total $19,000 USD cap. Payments are made month by month as a % of your salary, only if you are making above a certain amount.",
  },
  {
    question: "Can I see an example ISA?",
    answer:
      "Yes, you can see a template we use here. ISAs are not a loan so they have no interest and are paid back over time.",
  },
  {
    question: "How do I know if i'm qualified to join?",
    answer:
      "Please read the specific track requirements before applying. Most candidates have at least 2+ years of programming experience w/ general web or mobile development.",
  },
  {
    question: "Can I enroll from anywhere?",
    answer:
      "As long as you have a reliable internet connection to join in on weekly office hours calls with your mentor.",
  },
  {
    question: "Can I participate while employed?",
    answer:
      "Sure! Many of our applicants manage to balance full-time jobs as well as our program.",
  },
  {
    question: "I’d like to start my own company. Should I apply?",
    answer:
      "It depends, but if your primary interest is starting a company, you should apply to Y Combinator.",
  },
  {
    question: "How many Bridge applicants come from outside the U.S?",
    answer:
      "Over 80% of Bridge applicants come from outside the U.S. We strongly encourage International applicants to apply.",
  },
];
