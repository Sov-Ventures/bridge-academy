import React, { Fragment } from "react";
import PrimaryButton from "../components/button";
import FAQ from "../components/faq";
import FlashBar from "../components/flash-bar";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Mentors from "../components/mentors";
import ReadyTo from "../components/readyTo";

export default function MentorsPage() {
  return (
    <Fragment>
    <FlashBar />
    <Layout seoTitle="Mentorship Info">
      <Hero
        headline={`Becoming a Bridge Mentor`}
        firstDesc={`Take a moment to reflect on your career journey up until this point. Did you have an inspirational teacher, a co-worker or a manager who took you under their wing and showed you the ropes? If so, then becoming a Bridge Mentor could be for you.`}
      >
        <PrimaryButton to="https://apply.bridge.academy/b/zjvgu7/view">
          Apply to become a mentor
        </PrimaryButton>
      </Hero>
      <section id="apply" className="tools">
        <div className="triangle triangle--bottom triangle--gray">
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="2560 0 2560 100 0 100" />
          </svg>
        </div>

        <div className="grey">
          <div>
            <div className="container" id="how-items">
              <div id="faq-items">
                <div className="faq-item">
                  <h5>OVERVIEW</h5>
                  <p>
                    Our mentors are a key part of the Bridge experience for
                    students who are looking for connections to the latest best
                    practices and practioners. Since our program is 100% online,
                    you'll be doing office hours and chats via your preferred
                    method of online communication. We prefer Discord. {" "}
                  </p>
                </div>

                <div className="faq-item">
                  <h5>BENEFITS</h5>
                  <p>1. One free sponsored project of you and your mentee's choosing.</p>
                  <p>
                    2. Access to our Private Discord group of mentors and
                    apprentices.
                  </p>
                  <p>
                    3. A $1k bonus in ETH/BTC paid out when your apprentice gets
                    placed/hired.
                  </p>
                </div>

                <div className="faq-item">
                  <h5>COMMITMENT</h5>
                  <p>
                    1. Weekly check-ins to stay in sync with your apprentice and
                    give feedback to them.{" "}
                  </p>

                  <p>
                    2. Optional: First access to hire your mentee to continue
                    their POC work in 9-month long apprenticeship or full-time
                    role.
                  </p>
                </div>

                <div className="faq-item">
                  <h5>UPCOMING BATCHES</h5>
                  <p>
                    - March 6th
                    <br />
                    <br />- April 6th
                    <br />
                    <br />- May 6th
                    <br />
                    <br />- June 6th
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="triangle triangle--top triangle--gray triangle--rotated">
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
      <Mentors />
      <ReadyTo headline="Ready to become a mentor?">
        <PrimaryButton to="https://apply.bridge.academy/b/zjvgu7/view">
          Apply Now
        </PrimaryButton>
      </ReadyTo>
      <FAQ data={faqData} />
    </Layout>
    </Fragment>
  );
}

const faqData = [
  {
    question: "Is Bridge a Coding Bootcamp?",
    answer:
      "No. Our program is built for software engineers who are looking to gain new skills. In some cases they are right out of school though many have more experience.",
  },
  {
    question: "What kind of mentorship will I be asked to provide?",
    answer:
      "You will be asked to provide a combination of career, best practices and technical advising.",
  },
  {
    question: "How do the communication logistics work?",
    answer:
      "We leave it to you to figure out a schedule that works best for you, wether that's a weekly 1:1 call via Zoom or daily exchanges via Slack.",
  },
  {
    question: "Does the POC project my mentee works on need to be open source?",
    answer:
      "Ideally the project is open source so that the mentee can add it to their profile on Github in order to show to potential employers.",
  },
  {
    question:
      "What if I want to maintain owernship over the code developed for the POC?",
    answer:
      "If you'd like to have your mentee work on an internal product and own the IP, you can extend a paid apprenticeship offer to them and you will be assigned the IP.",
  },

  {
    question: "How does Bridge make money?",
    answer:
      "We make money once our students get hired, students pay back their tuition once they are hired.",
  },
];
