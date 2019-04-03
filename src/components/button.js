import React from "react";

export default function Buttom({ children, to }) {
  return (
    <p>
      <a
        style={{ display: "inline-block" }}
        className="btn btn-primary"
        href={to}
      >
        {children}
      </a>
    </p>
  );
}
