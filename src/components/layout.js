import React from "react";

export default function Layout({ children }) {
  return (
    <div id="content" className="container-fluid pub-content">
      <div className="row">{children}</div>
    </div>
  );
}
