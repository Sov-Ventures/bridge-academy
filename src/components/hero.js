import React from "react";

export default function Hero({
  children,
  headline,
  subHeadline,
  firstDesc,
  secondDesc,
  className,
}) {
  return (
    <section className="hero">
      <div className={className}>
        {headline && (
          <h1>
            <span style={{ textAlign: "center" }}>
              {headline}
              <big style={{ color: "#59cbb9" }}>.</big>
            </span>
          </h1>
        )}

        {subHeadline && <h3>{subHeadline}</h3>}

        {firstDesc && (
          <p className="description" align="center">
            {firstDesc}
          </p>
        )}

        {secondDesc && (
          <p className="description" align="center">
            {secondDesc}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
