import React from "react";


export default function TechTracks({ headline, desc, endSlice, category }) {


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
    subhead: "~10hrs/week to complete in 3 months.",
    desc:"<ul><li><strong>Build:</strong> (6) Tutorials for Beginners, Intermediate & Advanced, including: A DEX, a block explorer, a ethereum dApp and your own capstone project.</li><li><strong>Learn:</strong> Blockchain Fundamentals, Smart Contracts & dApp development.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Modern Web Development Track",
    subhead: "~10hrs/week to complete in 3 months.",
    desc:"<ul><li><strong>Build:</strong> (6) hands-on mini-projects including: A Recipe Website, TODO List and your own capstone project.</li><li><strong>Learn:</strong> node, react, redux, mongo, git, graphql, continuous integration and serverless development.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Artificial Intelligence &amp Machine Learning Track",
    subhead: "~10hrs/week to complete in 3 months.",
    desc:"<ul><li><strong>Build:</strong> (6) hands-on mini-projects including: An image classifier, prediction api, customer segementation dashboard and your own capstone project.</li><li><strong>Learn:</strong> Supervised Learning, Deep Learning & Unsupervised Learning.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Data Science Track",
    subhead: "~10hrs/week to complete in 3 months.",
    desc:"<ul><li><strong>Build:</strong> (6) hands-on mini-projects including: A customer churn predictor, exploratory data analyzer and your own capstone project.</li><li><strong>Learn:</strong> NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Tensorflow + more.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Low/No-Code Track",
    subhead: "~10hrs/week to complete in 3 months.",
    desc:"<ul><li><strong>Build:</strong> (6) hands-on mini-projects including: A flight comparison website and mobile workforce app + your own capstone project.</li><li><strong>Learn:</strong> Airtable, Segment, Zapier, Clay, RapidAPI, Retool, Webflow, Bubble & Glide.</li><li><strong>Cost:</strong> $299 up-front (or $110/mo for 3-months) minus $100 rebate on completion.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },

];
