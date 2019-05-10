import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="col-xs-12 grey" id="footer">
      <div className="container">
        <div className="row">

            <ul style={{ float: "left" }}>
              <li>COMPANY</li>

              <li className="menu-item">
                <a href="/manifesto">MISSION</a>
              </li>

              <li className="menu-item">
                <a href="https://prism.io/#team">TEAM</a>
              </li>


              <li className="menu-item">
                <a href="/fund">FUND</a>
              </li>

              <li
                style={{ marginTop: "4.5em" }}
                id="menu-item-17"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17"
              >
                © 2019 <br />
                <a href="https://prism.io">Prism Labs</a>
              </li>
            </ul>

   


      <ul style={{ float: "left" }}>

              <li className="menu-item">DEVELOPERS</li>
       
              <li className="menu-item">
                <Link to="/mentors">LEARN</Link>
              </li>

              <li className="menu-item">
                <Link to="/partners">BUILD</Link>
              </li>


              <li className="menu-item">
                <Link to="/earn">EARN</Link>
              </li>
            </ul>


      <ul style={{ float: "left" }}>

              <li className="menu-item">PARTNERS</li>

            <li className="menu-item">
              <a href="/mentors">MENTORS</a>
              </li>
            <li className="menu-item">
              <a href="/partners">EMPLOYERS</a>
              </li>

            </ul>



          <section className="social-links col-md-5 col-xs-12 col-xs-pull col-xs-pull-left">
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

             <a
              href="https://discord.gg/FRevr2N"
              target="_blank"
              rel="noopener noreferrer"
              >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord icon</title><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path></svg>
            </a>


             <a
              href="https://forum.bridge.academy/"
              target="_blank"
              rel="noopener noreferrer"
              >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discourse icon</title><path d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563c-2.593-.003-4.996 1.352-6.337 3.57-1.33 2.208-1.387 4.957-.148 7.22L4.4 19.61l4.794-1.074c2.745 1.225 5.965.676 8.136-1.39 2.17-2.054 2.86-5.228 1.737-7.997-1.135-2.778-3.84-4.59-6.84-4.585h-.008z"></path></svg>
        
            </a>

          </section>
        </div>
      </div>
    </footer>
  );
}
