import React from "react";


export default function CareerTracks({ headline, desc, endSlice, category }) {


   return (

    <section id="career-tracks" class="explore-communities">
      <h4>{headline}</h4>
      <div id="tracks" className="container">
        <div className="communities-container row">
          {tracks.slice(0, endSlice || tracks.length ).map(track => (
              <div key={track.name} className="col-md-4">
              <div className="community-item card">
                <h3 className="card-name" dangerouslySetInnerHTML={{ __html: track.name }} />
                <small dangerouslySetInnerHTML={{ __html: track.subhead }} />
                <div className="card-body">
                <div className="card-desc" dangerouslySetInnerHTML={{ __html: track.desc }} />
                  <p align="center"><a class="btn btn-primary" href={track.link}>Apply Now</a></p>
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
    name: "Career FastTrack",
    subhead: "For Senior Developers",
    desc:"<ul><li><strong>Cost:</strong> 15% Income for 1 year. Capped: $9,500 via our <a href='/candidate-agreement'>deffered fee agreement</a>.</li><li><strong>Minimal</strong> time committment.</li><li><strong>Includes:</strong> Career Coaching, Personal Mentor, Resume Review, Interview Prep &amp; Job Referrals</li></ul><p align='center'><a href='/tracks/fasttrack'>Learn More</a></p>",
    color: "#F3764B",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',
  },
  {
    name: "FullStack Career Track",
    subhead: "&nbsp;",
    desc:"<ul><li><strong>Cost:</strong> 15% Income for 3 years. Capped: $19,000 via our <a href='/candidate-agreement'>deffered fee agreement</a><li><strong>Committment:</strong> 10-15hrs /week.</li><li><strong>Includes:</strong> Node, React, Serverless, TDD, Graphql + Everything in FastTrack</li></ul><p align='center'><a  href='/tracks/fullstack'>Learn More</a></p>",
    color: "#290f34",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',

  },
  {
    name: "Blockchain Career Track",
    subhead: "&nbsp;",
    desc:"<ul><li><strong>Cost:</strong> 15% Income for 3 years. Capped: $19,000 via our <a href='/candidate-agreement'>deffered fee agreement</a><li><strong>Committment:</strong> 10-15hrs /week.</li><li><strong>Includes:</strong> Smart Contracts & dApp development + Everything in FastTrack.</li></ul><p align='center'><a href='/tracks/blockchain' align='center'>Learn More</a></p>",
    color: "#096ff0",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',

  },
  {
    name: "Data Eng Career Track",
    desc:"<p align='center'>Coming soon! Pre-apply now.</p>",
    color: "#0e3368",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',

  },
  {
    name: "DevOps Career Track",
    desc: "<p align='center'>Coming soon! Pre-apply now.</p>",
    color: "#fcfcfc",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',

  },
  {
    name: "AI/ML Career Track",
    desc:"<p align='center'>Coming soon! Pre-apply now.</p>",
    color: "#000000",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',

  },
];
