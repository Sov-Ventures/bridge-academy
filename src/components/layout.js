import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

export default function Layout({ children, seoTitle }) {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bridge.Academy - {seoTitle}</title>
        <meta http-equiv="X-UA-Compatible" content="chrome=1" />
        <meta property="og:site_name" content="Bridge.Academy" />
        <meta property="og:title" content={`Bridge.Academy - ${seoTitle}`} />
        <meta name="msvalidate.01" content="17F132F1AE391919166D19B892AB944D" />
      </Helmet>
      <Header />
      <div id="content" className="container-fluid pub-content">
        <div className="row">{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
}
