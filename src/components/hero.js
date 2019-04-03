import React from "react";
import PrimaryButton from "./button";

export default function Hero({ headline, firstDesc, secondDesc }) {
  return (
    <section className="hero">
      {headline && (
        <h1>
          <span style={{ textAlign: "center" }}>
            {headline}
            <big style={{ color: "#59cbb9" }}>.</big>
          </span>
        </h1>
      )}

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

      <PrimaryButton to="https://apply.bridge.academy/b/axv6ye/view">
        Apply Now
      </PrimaryButton>
    </section>
  );
}
