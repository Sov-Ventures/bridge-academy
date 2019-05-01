import React from "react";
import blockchain from "../img/home/blockchain.png";
import fullstack from "../img/home/fullstack.png";
import aiml from "../img/home/aiml.png";
import datascience from "../img/home/datascience.png";
import lowcode from "../img/home/lowcode.png";
import dharma from "../img/home/dharma.png";
import blockstack from "../img/home/blockstack.png";
import hydrogen from "../img/home/hyrdogen.svg";
import near from "../img/home/near_logo.svg";

export default function ContestHero() {
  return (
    <section id="homepage" className="hero contest">
      <div className="container">
        <div id="home-tagline" className="bridge">
          <h1>
            The Bridge Build Challenge
          </h1>

          <h3>Monday May 6th through May 27th.</h3>

          <ul className="list">
            <li>100% online: Join the Bridge Build challenge with your project idea or pick up a sponsored project from the community.</li>
            <li>$50k in prizes available. See <a href="#tracks">details</a>.</li>
            <li> See past winners{" "}
            <a
              href="https://medium.com/the-spectrum/bridge-academy-alpha-cohort-roundup-c7ad524ba69d"
              target="_blank"
              rel="noopener noreferrer"
            >
              here</a>. See <a href="#tracks">sponsors</a>.
              </li>
          </ul>
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



        </div>



        <div className="mentor" style={{ width: "50%", float: "right", textAlign: "left" }}>
         
         <iframe id="laptop-iframe" class="viewer" src="https://framer.cloud/NtohQ/23/index.html?cloud=2" frameborder="0" scrolling="no">
        </iframe>

        </div>
      </div>
    </section>


  );
}




