import React from "react";

const mentors = [
  {
    desc: "Maker. Product Lead at @ZeppelinOrg, Previously: @ycombinator",
    image:
      "https://pbs.twimg.com/profile_images/1029553392975134721/aAAPt18h_400x400.jpg",
    name: "Ramon Recuero",
    social: {
      twitter: "https://twitter.com/ramonrecuero",
    },
  },
  {
    desc: "@prylabs #BUIDL @Ethereum 2.0. Formerly: @Google. scale or die",
    image: "https://bridge.academy/static/img/home/preston.jpg",
    name: "Preston Van Loon",
    social: {
      twitter: "https://twitter.com/preston_vanloon",
    },
  },
  {
    desc: "Cofounder/CEO @Stealthy, a decentralized & encrypted P2P chat app.",
    image: "https://bridge.academy/static/img/home/PBJ_2.jpg",
    name: "Prabhaav Bhardwaj",
    social: {
      github: "https://github.com/prabhaav",
    },
  },
  {
    desc: "Writer. Founder of @graphitedocs.",
    image: "https://bridge.academy/static/img/home/justin.jpg",
    name: "Justin Hunter",
    social: {
      twitter: "https://twitter.com/polluterofminds",
    },
  },
  {
    desc: "Ethereum Foundation + other early experiments using Ethereum",
    image: "https://bridge.academy/static/img/home/sina.jpg",
    name: "Sina Habibian",
    social: {
      twitter: "https://twitter.com/sinahab",
    },
  },
  {
    desc:
      "@ethereum Advisor, @truebitprotocol first hire @ethprize @ETHSecurity",
    image: "https://bridge.academy/static/img/home/robbie.jpg",
    name: "Robert Bent",
    social: {
      twitter: "https://twitter.com/robbiebent1s",
    },
  },
  {
    desc:
      "Bringing massive scale to Ethereum as Co-founder & CEO @maticnetwork",
    image: "https://bridge.academy/static/img/home/jaynti.png",
    name: "Jaynti Kanani",
    social: {
      github: "https://github.com/jdkanani",
    },
  },
  {
    desc: "VP of Engineering @Cruzeo_io, Founder @Mooqita, Lecturer @UCB",
    image: "https://bridge.academy/static/img/home/doris.jpg",
    name: "Doris Schioberg",
    social: {
      twitter: "https://twitter.com/dorisschioberg",
    },
  },
  {
    desc: "Founder @ SpringRole, Ex CTO @ Science, Advising Science, Burst",
    image: "https://bridge.academy/static/img/home/kartik.jpg",
    name: "Kartik Mandaville",
    social: {
      github: "https://github.com/kar2905",
    },
  },
];

export default function({ desc }) {
  return (
    <section id="mentors">
      <div className="container">
        <h2 className="section-header">
          <big>
            <br />
            <span>Our Mentors</span>
          </big>
        </h2>

        {desc && <p className="description">{desc}</p>}

        <div className="communities-container row">
          {mentors.map(mentor => (
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              image={mentor.image}
              desc={mentor.desc}
              link={mentor.social.twitter || mentor.social.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MentorCard({ image, name, desc, link, socialIcon }) {
  return (
    <div className="col-md-4">
      <div className="community-item card mentor">
        <div className="card-img-top">
          <img src={image} alt={name} />
        </div>
        <div className="card-body">
          <p className="card-text">
            <strong>{name}</strong>
            <br />
            {desc}
            <a href={link}>{socialIcon}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
