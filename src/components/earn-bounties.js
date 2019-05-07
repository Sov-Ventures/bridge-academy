import React from "react";
import PrimaryButton from "../components/button";
import bounties_network from "../img/home/bounties_network.jpg";

export default function EarnBounties({ headline, image, desc, endSlice, category }) {


   return (

    <section id="tech-tracks" class="explore-communities">
      <h2>{headline}</h2>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
      <div id="tracks" className="container">
        <div className="communities-container row">
          {bounties.slice(0, endSlice || bounties.length ).map(bounty => (
              <div key={bounty.name} className="">
              <div className="community-item card">
                <img className="course-img" align="left" src={bounty.image} alt={bounty.name} />
                <a style={{float: "right"}} class="btn btn-primary" href={bounty.link}>View Bounty</a>
                <div className="card-body">
                <h4 dangerouslySetInnerHTML={{ __html: bounty.name }} />
                <div className="card-desc" dangerouslySetInnerHTML={{ __html: bounty.desc }} />
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>


        <PrimaryButton className="btn btn-primary" to="https://explorer.bounties.network/explorer?bountyStage=active&platform=bounties-network%2Cgitcoin">
          See All Bounties
        </PrimaryButton>

    </section>
  );
}

const bounties = [
  {
    name: "Build a simple permaweb app",
    image: bounties_network,
    subhead: "Join Monthly",
    desc:"<ul><li>The permaweb is a decentralised, immutable and persistent web. Permaweb apps are built using normal web technologies — HTML, CSS, and Javascript — but are deployed to Arweave’s on-chain storage system. You can get started and deploy a permaweb app in 2 minutes or less. This bounty is for building a new, prototype permaweb app. If we like the app, and you enjoyed the experience, we will then setup larger bounties for the continued development of the permaweb.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://explorer.bounties.network/bounty/2929',
  },
  {
    name: "Spell-checker in Patchbay",
    image: bounties_network,
    subhead: "Join Monthly",
    desc:"<ul><li>I've recently been contacted by someone asking for spell-checker integration into patchbay. The reason this peer was asking was because they're quite dyslexic, but don't really want that to be a focus when they participate in conversations in scuttlebutt.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://explorer.bounties.network/bounty/2927',
  },
    {
    name: "Web3Connect modal missing images",
    image: bounties_network,
    subhead: "Join Monthly",
    desc:"<ul><li>The Web3Connect modal is very much a work in progress but I need someone to debug why the images are not being imported to NPM or are not being packaged properly with Webpack.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://explorer.bounties.network/bounty/2921',
  },
  {
    name: "Music Funding Investor Contract on OpenLaw for UJO",
    image: bounties_network,
    subhead: "Join Monthly",
    desc:"<ul><li>Please record a Podcast with someone from A Music Expert in the ConsenSys Hub, an OpenLaw representative, and an Ujo Representative that describes specifically how to built a 3rd Layer dApp on top of Layer 2 services of UJO and OpenLaw:</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://explorer.bounties.network/bounty/2916',
  },
  {
    name: "Integrate Share Kit and Sign Up/Sign In with Email",
    image: bounties_network,
    subhead: "Join Monthly",
    desc:"<ul><li>Integrate Bloom Share Kit into your live website or app such that an individual can create an account and sign in to an existing account using their BloomID and an attested email address. Submit your work as a pull request on the bloom-starter repo including a link to the website/app so that we can test to verify. The Bloom team will review the pull request for accuracy and may request up to two revisions. Submissions will be reviewed by the Bloom team and rewards will be issued when approved.</li></ul>",
    color: "#096ff0",
    category: 'tech',
    link: 'https://explorer.bounties.network/bounty/2915',
  },

];
