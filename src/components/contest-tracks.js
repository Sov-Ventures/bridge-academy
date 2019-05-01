import React from "react";
import dharma from "../img/home/dharma.png";
import blockstack from "../img/home/blockstack.png";
import hydrogen from "../img/home/hyrdogen.svg";
import zeppelin from "../img/home/zeppelin.svg";
import opensea from "../img/home/opensea.png";
import terminal from "../img/home/terminal.png";


export default function TechTracks({ headline, image, desc, endSlice, category, color }) {


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
                <div
                  className="card-img-top"
                  style={{ backgroundColor: track.color }}
                >
                  <img src={track.image} alt={track.name} />
                </div>                <p dangerouslySetInnerHTML={{ __html: track.subhead }} />
                <p dangerouslySetInnerHTML={{ __html: track.desc }} />
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
    name: "Defi Track",
    image: dharma,
    subhead: "Sponsored by Dharma",
    desc:"<ul><li><strong>Ideas:</strong> A relayer for margin loans, a visualization of loan volume or your own idea.</li><li><strong>Prizes:</strong> $1k, $500 and $250 for top 3 dapps + $500 Bridge Credit for honorable mention.</li></ul>",
    color: "#F3764B",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "Consumer dApp Track",
    image: blockstack,
    subhead: "Sponsored by Blockstack",
    desc:"<ul><li><strong>Ideas:</strong> A decentralized recipe site, a sybil resistant contact manager or your own idea.</li><li><strong>Prizes:</strong> $1k, $500 and $250 for top 3 dapps + $500 Bridge Credit for honorable mention.</li></ul>",
    color: "#290f34",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  },
  {
    name: "NFT Track",
    image: opensea,
    subhead: "Sponsored by Opensea",
    desc:"<ul><li><strong>Ideas:</strong> An rest API for ERC721 pricing, NFT Chrome extension or your own project idea.</li> <li><strong>Prizes:</strong> $1k, $500 and $250 for top 3 dapps + $500 Bridge Credit for honorable mention.</li></li></ul>",
    color: "#fcfcfc",
    category: 'tech',
    link: 'https://apply.bridge.academy/register?next=%2Fb%2Fvqcdrz%2Fview',
  }

];
