import React from "react";


export default function Tracks({ headline, desc, endSlice }) {
  return (
    <section id="explore-communities">
      <div id="tracks" className="container">
        <div className="communities-container row">
          {tracks.slice(0, endSlice || tracks.length).map(track => (
            <div key={track.name} className="col-md-4">
              <div className="community-item card">
                <h3 className="card-name" dangerouslySetInnerHTML={{ __html: track.name }} />
                <small dangerouslySetInnerHTML={{ __html: track.subhead }} />
                <div className="card-body">
                <div className="card-desc" dangerouslySetInnerHTML={{ __html: track.desc }} />
                  <p align="center"><a class="btn btn-primary" href="https://apply.bridge.academy/register?next=%2Fb%2Frvd2ba%2Fview">Apply Now</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p>Compare pricing plans <a href='#plan-comparison'>here</a></p>

    </section>
  );
}

const tracks = [
  {
    name: "Career FastTrack",
    subhead: "Only top 10% are accepted",
    desc:"<ul><li>$0 up-front + $9,500 maximum repayment over 12 months.</li><li> Minimal time committment.</li><li>Includes: Interview Prep, Career Coaching/Mentoring &amp; Relevant Intros & Job Referrals</li></ul><p align='center'><a href='/tracks/fasttrack'>Learn More</a></p>",
    color: "#F3764B",
  },
  {
    name: "FullStack Career Track",
    subhead: "&nbsp;",
    desc:"<ul><li>$0 up-front + $19,000 max repayment over 36 months or $9,500 up-front.</li><li>Part-time: 10-15hrs /week.</li><li>Includes: Node, React, Serverless, TDD, Graphql, CI + more</li></ul><p align='center'><a  href='/tracks/fullstack'>Learn More</a></p>",
    color: "#290f34",
  },
  {
    name: "Blockchain Career Track",
    subhead: "&nbsp;",
    desc:"<ul><li>$0 up-front + $19,000 max repayment over 36 months or $9,500 up-front.</li><li>Part-time: 10-15hrs /week.</li><li>Includes: Smart Contracts & dApp development + more.</li></ul><p align='center'><a href='/tracks/blockchain' align='center'>Learn More</a></p>",
    color: "#096ff0",
  },
  {
    name: "Data Eng Career Track",
    desc:"<p align='center'>Coming soon! Pre-apply now.</p>",
    color: "#0e3368",
  },
  {
    name: "DevOps Career Track",
    desc: "<p align='center'>Coming soon! Pre-apply now.</p>",
    color: "#fcfcfc",
  },
  {
    name: "AI/ML Career Track",
    desc:"<p align='center'>Coming soon! Pre-apply now.</p>",
    color: "#000000",
  },
];
