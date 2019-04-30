import React from "react";
import blockchain from "../img/home/blockchain.png";
import fullstack from "../img/home/fullstack.png";
import aiml from "../img/home/aiml.png";
import datascience from "../img/home/datascience.png";
import lowcode from "../img/home/lowcode.png";

export default function ContestHero() {
  return (
    <section id="homepage" className="hero contest">
      <div className="container">
        <div id="home-tagline" className="bridge">
          <h1 style={{ marginTop: "1em !important" }}>
            The Bridge Build Challenge
          </h1>

          <h3>Monday May 8th through May 30th.</h3>

          <p>
            Join the Bridge Build challenge with your project idea or pick up a sponsored project from our community.
          </p>
          <p>
            <a  
              className="btn btn-primary"
              href="https://apply.bridge.academy/b/lxshok/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register to join
            </a>
          </p>

          <p>
            See past winners{" "}
            <a
              href="https://medium.com/the-spectrum/bridge-academy-alpha-cohort-roundup-c7ad524ba69d"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>

        <div className="mentor" style={{ width: "50%", float: "right", textAlign: "left" }}>
         
         <iframe id="laptop-iframe" class="viewer" src="https://framer.cloud/NtohQ/23/index.html?cloud=2" frameborder="0" scrolling="no">
        </iframe>

        </div>
      </div>
    </section>


  );
}




