import React from "react";
import { Link } from "gatsby";
import { Link as AnimatedLink } from "react-scroll";

import $ from "jquery";

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
                    <span className="dropdown-item-header">Tech "Explorer" Tracks</span>
              </li>

              <li>
                    dApp Development <span className="tag">(Coming)</span>
              </li>
   
              <li>
                    Serverless Development <span className="tag">(Coming)</span>
              </li>

              <li>
                    Low-code/No-code <span className="tag">(Coming)</span>
              </li>

              <li>
                    Machine Learning <span className="tag">(Coming)</span>
              </li>
              
              <li>
                    Unity / Unreal <span className="tag">(Coming)</span>
              </li>

               <li>
                    MEAN Stack  <span className="tag">(Coming)</span>
              </li>

              <li>
                <Link className="dropdown-item" to="/tracks">
                  <strong>
                    <span>See All</span>
                  </strong>
                </Link>
              </li>

            </ul>

            <ul>
              <li>
                <span className="dropdown-item-header">Career "LevelUp" Tracks</span>
              </li>

              <li>
                <Link className="dropdown-item" to="/tracks/fullstack">
                  <strong>
                    Full-Stack Engineering <span className="tag">(Career)</span>
                  </strong>
                </Link>
              </li>

              <li>
                <Link className="dropdown-item" to="/tracks/blockchain">
                  <strong>
                    Blockchain Engineering <span className="tag">(Career)</span>
                  </strong>
                </Link>
              </li>

              <li>
              <Link className="dropdown-item" to="/tracks/fasttrack">
                  <strong>
                    Fasttrack for Senior Devs<span className="tag">(New)</span>
                  </strong>
                </Link>

                </li>

              <li>
                Backend Engineering <span className="tag">(Coming)</span>
              </li>

              <li>
                DevOps Engineering <span className="tag">(Coming)</span>
              </li>

              <li>
                Data Engineering <span className="tag">(Coming)</span>
              </li>

              <li>
                AI/ML Engineering <span className="tag">(Coming)</span>
              </li>
            </ul>
          </div>
        </li>

        <li className="menu-item">
          <Link to="/mentors">MENTORS</Link>
        </li>

        <li className="menu-item">
          <Link to="/partners">PARTNERS</Link>
        </li>

        <li className="menu-item">
              <a href="/tracks">TRACKS</a>
          </li>

         <li className="menu-item">
              <a href="/community">COMMUNITY</a>
          </li>


        <li className="menu-item">
          <AnimatedLink
            to="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            FAQ
          </AnimatedLink>
        </li>

        <li className="menu-item">
          <Link style={{ color: "#59cbb9" }} to="/apply">
           APPLY
          </Link>
        </li>
      </ul>

      <div className="mobile-nav">
        <div className="menu-btn" id="menu-btn" onClick={handleMobileNav}>
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
              <AnimatedLink
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                FAQ
              </AnimatedLink>
            </li>

           <li className="menu-item">
              <a href="/community">COMMUNITY</a>
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

function handleMobileNav() {
  $(".mobile-nav").toggleClass("expand");
  $(".navbar").toggleClass("expanded-nav");
}

function handleMenuItem() {
  let menuItems = document.querySelectorAll(".mobile-nav .menu-item");

  menuItems = Array.from(menuItems);

  menuItems.forEach(item => {
    item.addEventListener("click", function() {
      $(".mobile-nav").toggleClass("expand");
      $(".navbar").toggleClass("expanded-nav");
    });
  });

  console.log(menuItems);
}

setTimeout(() => {
  handleMenuItem();
}, 1000);
