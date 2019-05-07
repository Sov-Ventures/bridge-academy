import React, { Fragment } from "react";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
import FlashBar from "../components/flash-bar";
import Tweets from "../components/tweets";
import Hero from "../components/hero";
import { Link } from "gatsby";


export default function Community() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Bridge Community">
      <Hero 
        className="inner"
        headline="Our Community"
        firstDesc="The Bridge community is a passionate group of developers, mentors and technology enthusiasts."
      
      >

          <div
              className="dropdown"
              style={{
                width: "100%",
                position: "relative",
                display: "inline-block",
              }}
            >
              <button
                onClick={() => (window.location = "https://apply.bridge.academy/register")}
                className="btn btn-primary"
                type="button"
                id="dropdownMenuButton"
              >
              Join our community
              </button>


              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/blockchain-pt">
                  <strong> Blockchain Development</strong>
                  <br />
                  (P/t, Online, 15hrs/week)
                </Link>

                <Link className="dropdown-item" to="/blockchain-ft">
                  <strong>Blockchain Development</strong>
                  <br />
                  (F/t, Online, 50hrs/week)
                </Link>

                <Link className="dropdown-item" to="/fullstack-ft">
                  <strong>Full-stack Web Development</strong>
                  <br />
                  (F/t, Online, 50hrs/week)
                </Link>
              </div>
            </div>
      </Hero>

      <Tweets 
        endSlice={null}
      />
    </Layout>
    </Fragment>
  );
}
