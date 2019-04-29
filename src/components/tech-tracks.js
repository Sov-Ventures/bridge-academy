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
              <div key={track.name} className="container col-md-4">
              <div className="community-item card">
                <h3 className="card-name" dangerouslySetInnerHTML={{ __html: track.name }} />
                <img src={track.image} alt={track.name} />
                <p dangerouslySetInnerHTML={{ __html: track.subhead }} />
                <div className="card-body">
                <div className="card-desc" dangerouslySetInnerHTML={{ __html: track.desc }} />
                  <p align="center"><a class="btn btn-primary" href={track.link}>Join Now</a></p>
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
    name: "Blockchain &amp; dApp Development Track",
    image: blockchain,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A DEX, a block explorer, a ethereum dApp or your own project idea.</li><li><strong>Learn:</strong> State Channels, Snarks, Starks, Smart Contracts & Web3 powered dApps and more.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Modern Full-Stack Web Development Track",
    image: fullstack,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A Smart-Recipe Website, TODO List or your own personal project.</li><li><strong>Learn:</strong> node, react, redux, mongo, git, graphql, continuous integration and serverless development.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Artificial Intelligence &amp Machine Learning Track",
    image: aiml,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> An image classifier, prediction api, customer segementation dashboard or your own personal project.</li><li><strong>Learn:</strong> Supervised Learning, Deep Learning & Unsupervised Learning.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Data Science Track",
    image: datascience,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A customer churn predictor, exploratory data analyzer or your own personal project.</li><li><strong>Learn:</strong> NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Tensorflow + more.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Low/No-Code Track",
    image: lowcode,
    subhead: "Join Monthly",
    desc:"<ul><li><strong>Build:</strong> A flight comparison website, mobile workforce app or your own personal project.</li><li><strong>Learn:</strong> Airtable, Segment, Zapier, Clay, RapidAPI, Retool, Webflow, Bubble & Glide.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },

];
