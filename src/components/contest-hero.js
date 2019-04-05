import React from "react";

export default function ContestHero() {
  return (
    <section id="homepage" className="hero contest">
      <div className="container">
        <div id="home-tagline" className="bridge">
          <h1 style={{ marginTop: "1em !important" }}>
            The Bridge Build Challenge
          </h1>

          <h3>Starting Monday April 8th through April 30th.</h3>

          <p>
            Each month new applicants to join Bridge.Academy participate in a
            build challenge in order to demonstrate their ability to quickly
            pick up new skills through working on a project of your choice.
          </p>

          <p>
            Applicants receive points based on their progress. The more
            impressive your pace of improvement, the higher your score will be
            and better your chances for being accepted to our program.
          </p>

          <p>
            You can read about past challenge winners{" "}
            <a
              href="https://medium.com/the-spectrum/bridge-academy-alpha-cohort-roundup-c7ad524ba69d"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>

        <div className="mentor" style={{ float: "right", textAlign: "left" }}>
          <div className="grey">
            <h3>JOIN THE APRIL CHALLENGE</h3>

            <ul style={{ fontSize: "12px" }}>
              <li>- 1st prize: One $19,000 scholarship</li>
              <li>- 2st prize(s): 2 $8,000 scholarships</li>
              <li>- 3rd prize(s): 4 $4,000 scholarships</li>
            </ul>

            <p>
              <a
                style={{ float: "none" }}
                className="btn btn-primary"
                href="https://apply.bridge.academy/b/lxshok/view"
              >
                Register to join now
              </a>
            </p>

            <p>
              <small>
                Note: Scholarship credit is non-transferable and not redeemable
                for cash or prizes.
              </small>
            </p>

            <br style={{ clear: "both" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
