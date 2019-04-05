import React from "react";

export default function FlashBar() {
  return (
    <center id="flash-bar">
      <span role="img" aria-label="icon">
        🏆&nbsp;
      </span>
      <a
        style={{ fontWeight: "bold", color: "white" }}
        href="/build"
        rel="noopener noreferrer"
      >
        Join the Build Challenge &#187;
      </a>
    </center>
  );
}
