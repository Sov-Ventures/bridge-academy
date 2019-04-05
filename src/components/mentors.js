import React from "react";
import { mentors, socialIcons } from "../api/data";

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
              socialIcon={
                mentor.social.twitter ? socialIcons.twitter : socialIcons.github
              }
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
            {desc}{" "}
            <a href={link} dangerouslySetInnerHTML={{ __html: socialIcon }} />
          </p>
        </div>
      </div>
    </div>
  );
}
