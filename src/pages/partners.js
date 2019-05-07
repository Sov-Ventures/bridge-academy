import React, { Fragment } from "react";
import ApplicationProcess from "../components/application-process";
import PrimaryButton from "../components/button";
import FAQ from "../components/faq";
import FlashBar from "../components/flash-bar";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Mentors from "../components/mentors";
import ReadyTo from "../components/readyTo";
import HiringPartners from "../components/hiring-partners";
import Plans from "../components/plans";
import PlansMatrix from "../components/plans-matrix";

import { partnersFAQData, partnersProcessData } from "../api/data";

export default function PartnersPage() {
  return (
    <Fragment>
    <FlashBar />
    <Layout seoTitle="Bridge for Hiring Partners">
      
      <Hero 
        className="inner"
        headline="Your Bridge to Global Tech Talent"
        firstDesc="Tap into our community of top global technologists and engineers, to help you scale your vision."
      >
      <PrimaryButton className="btn btn-primary" className="btn btn-primary" to="https://apply.bridge.academy/b/axv6ye/view">
          Join the waitlist
        </PrimaryButton>
      </Hero>

  

      {/* 
        <Plans
       
        endSlice={null}
      />
      */}



       <p style={{ display:"none" ,width: "100%", padding: "1em 0"}}>
          We handle payroll, time tracking and upskilling for no cost.
          <br />Optional: Hire your developer in-house for a one-time $15k fee.
        </p>

      <ApplicationProcess
        headline="How it works"
        desc="We make technical team building as simple as pushing a button."
        data={partnersProcessData}
      />

      <section className="container" id="how-items">
        <div id="faq-items">
          <h2 style={{ textAlign: "center" }} className="section-header">
            <big>
              <span>Why use Bridge?</span>
            </big>
          </h2>

          <div className="faq-item">
            <h3>
              <strong>100% Screened &amp; Vetted talent.</strong>
            </h3>
            <p>
              We screen thousands of applicants to join Bridge and accept less than 5% into our
              program. Accepted candidates receive hands-on guidance from our
              mentors who work w/ them so we can verify not just
              their technical skills but also soft-skills &amp; integrity.
            </p>
          </div>

          <div className="faq-item">
            <h3>
              <strong>Save time, Save money.</strong>
            </h3>
            <p>
              Say goodbye to the time stuck of recruiting, screening, code
              interviews, test projects and training &amp; onboarding your new
              developers. Our talent must possess good communicational skills,
              structured thinking, and a readiness to learn.
            </p>
          </div>

          <div className="faq-item">
            <h3>
              <strong>Engineers. Not bootcamp grads.</strong>
            </h3>
            <p>
              The best talent wants to work at the best companies. Developers
              join Bridge because they want to work in global tech teams solving
              hard problems. They look at engineering as their art form and have
              a passion for continuously improving their craft.
            </p>
          </div>

          <div className="faq-item">
            <h3>
              <strong>We make remote, work.</strong>
            </h3>
            <p>
              We know that on-boarding a new remote team member can be tricky,
              which is why Bridge developers are trained on how to be effective
              as remote employees. They are taught how to on-board themselves
              onto teams and will even shift their schedules to timezone match.
            </p>
          </div>
        </div>
      </section>


     <PlansMatrix 
        className="container"
      />


      <ReadyTo headline="Ready to try it out?">
        <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/b/axv6ye/view">
          Join the waitlist
        </PrimaryButton>
      </ReadyTo>

      <FAQ data={partnersFAQData} />

      <HiringPartners
        headline="Featured Technology Partners"
        desc="Our hiring partners range from early-stage to later-stage startups."
      />
      <ReadyTo headline="Interested in becoming a hiring partner?">
        <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/b/axv6ye/view">
          Join the waitlist
        </PrimaryButton>
      </ReadyTo>


    </Layout>
    </Fragment>
  );
}
