import React from "react";
import PrimaryButton from "../components/button";
import upwork from "../img/home/upwork.png";

export default function EarnGigs({ headline, image, desc, endSlice, category }) {


   return (

    <section id="tech-tracks" class="explore-communities">
      <h2>{headline}</h2>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
      <div id="tracks" className="container">
        <div className="communities-container row">
          {gigs.slice(0, endSlice || gigs.length ).map(gig => (
              <div key={gig.name} className="">
              <div className="community-item card">
                <img className="course-img" align="left" src={gig.image} alt={gig.name} />
                <a style={{float: "right"}} class="btn btn-primary" href={gig.link}>View Gig</a>
                <div className="card-body">
                <h4 dangerouslySetInnerHTML={{ __html: gig.name }} />
                <div className="card-desc" dangerouslySetInnerHTML={{ __html: gig.desc }} />
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>


        <PrimaryButton className="btn btn-primary" to="https://www.upwork.com/o/jobs/browse/?q=blockchain">
          See All Gigs
        </PrimaryButton>

    </section>
  );
}

const gigs = [
  {
    name: "Finish Add variable Difficulty, to a python mining pool",
    image: upwork,
    subhead: "Join Monthly",
    desc:"<ul><li>I need variable Difficulty added to my python based mining pool. Most of the work is already completed. Shouldnt take more than 2 days max.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://jobs.bridge.academy/b/5xaew5/view',
  },
  {
    name: "https://nano.org/ blockchain expert need for nano fork and setup, and consultation",
    image: upwork,
    subhead: "Join Monthly",
    desc:"<ul><li>Need to fork https://nano.org/en and setup own nodes, need consultation how this works and how to setup nodes.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://www.upwork.com/o/jobs/browse/details/~018c26f849b9916f55/?q=blockchain&sort=recency&user_location_match=2',
  },
    {
    name: "Blockchain Based Decentralized Mobile Application",
    image: upwork,
    subhead: "Join Monthly",
    desc:"<ul><li>I would like to hire a blockchain developer to build a decentralized mobile application using blockchain technology.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://www.upwork.com/o/jobs/browse/details/~01441f4e7ac9e9c531/?page=2&q=blockchain&sort=recency&user_location_match=2',
  },
  {
    name: "Developer needed to keep improving an existing investment blockchain related platform.",
    image: upwork,
    subhead: "Join Monthly",
    desc:"<ul><li>The ideal candidate will have a lot of experience in TypeScript, Javascript, HTML and blockchain technology, he will also be very talkative and dedicated to the job.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://www.upwork.com/o/jobs/browse/details/~01252cb7caf32579fa/?page=2&q=blockchain&sort=recency&user_location_match=2',
  },
  {
    name: "Angular + node dev for web app",
    image: upwork,
    subhead: "Join Monthly",
    desc:"<ul><li>We are looking for an experienced Angular.js and Node.js developer to add custom features to an open source web application. Additional “Nice to have” Experience:- Amazon Web Services, MySQL, Blockchain experience and working with blockchain API’s</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://www.upwork.com/o/jobs/browse/details/~01d8fa9be7e691c7ce/?page=2&q=blockchain&sort=recency&user_location_match=2',
  },

];
