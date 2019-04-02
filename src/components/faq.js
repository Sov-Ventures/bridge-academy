import React from "react";
import { Link } from "gatsby";

export default function FAQ() {
  return (
    <section id="faq" className="tools">
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
        <div className="container">
          <h2 className="section-header">
            <big>
              <span style={{ textAlign: "center" }}>
                Frequently Asked Questions
              </span>
            </big>
            <br />
            <br />
          </h2>

          <div id="faq-items">
            <div className="faq-item">
              <h3>Is Bridge a Coding Bootcamp?</h3>
              <p>
                No. Our program is built for experienced developers, looking to
                gain new skills and uplevel their careers.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long does the program last?</h3>
              <p>
                Our default part-time program lasts for 3 months, 10-15hrs per
                week. The full-time program lasts for twelve weeks and is a
                50-60hrs per week commitment.
              </p>
            </div>

            <div className="faq-item">
              <h3>Why is there a deposit required?</h3>
              <p>
                Once you are accepted we ask for a $100 USD deposit to secure
                your spot. Your deposit will be refunded after you complete the
                first program phase.
              </p>
            </div>

            <div className="faq-item">
              <h3>How much do I pay in total?</h3>
              <p>
                You will never pay more than the total $19,000 USD cap. Payments
                are made month by month as a % of your salary, only if you are
                making above a certain amount.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I see an example ISA?</h3>
              <p>
                Yes, you can see a template we use{" "}
                <Link to="/candidate-agreement">here</Link>. ISAs are not a loan
                so they have no interest and are paid back over time.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I know if i'm qualified to join? </h3>
              <p>
                Please read the specific track requirements before applying.
                Most candidates have at least 2+ years of programming experience
                w/ general web or mobile development.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I enroll from anywhere? </h3>
              <p>
                As long as you have a reliable internet connection to join in on
                weekly office hours calls with your mentor.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I participate while employed?</h3>
              <p>
                Sure! Many of our applicants manage to balance full-time jobs as
                well as our program.
              </p>
            </div>

            <div className="faq-item">
              <h3>I’d like to start my own company. Should I apply?</h3>
              <p>
                It depends, but if your primary interest is starting a company,
                you should apply to{" "}
                <a href="https://www.ycombinator.com/">Y Combinator</a>.
              </p>
            </div>

            <div className="faq-item">
              <h3>How many Bridge applicants come from outside the U.S?</h3>
              <p>
                Over 80% of Bridge applicants come from outside the U.S. We
                strongly encourage International applicants to apply.
              </p>
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
  );
}
