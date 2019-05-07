import React from "react";
import blockchain from "../img/home/blockchain.png";
import fullstack from "../img/home/fullstack.png";
import aiml from "../img/home/aiml.png";
import datascience from "../img/home/datascience.png";
import lowcode from "../img/home/lowcode.png";


export default function TechTracks({ headline, image, desc, endSlice, category, cta, slug }) {


   return (

    <section id="tech-tracks" class="explore-communities">
      <h2>{headline}</h2>
      <p className="description" dangerouslySetInnerHTML={{ __html: desc }} />
      <div id="tracks" className="container">
        <div className="communities-container row">
          {tracks.slice(0, endSlice || tracks.length ).map(track => (
              <div id={track.slug} key={track.name}>
              <div className="community-item card">
                <img className="course-img" align="left" src={track.image} alt={track.name} />
                <a style={{float: "right"}} class="btn btn-primary" href={track.link}>{track.cta}</a>
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
    name: "Intro to Blockchain (Beginners)",
    slug: "intro-to-blockchain",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Time:</strong> 1 week, ~10hrs</li><li><strong>Learn:</strong> Blockchain fundamentals, Key technical & non-technical concepts.</li><li><strong>Deposit:</strong> $125</li></ul>",
    color: "#096ff0",
    cta: "See Details",
    category: 'tech',
    link: '/learn/blockchain/blockchain-intro',
  },
  {
    name: "Blockstack dApp Development (Beginners)",
    slug: "blockstack-dapp-development",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Time:</strong> 4 weeks @ 10hrs /week</li><li><strong>Build:</strong> (3) Mini-projects incl: ERC-20 Token, Domain Marketplace + more.</li><li><strong>Learn:</strong> Blockstack.js, Web3.js, Smart Contracts + more.</li><li><strong>Deposit:</strong> $499 (or $100/mo for 5-months)</li></ul>",
    color: "#096ff0",
    cta: "See Details",
    category: 'tech',
    link: '/learn/blockchain/blockstack-dapp-development',
  },
    {
    name: "Ethereum dApp Development (Beginners)",
    slug: "ethereum-dapp-development",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Time:</strong> 6 weeks @ 10hrs /week</li><li><strong>Build:</strong> (6) Mini-projects incl: ERC-20 Token, Domain Marketplace + more.</li><li><strong>Learn:</strong> Solidity, Web3.js, Smart Contracts + more.</li><li><strong>Deposit:</strong> $749 (or $110/mo for 7-months)</li></ul>",
    color: "#096ff0",
    cta: "See Details",
    category: 'tech',
    link: '/learn/blockchain/ethereum-dapp-development',
  },
    {
    name: "Advanced Ethereum Development (Intermediate/Advanced)",
    slug: "advanced-ethereum-development",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Time:</strong> 12 weeks @ 10hrs /week</li><li><strong>Build:</strong> (6) Mini-projects incl: Security Audit, ENS Registrar + more.</li><li><strong>Learn:</strong> State Channels, Snarks/Starks, Smart Contracts + more.</li><li><strong>Deposit:</strong> $1,499 (or $125/mo for 12-months).</li></ul>",
    color: "#096ff0",
    cta: "See Details",
    category: 'tech',
    link: '/learn/blockchain/ethereum-development-advanced',
  },
  {
    name: "Intro to Full-Stack Web Development (Beginners)",
    slug: "intro-to-fullstack-web-development",
    image: fullstack,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A Smart-Recipe Website, TODO List or your own personal project in the monthly build challenge.</li><li><strong>Learn:</strong> node, react, redux, mongo, git, graphql, continuous integration and serverless development.</li><li><strong>Deposit:</strong> $499 (or $100/mo for 5-months).</li></ul>",
    color: "#096ff0",
    cta: "Pre-register",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Intro to AI &amp Machine Learning (Beginners)",
    slug: "intro-to-ai-ml",
    image: aiml,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> An image classifier, prediction api, customer segementation tool or your own personal project in the monthly build challenge.</li><li><strong>Learn:</strong> Supervised Learning, Deep Learning & Unsupervised Learning.</li><li><strong>Deposit:</strong> $499 (or $100/mo for 5-months).</li></ul>",
    color: "#096ff0",
    cta: "Pre-register",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Intro to Data Science (Beginners)",
    image: datascience,
    slug: "intro-to-data-science",
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A customer churn predictor, exploratory data analyzer or your own personal project in the monthly build challenge.</li><li><strong>Learn:</strong> NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Tensorflow + more.</li><li><strong>Cost:</strong> $499 (or $100/mo for 5-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    cta: "Pre-register",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Intro to Low/No-Code Track (Beginners)",
    image: lowcode,
    slug: "intro-to-low-code",
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A flight comparison website, mobile workforce app or your own personal project in the monthly build challenge.</li><li><strong>Learn:</strong> Airtable, Segment, Zapier, Clay, RapidAPI, Retool, Webflow, Bubble & Glide.</li><li><strong>Cost:</strong> $499 (or $100/mo for 5-months) minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    cta: "Pre-register",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },

];
