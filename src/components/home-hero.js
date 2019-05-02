import React, { Component } from "react";
import { Link } from "gatsby";
import hero from "../img/home/hero.png";

class HomeHero extends Component {

  render() {
    return (
      <section id="homepage" className="hero">
        <div className="container">

          <div className="blocks">

          <img id="bridge-icon" src={hero} alt="hero" />

          <div className="bridge-blocks">


            <h1 id="bridge-headline">
             <strong>Bridge</strong> is a global community of technology enthusiasts, <a href="/#alumni">builders</a>, <a href="/mentors">mentors</a> & <a href="/partners">organizations</a> who's mission is to accelerate technological progress.
            </h1>

          <div id="block-learn" className="block">
            <h3><a href="/learn">Learn → </a></h3>
            <h4>Curious to explore a new tool or technology?</h4>
          </div>

          <div id="block-build" className="block">
            <h3><a href="/build">Build → </a></h3>
            <h4>Ready to start building your own projects?</h4>
          </div>

          <div id="block-earn" className="block">
            <h3><a href="/earn">Earn → </a></h3>
            <h4>Got the skills? Now it’s time to pay the bills.</h4>
          </div>


          </div>

  

          </div>


        </div>
      </section>
    );
  }
}

export default HomeHero;
