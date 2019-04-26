import React from "react";


export default function TechTracks({ headline, desc, endSlice, category }) {


   return (

    <section id="tech-tracks" class="explore-communities">
      <h4>{headline}</h4>
      <div id="tracks" className="container">
        <div className="communities-container row">
          {tracks.slice(0, endSlice || tracks.length ).map(track => (
              <div key={track.name} className="container col-md-4">
              <div className="community-item card">
                <h3 className="card-name" dangerouslySetInnerHTML={{ __html: track.name }} />
                <small dangerouslySetInnerHTML={{ __html: track.subhead }} />
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
    name: "Blockchain &amp; dApp Development",
    subhead: "&nbsp;",
    desc:"<ul><li><strong>Build:</strong> A DEX, block explorer, dApp and your own capstone project.</li><li><strong>Learn:</strong> Blockchain Fundamentals, Smart Contracts & dApp development.</li><li><strong>Costs:</strong> $600 minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Full Stack Web Development",
    subhead: "&nbsp;",
    desc:"<ul><li><strong>Build:</strong> A Recipe Website, TODO List and your own capstone project.</li><li><strong>Learn:</strong> node, react, redux, mongo, git, graphql, continuous integration and serverless development.</li><li><strong>Costs:</strong> $600 minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Introduction to Machine Learning",
    subhead: "&nbsp;",
    desc:"<ul><li><strong>Build:</strong> An image classifier, customer segementation dashboard and your own capstone project.</li><li><strong>Learn:</strong> Supervised Learning, Deep Learning & Unsupervised Learning.</li><li><strong>Costs:</strong> $600 minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Python for Data Science",
    subhead: "&nbsp;",
    desc:"<ul><li><strong>Build:</strong> A customer churn predictor, exploratory data analyzer and your own capstone project.</li><li><strong>Learn:</strong> NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Tensorflow + more.</li><li><strong>Costs:</strong> $600 minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Intro to Modern DevOps",
    subhead: "&nbsp;",
    desc:"<ul><li><strong>Build:</strong> Learn Continuous Integration, Continuous Delivery & 15 different DevOps tools.</li><li><strong>Learn:</strong> Docker, Ansible, Terraform, Jenkins, Chef, Puppet, Kubernetes and more.</li><li><strong>Costs:</strong> $600 minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Building Low/No Code Apps",
    subhead: "&nbsp;",
    desc:"<ul><li><strong>Build:</strong> A flight comparison website and mobile workforce app + your own capstone project.</li><li><strong>Learn:</strong> Airtable, Segment, Zapier, Clay, RapidAPI, Retool, Webflow, Bubble & Glide.</li><li><strong>Costs:</strong> $600 minus $100 completion rebate.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },

];
