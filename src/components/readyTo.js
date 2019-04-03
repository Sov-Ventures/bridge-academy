import React, { Children } from "react";
// import PrimaryButton from "./button";

export default function ReadyTo({ headline, children }) {
  return (
    <section>
      <br />
      <div>
        <h3>{headline}</h3>

        {children}
      </div>
      <p>
        <br />
      </p>

      <br />
      <br />
    </section>
  );
}
