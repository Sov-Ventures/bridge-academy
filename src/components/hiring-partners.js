import React from "react";
import dharma from "../img/home/dharma.png";
import blockstack from "../img/home/blockstack.png";
import hyrdogen from "../img/home/hyrdogen.svg";

export default function HiringPartners() {
  return (
    <section id="explore-communities">
      <div id="partners" className="container">
        <h2 className="section-header">
          <big>
            <span style={{ textAlign: "center" }}>
              Featured Hiring Partners
            </span>
          </big>
        </h2>
        <p className="description">
          Our hiring partners provide training materials, beta developer tools
          and access to real problems &amp; projects.
        </p>
        <div className="communities-container row">
          <div className="col-md-4">
            <div className="community-item card">
              <div
                className="card-img-top"
                style={{ backgroundColor: "#F3764B" }}
              >
                <img src={dharma} alt="Dharma" />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Dharma is a generic, permissionless protocol for issuing,
                  underwriting, and administering debt instruments.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="community-item card">
              <div
                className="card-img-top"
                style={{ backgroundColor: "#290f34" }}
              >
                <img src={blockstack} alt="Blockstack" />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Blockstack is a new digital ecosystem that users, not big
                  Internet companies, control and users can move seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="community-item card">
              <div
                className="card-img-top"
                style={{ backgroundColor: "#096ff0" }}
              >
                <img src={hyrdogen} alt="Hyrdrogen" />
              </div>
              <div className="card-body">
                <p className="card-text">
                  The Hydrogen Atom platform has powerful modules built for
                  fintech powered by light, modular, global REST APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3>Interested in becoming a hiring partner?</h3>
        <center>
          <p>
            <br />
            <a className="btn btn-primary" href="/partners">
              Learn more
            </a>
          </p>
        </center>
        <br /> <br />
      </div>
    </section>
  );
}
