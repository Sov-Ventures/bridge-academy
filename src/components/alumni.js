import React from "react";
import kshaun from "../img/home/kshaun.jpg";
import jbeard from "../img/home/jbeard.jpg";
import saraw from "../img/home/saraw.jpg";
import salilg from "../img/home/salilg.jpg";
import cdepman from "../img/home/cdepman.jpg";
import ankushm from "../img/home/ankushm.jpg";

const alumni = [
  {
    name: "Kyle Aquino",
    image: kshaun,
    note:
      "Bridge was the community I'm looking for. It helped me meet amazing developers around the world. It gave me an opportunity to see beyond and gave me have a new vision of the future.",
    social: {
      github: "https://github.com/kyleaquino",
    },
  },
  {
    name: "Jacob Beard",
    image: jbeard,
    note:
      "Bridge Academy was a good learning experience. It provided the opportunity to gain hands-on experience programming blockchain applications.",
    social: {
      github: "https://github.com/jbeard4",
    },
  },
  {
    name: "Sara Wong",
    image: saraw,
    note:
      "I didn't realize that when I was joining Bridge Academy, I was adding another set of tools in my tool box that I will definitely incorporate in my work going forward.",
    social: {
      github: "https://github.com/sarapple",
    },
  },
  {
    name: "Salil Gautam",
    image: salilg,
    note:
      "If you are a highly motivated individual who likes to keep their skills updated and want to be a part of a community with similar intentions, then this is the program for you! #BUIDL",
    social: {
      github: "https://github.com/salil-gtm",
    },
  },
  {
    name: "Charlie Depman",
    image: cdepman,
    note:
      "Bridge Academy gave me the chance to explore blockchain technology and get some guidance on other technologies I hadn't used before. My mentor provided me with great feedback as I was developing my project.",
    social: {
      github: "https://github.com/cdepman",
    },
  },
  {
    name: "Ankush Malik",
    image: ankushm,
    note:
      "The Bridge program was especially helpful for newbies to the Blockchain space like me. From the mentors to the curriculum to the projects, it has everything.",
    social: {
      github: "https://github.com/AnkushMalik",
    },
  },
];

export default function Alumni() {
  return (
    <section id="alumni">
      <div className="container">
        <h2 className="section-header">
          <big>
            <br />
            <span style={{ textAlign: "center" }}>Our Alumni</span>
          </big>
        </h2>

        <p className="description">
          Our graduates come from all over the world and from a very diverse set
          of backgrounds.
        </p>

        <div className="communities-container row">
          {alumni.map(cur => (
            <AlumniCard
              key={cur.name}
              image={cur.image}
              name={cur.name}
              note={cur.note}
              github={cur.social.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AlumniCard({ image, name, note, github }) {
  return (
    <div className="col-md-4">
      <div className="community-item card ">
        <div className="card-img-top">
          <img src={image} alt={name} />
        </div>
        <div className="card-body">
          <div style={{ marginTop: "10px" }} className="card-text">
            <strong>{name}</strong>{" "}
            <a href={github} target="_blank" rel="noopener noreferrer">
              <svg
                className="octicon octicon-mark-github"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
            <br />
            <blockquote>
              <i>"{note}"</i>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
