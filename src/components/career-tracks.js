import React from "react";
import blockchain from "../img/home/blockchain.png";
import fullstack from "../img/home/fullstack.png";
import fasttrack from "../img/home/fast-track.png";
import aiml from "../img/home/aiml.png";
import datascience from "../img/home/datascience.png";
import lowcode from "../img/home/lowcode.png";


export default function CareerTracks({ headline, image, desc, endSlice, category }) {


   return (

    <section id="career-tracks" class="explore-communities">
      <h2>{headline}</h2>
      <p className="description" dangerouslySetInnerHTML={{ __html: desc }} />
      <div id="tracks" className="container">
        <div className="communities-container row">
          {tracks.slice(0, endSlice || tracks.length ).map(track => (
              <div key={track.name} className="col-md-4">
              <div className="community-item card">
                <img src={track.image} alt={track.name} />
                <p dangerouslySetInnerHTML={{ __html: track.subhead }} />
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
    name: "Blockchain Engineer",
    image: blockchain,
    subhead: "Career Track",
    desc:"<ul><li><strong>Cost:</strong> 15% Income for 3 years. Capped: $19,000 via our <a href='/candidate-agreement'>deffered fee agreement</a><li><strong>Tracks:</strong> Part & Full-time.</li><li><strong>Careers:</strong> Blockchain Developer, dApp Developer, Blockchain Architect</li></ul><p align='center'><a  href='/learn/blockchain/blockchain-developer'>Learn More</a></p>",
    color: "#096ff0",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',

  },
  {
    name: "FullStack Developer",
    image: fullstack,
    subhead: "Career Track",
    desc:"<ul><li><strong>Cost:</strong> 15% Income for 3 years. Capped: $19,000 via our <a href='/candidate-agreement'>deffered fee agreement</a><li><strong>Tracks:</strong> Part & Full-time.</li><li><strong>Careers:</strong> Fullstack Developer, Web Developer, Software Architect</li></ul><p align='center'><a  href='/learn/fullstack'>Learn More</a></p>",
    color: "#290f34",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',

  },
  {
    name: "Career Fasttrack",
    image: fasttrack,
    subhead: "Career Track",
    desc:"<ul><li><strong>Cost:</strong> 15% Income for 1 years. Capped: $9,000 via our <a href='/candidate-agreement'>deffered fee agreement</a><li><strong>Tracks:</strong> Part-time.</li><li><strong>Careers:</strong> Senior Developer, Lead Architect, CTO, VP Engineering, etc.</li></ul><p align='center'><a  href='/learn/fasttrack'>Learn More</a></p>",
    color: "#290f34",
    category: 'career',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview',

  },
];
