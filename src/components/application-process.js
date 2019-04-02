import React from "react";

export default function ApplicationProcess() {
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
              <span style={{ textAlign: "center" }}>Application Process</span>
            </big>
          </h2>
          <div className="container" id="how-items">
            <p className="description" align="center">
              Our three step process to joining.
            </p>

            <div id="how-item-1" className="how-item">
              <h3>
                <b>Online Application</b>
              </h3>
              <div className="progress">
                <div className="progress-bar" style={{ width: "33%" }} />
              </div>
              <p>
                Complete a 10-15 minute application covering your background,
                goals, and experience.{" "}
              </p>
            </div>
            <div id="how-item-2" className="how-item">
              <h3>
                <b>Fit Interview</b>
              </h3>
              <div className="progress">
                <div className="progress-bar" style={{ width: "66%" }} />
              </div>
              <p>
                A short IM interview to assess your fit for our program, after
                which we'll send you a customized program plan based on your
                goals.
              </p>
            </div>
            <div id="how-item-3" className="how-item">
              <h3>
                <b>Accept &amp; Start</b>
              </h3>
              <div className="progress">
                <div className="progress-bar" style={{ width: "100%" }} />
              </div>
              <p>
                If accepted, we'll send you an offer. Select a payment plan, or
                choose from one of our many financing options.
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
