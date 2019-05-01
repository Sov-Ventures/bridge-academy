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
            LEARN
          </Link>

          <div
            className="dropdown-menu dropdown-menu-center"
            aria-labelledby="dropdownMenuButton1"
          >
            <ul className="menu-skills">
              
              <li>
                    <span className="dropdown-item-header">Techologies</span>
              </li>

              <li>
                  <Link className="dropdown-item" to="/learn#tech-tracks">
                    <strong>
                      Blockchain &amp; dApp Development <span className="tag"></span>
                      </strong>
                  </Link>
              </li>
   
              <li>
                <Link className="dropdown-item" to="/learn#tech-tracks">
                  <strong>
                    Full Stack Web Development <span className="tag"></span>
                    </strong>
                  </Link>              
              </li>

              <li>
                <Link className="dropdown-item" to="/learn#tech-tracks">
                    <strong>
                      AI &amp; Machine Learning <span className="tag"></span>
                    </strong>
                  </Link>              
              </li>

              <li>
                 <Link className="dropdown-item" to="/learn#tech-tracks">
                   <strong>
                      Data Science <span className="tag">(NEW)</span>
                    </strong>
                  </Link>
              </li>
              
     

               <li>
                <Link className="dropdown-item" to="/learn">
                   <strong>
                      Low/No-Code Apps <span className="tag">(NEW)</span>
                    </strong>
                  </Link>              
                </li>

              <li>
                <Link className="dropdown-item" to="/learn#tech-tracks">
                  <strong>
                    <span>See All (5)</span>
                  </strong>
                </Link>
              </li>

            </ul>

  
          </div>
        </li>


        <li className="menu-item">
          <Link to="/build">
           BUILD
          </Link>    
        </li>


         <li className="menu-item">
          <a href="https://jobs.bridge.academy">
           EARN
          </a>    
        </li>

      <li className="menu-item">              

          <a href="/community">COMMUNITY</a>

        </li>


        <li className="menu-item">
          <a className="primary" href="https://apply.bridge.academy/register?next=https://bridge.academy/apply">
           JOIN
          </a>
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
          <Link to="/learn">
           LEARN
          </Link>    
        </li>


          <li className="menu-item">
          <Link to="/build">
           BUILD
          </Link>    
        </li>


         <li className="menu-item">
          <a href="https://jobs.bridge.academy">
           EARN
          </a>    
        </li>

      <li className="menu-item">              

          <a href="/community">COMMUNITY</a>

        </li>


        <li className="menu-item">
          <a className="primary" href="https://apply.bridge.academy/register?next=https://bridge.academy/apply">
           JOIN
          </a>
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
