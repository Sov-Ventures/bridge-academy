import React from "react";
import dharma from "../img/home/dharma.png";
import blockstack from "../img/home/blockstack.png";
import hydrogen from "../img/home/hyrdogen.svg";
import zeppelin from "../img/home/zeppelin.svg";
import opensea from "../img/home/opensea.png";
import terminal from "../img/home/terminal.png";

export default function HiringPartners({ headline, desc, endSlice }) {
  return (
    <section id="explore-communities">
      <div id="partners" className="container">
        <h2 className="section-header">
          <big>
            <span style={{ textAlign: "center" }}>{headline}</span>
          </big>
        </h2>
        <p className="description">{desc}</p>
        <div className="communities-container row">
          {partners.slice(0, endSlice || partners.length).map(partner => (
            <div key={partner.name} className="col-md-4">
              <div className="community-item card">
                <div
                  className="card-img-top"
                  style={{ backgroundColor: partner.color }}
                >
                  <img src={partner.image} alt={partner.name} />
                </div>
                <div className="card-body">
                  <p className="card-text">{partner.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const partners = [
  {
    name: "Dharma",
    image: dharma,
    desc:
      "Dharma is a generic, permissionless protocol for issuing, underwriting, and administering debt instruments.",
    color: "#F3764B",
  },
  {
    name: "Blockstack",
    image: blockstack,
    desc:
      "Blockstack is a new digital ecosystem that users, not big Internet companies, control and users can move seamlessly.",
    color: "#290f34",
  },
  {
    name: "Hydrogen",
    image: hydrogen,
    desc:
      "The Hydrogen Atom platform has powerful modules built for fintech powered by light, modular, global REST APIs.",
    color: "#096ff0",
  },
  {
    name: "Zeppelin",
    image: zeppelin,
    desc:
      "Zeppelin builds key infrastructure for smart contract systems & security audits.",
    color: "#0e3368",
  },
  {
    name: "OpenSea",
    image: opensea,
    desc:
      "The world’s largest marketplace for digital collectibles. Buy, sell, and discover new assets.",
    color: "#fcfcfc",
  },
  {
    name: "Terminal",
    image: terminal,
    desc:
      "Terminal.co is a blockchain focused startup currently in stealth-mode.",
    color: "#000000",
  },
];
