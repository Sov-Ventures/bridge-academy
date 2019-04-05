import React from "react";

export default function FlashBar() {
  return (
    <center id="flash-bar">
      <span role="img" aria-label="icon">
        🏆
      </span>{" "}
      The Build Challenge is live!{" "}
      <a
        style={{ fontWeight: "bold", color: "white" }}
        href="/build"
        rel="noopener noreferrer"
      >
        Join now&#187;
      </a>
    </center>
  );
}
