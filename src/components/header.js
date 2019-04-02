import React from "react";
import { Link } from "gatsby";

export default () => (
  <header className="navbar navbar-default">
    <nav className="container menu-main-navigation-container">
      <Link to="/" className="logo no-ripple">
        <img
          // src="https://bridge.academy/static/img/logo/logo%403x.png"
          alt="Xpo.Network"
        />
      </Link>

      <ul className="menu-header">
        <li className="menu-item">
          <Link
            to="/#"
            id="dropdownMenuButton1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            TRACKS
          </Link>

          <div
            className="dropdown-menu dropdown-menu-center"
            aria-labelledby="dropdownMenuButton1"
          >
            <ul className="menu-skills">
              <li>
                <span className="dropdown-item-header">Skill Tracks</span>
              </li>

              <li>Javascript </li>

              <li>Python</li>

              <li>Ruby on Rails</li>

              <li>Node.js</li>

              <li>Smart Contracts</li>

              <li>dApp Development</li>
            </ul>

            <ul>
              <li>
                <span className="dropdown-item-header">Career Tracks</span>
              </li>

              <li>
                <Link className="dropdown-item" to="/tracks/fullstack">
                  <strong>
                    Full Stack Engineer <span className="tag">Career</span>
                  </strong>
                </Link>
              </li>

              <li>
                <Link className="dropdown-item" to="/tracks/blockchain">
                  <strong>
                    Blockchain Engineer <span className="tag">Career</span>
                  </strong>
                </Link>
              </li>

              <li>
                Backend Engineer <span className="tag">Coming</span>
              </li>

              <li>
                DevOps Engineer <span className="tag">Coming</span>
              </li>

              <li>
                Data Engineer <span className="tag">Coming</span>
              </li>

              <li>
                AI/ML Engineer <span className="tag">Coming</span>
              </li>
            </ul>
          </div>
        </li>

        <li className="menu-item">
          <Link to="/mentors">MENTORS</Link>
        </li>

        <li className="menu-item">
          <Link to="/partners">HIRING PARTNERS</Link>
        </li>

        <li className="menu-item">
          <Link to="/#faq">FAQ</Link>
        </li>

        <li className="menu-item">
          <Link style={{ color: "#59cbb9" }} to="/apply">
            APPLY
          </Link>
        </li>
      </ul>

      <div className="mobile-nav">
        <div className="menu-btn" id="menu-btn">
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </div>

        <div className="responsive-menu">
          <ul
            id="nav-links"
            className="nav navbar-nav  pull-right collapse navbar-collapse"
          >
            <li className="menu-item">
              <Link to="/mentors">MENTORS</Link>
            </li>

            <li className="menu-item">
              <Link to="/partners">HIRING PARTNERS</Link>
            </li>

            <li className="menu-item">
              <Link to="/faq">FAQ</Link>
            </li>

            <li className="menu-item">
              <Link style={{ color: "#59cbb9" }} to="/apply">
                APPLY
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
