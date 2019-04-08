import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="col-xs-12 grey" id="footer">
      <div className="container">
        <div className="row">
          <section className="col-md-6">
            <ul>
              <li>About Bridge</li>

              <li className="menu-item">
                <Link to="/apply">APPLY</Link>
              </li>

              <li className="menu-item">
                <Link to="/mentors">MENTORS</Link>
              </li>

              <li className="menu-item">
                <Link to="/partners">PARTNERS</Link>
              </li>

              <li
                style={{ marginTop: "4.5em" }}
                id="menu-item-17"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17"
              >
                Copyright © 2019 <br />
                <a href="https://prism.io">Prism Labs</a>, Inc.
              </li>
            </ul>

            <ul>
              <li className="menu-item">Products</li>
              <li className="menu-item">
                <a href="https://xpo.network">Xpo.Network</a>
              </li>
              <li className="menu-item">
                <a href="https://bridge.academy">Bridge.Academy</a>
              </li>
            </ul>
          </section>

          <section className="social-links col-md-6 col-xs-pull">
            <h3>Follow along</h3>

            <a
              href="https://twitter.com/join_bridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-labelledby="simpleicons-twitter-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="simpleicons-twitter-icon">Twitter icon</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="https://medium.com/the-spectrum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-labelledby="simpleicons-medium-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="simpleicons-medium-icon">Medium icon</title>
                <path d="M2.846 6.36c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.5c-.034.204.048.41.213.537l1.87 1.837v.403h-9.41v-.403l1.937-1.882c.19-.19.19-.246.19-.538V7.794l-5.39 13.688h-.727L4.278 7.794v9.174c-.052.386.076.774.347 1.053l2.52 3.06v.402H0v-.403l2.52-3.06c.27-.278.39-.67.326-1.052V6.36z" />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}
