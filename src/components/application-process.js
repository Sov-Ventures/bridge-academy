import React from "react";

export default function ApplicationProcess({ headline, desc, data }) {
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
              <span style={{ textAlign: "center" }}>{headline}</span>
            </big>
          </h2>
          <div className="container" id="how-items">
            <p className="description" align="center">
              {desc}
            </p>

            {data.map(how => (
              <div key={how.headline} className="how-item">
                <h3>
                  <b>{how.headline}</b>
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "33%" }} />
                </div>
                <p>{how.desc}</p>
              </div>
            ))}
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
