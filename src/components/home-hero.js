import React, { Component } from "react";
import Typed from "typed.js";
import { Link } from "gatsby";
import splash from "../img/home/splash.png";

class HomeHero extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "Break into Blockchain",
        "Break into Full-stack",
        "Break into Remote Work",
      ],
      typeSpeed: 50,
      startDelay: 120,
      backSpeed: 30,
      backDelay: 200,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <section id="homepage" className="hero">
        <div className="container">
          <div id="home-tagline" className="bridge">
            <h1>
              <span
                id="typed"
                ref={el => {
                  this.el = el;
                }}
              />
            </h1>

            <p style={{ marginBottom: "0" }}>
              Bridge is a globally distributed training &amp; talent network focused on frontier technologies.
            </p>

            <p style={{ marginBottom: "0" }}>
              <strong>Our program:</strong> A project-based curriculum,
             1:1 mentorship &amp; peer-to-peer learning.
            </p>

            <p style={{ marginBottom: "0" }}>
              <strong>Our philosophy:</strong> We believe people learn best when
              pursuing their own interests.
            </p>

            <p style={{ marginBottom: "0" }}>
              <strong>Our mission:</strong> Enabling equal access to
              opportunity.&nbsp;
              <a
                href="https://medium.com/the-spectrum/%C6%80uilding-a-%C6%80ridge-to-the-%C6%80lockchain-economy-c1a25fd119bd"
                target="_blank"
                rel="noopener noreferrer"
              >
                More &#187;
              </a>
            </p>

            <div
              className="dropdown"
              style={{
                width: "100%",
                margin: "2em 0 0 0",
                position: "relative",
                display: "inline-block",
              }}
            >
              <button
                onClick={() => (window.location = "/apply")}
                className="btn btn-primary"
                type="button"
                id="dropdownMenuButton"
              >
              Learn more and apply
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

            <p
              style={{ width: "100%", padding: "1em 0", color: "#999" }}
              className="lighter"
            >
              Hiring remotely? <Link to="/partners">Click here</Link>.
            </p>
          </div>

          <div className="mentor">
            <img src={splash} alt="splash" />
          </div>
        </div>
      </section>
    );
  }
}

export default HomeHero;
