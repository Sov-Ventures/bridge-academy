import React from "react";

export default function FlashBar() {
  return (
    <center style={{ display: "none" }} id="flash-bar">
      <span role="img" aria-label="icon">
        🏆
      </span>{" "}
      The Build Challenge is live!{" "}
      <a
        style={{ fontWeight: "bold", color: "white" }}
        href="/build"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join now&#187;
      </a>
    </center>
  );
}
