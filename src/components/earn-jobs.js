import React from "react";
import PrimaryButton from "../components/button";
import chorus_one from "../img/home/chorus-one.png";
import quillhash from "../img/home/quillhash.png";
import zeppelin from "../img/home/zeppelin-one.jpg";

export default function EarnJobs({ headline, image, desc, endSlice, category }) {


   return (

    <section id="tech-tracks" class="explore-communities">
      <h2>{headline}</h2>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
      <div id="tracks" className="container">
        <div className="communities-container row">
          {jobs.slice(0, endSlice || jobs.length ).map(job => (
              <div key={job.name} className="">
              <div className="community-item card">
                <img className="course-img" align="left" src={job.image} alt={job.name} />
                <a style={{float: "right"}} class="btn btn-primary" href={job.link}>Apply Now</a>
                <div className="card-body">
                <h4 dangerouslySetInnerHTML={{ __html: job.name }} />
                <div className="card-desc" dangerouslySetInnerHTML={{ __html: job.desc }} />
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>


      <p>
        <PrimaryButton className="btn btn-primary"to="https://jobs.bridge.academy">
          See All Jobs
        </PrimaryButton>
      </p>

    </section>
  );
}

const jobs = [
  {
    name: "Full-Stack Engineer at Chorus One",
    image: chorus_one,
    subhead: "Join Monthly",
    desc:"<ul><li>Chorus One has working validators in Cosmos and Loom. We are actively searching for a Cryptoeconomic Fullstack Engineer to extend our services to other networks...</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://jobs.bridge.academy/b/5xaew5/view',
  },
  {
    name: "Cryptoeconomic Software Engineer at Chorus One",
    image: chorus_one,
    subhead: "Join Monthly",
    desc:"<ul><li>Chorus One has working validators in Cosmos and Loom. We are actively searching for a Cryptoeconomic Fullstack Engineer to extend our services to other networks...</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://jobs.bridge.academy/b/7femuh/view',
  },
    {
    name: "Software Engineer at Zeppelin",
    image: zeppelin,
    subhead: "Join Monthly",
    desc:"<ul><li>Zeppelin leads the industry in developing standards for architecting and deploying smart contract systems in public blockchains. We build open source infrastructure and conduct in-depth security audits on high-impact smart contract systems. Learn more about us!</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://jobs.bridge.academy/b/ot2hz2/view',
  },
  {
    name: "Security Researcher at Zeppelin",
    image: zeppelin,
    subhead: "Join Monthly",
    desc:"<ul><li>Zeppelin leads the industry in developing standards for architecting and deploying smart contract systems in public blockchains. We build open source infrastructure and conduct in-depth security audits on high-impact smart contract systems. Learn more about us!</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://jobs.bridge.academy/b/izg6et/view',
  },
  {
    name: "Blockchain Developer (Hyperledger Fabric/Sawtooth) at QuillHash",
    image: quillhash,
    subhead: "Join Monthly",
    desc:"<ul><li>We at QuillHash explore and build products in Blockchain, AI and IOT . We help traditional businesses become more efficient, streamlined, creative and innovative by helping them realize the potential of latest tech - Blockchain ,AI and IOT.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://jobs.bridge.academy/b/4bohsz/view',
  },

];
