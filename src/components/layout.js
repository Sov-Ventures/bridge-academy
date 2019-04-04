import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <div id="content" className="container-fluid pub-content">
        <div className="row">{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
}
