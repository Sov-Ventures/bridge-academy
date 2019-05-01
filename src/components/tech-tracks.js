import React from "react";
import blockchain from "../img/home/blockchain.png";
import fullstack from "../img/home/fullstack.png";
import aiml from "../img/home/aiml.png";
import datascience from "../img/home/datascience.png";
import lowcode from "../img/home/lowcode.png";


export default function TechTracks({ headline, image, desc, endSlice, category }) {


   return (

    <section id="tech-tracks" class="explore-communities">
      <h2>{headline}</h2>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
      <div id="tracks" className="container">
        <div className="communities-container row">
          {tracks.slice(0, endSlice || tracks.length ).map(track => (
              <div key={track.name} className="container">
              <div className="community-item card">
                <img className="course-img" align="left" src={track.image} alt={track.name} />
                <a style={{float: "right"}} class="btn btn-primary" href={track.link}>Join Now</a>
                <div className="card-body">
                <h4 dangerouslySetInnerHTML={{ __html: track.name }} />
                <div className="card-desc" dangerouslySetInnerHTML={{ __html: track.desc }} />
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>

    </section>
  );
}

const tracks = [
  {
    name: "Blockchain Basics (Beginners)",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Time:</strong> 1 week, 10-15hrs /week</li><li><strong>Learn:</strong> Blockchain fundamentals, Key concepts + more.</li><li><strong>Cost:</strong> FREE</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Blockstack &amp; Ethereum dApp Development (Beginners)",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Time:</strong> 4 weeks, 10-15hrs /week</li><li><strong>Build:</strong> (3) Mini-projects incl: ERC-20 Token, Domain Marketplace + more.</li><li><strong>Learn:</strong> Blockstack.js, Web3.js, Smart Contracts + more.</li><li><strong>Cost:</strong> $499 (or $110/mo for 5-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
    {
    name: "Ethereum Developer Bootcamp (Intermediate)",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Time:</strong> 8 weeks, 10-15hrs /week</li><li><strong>Build:</strong> (6) Mini-projects incl: Security Audit, ENS Registrar + more.</li><li><strong>Learn:</strong> State Channels, Snarks/Starks, Smart Contracts + more.</li><li><strong>Cost:</strong> $999 (or $110/mo for 10-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
    {
    name: "Ethereum Developer Bootcamp (Advanced)",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Time:</strong> 8 weeks, 10-15hrs /week</li><li><strong>Build:</strong> (6) Mini-projects incl: Smart Contract Security, .</li><li><strong>Learn:</strong> State Channels, Snarks/Starks, Smart Contracts + more.</li><li><strong>Cost:</strong> $999 (or $110/mo for 10-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Intro to Full-Stack Web Development (Beginners)",
    image: fullstack,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A Smart-Recipe Website, TODO List or your own personal project in the monthly build challenge.</li><li><strong>Learn:</strong> node, react, redux, mongo, git, graphql, continuous integration and serverless development.</li><li><strong>Cost:</strong> $499 (or $110/mo for 5-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Intro to AI &amp Machine Learning (Beginners)",
    image: aiml,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> An image classifier, prediction api, customer segementation tool or your own personal project in the monthly build challenge.</li><li><strong>Learn:</strong> Supervised Learning, Deep Learning & Unsupervised Learning.</li><li><strong>Cost:</strong> $499 (or $110/mo for 5-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Intro to Data Science (Beginners)",
    image: datascience,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A customer churn predictor, exploratory data analyzer or your own personal project in the monthly build challenge.</li><li><strong>Learn:</strong> NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Tensorflow + more.</li><li><strong>Cost:</strong> $499 (or $110/mo for 5-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Intro to Low/No-Code Track (Beginners)",
    image: lowcode,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A flight comparison website, mobile workforce app or your own personal project in the monthly build challenge.</li><li><strong>Learn:</strong> Airtable, Segment, Zapier, Clay, RapidAPI, Retool, Webflow, Bubble & Glide.</li><li><strong>Cost:</strong> $499 (or $110/mo for 5-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },

];
