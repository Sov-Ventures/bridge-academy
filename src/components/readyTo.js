import React from "react";

export default function ReadyTo({ headline, children }) {
  return (
    <section>
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
