import React from "react";
import gaming from "../img/gaming.png";
import social from "../img/social.png";
import productivity from "../img/productivity.png";

export default function ContestHow() {
  return (
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
          <h2 className="section-header">
            <big>
              <span style={{ textAlign: "center" }}>How it works</span>
            </big>
          </h2>
          <div className="container" id="how-items">
            <p
              className="description"
              align="center"
              style={{ textAlign: "center" }}
            >
              Apply with any project which leverages the skills + technologies
              that you'd like to learn and improve on.{" "}
            </p>

            <div id="how-item-1" className="how-item">
              <img
                src={gaming}
                align="center"
                style={{ maxWidth: "75%" }}
                alt="Apply with anything"
              />

              <h2>
                <b>Apply with anything</b>
              </h2>

              <div className="progress">
                <div className="progress-bar" style={{ width: "33%" }} />
              </div>

              <p>
                First signup for an account and fill our our application
                form(s). Past applicants have built niche Social Networks,
                Decentralized Contact Managers, AI News Readers + more. You can
                read more about some of the past projects{" "}
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
            <div id="how-item-2" className="how-item">
              <img
                src={social}
                align="center"
                style={{ maxWidth: "75%" }}
                alt="Share your progress"
              />

              <h2>
                <b>Share your progress</b>
              </h2>

              <div className="progress">
                <div className="progress-bar" style={{ width: "66%" }} />
              </div>

              <p>
                Every week you'll receive feedback and points based on your
                progress. Each month, the top-ranked applicants get accepted to
                join Bridge and scholarships are awarded based on merit.
              </p>
            </div>
            <div id="how-item-3" className="how-item">
              <img
                src={productivity}
                align="center"
                style={{ maxWidth: "75%" }}
                alt="Learn from our mentors"
              />
              <h2>
                <b>Learn from our mentors</b>
              </h2>

              <div className="progress">
                <div className="progress-bar" style={{ width: "100%" }} />
              </div>

              <p>
                Bridge has a diverse network of mentors across different
                disciplines. Mentors both review applications and provide advice
                to Bridge members. After 3 months you'll present your project.
              </p>
            </div>

            <br style={{ clear: "both" }} />
            <br />
          </div>
          <br /> <br /> <br />
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
