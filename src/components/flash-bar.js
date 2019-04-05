import React from "react";

export default function FlashBar() {
  return (
    <center style="display:none;" id="flash-bar">
      <span role="img" aria-label="icon">
        🏆
      </span>{" "}
      The April Tournament is live!{" "}
      <a
        style={{ fontWeight: "bold", color: "white" }}
        href="/tournament"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join the tournament&#187;
      </a>
    </center>
  );
}
