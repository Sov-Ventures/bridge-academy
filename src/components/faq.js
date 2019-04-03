import React from "react";
// import { Link } from "gatsby";

export default function FAQ({ data }) {
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
            {data.map(faq => (
              <div key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
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
