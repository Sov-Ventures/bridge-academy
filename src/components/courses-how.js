import React from "react";

export default function CoursesHow({headline, firstDesc}) {
  return (
    <section id="how-items" className="tools">
      <div className="triangle triangle--bottom triangle--gray">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="2560 0 2560 100 0 100" />
        </svg>
      </div>

      <div className="grey">
      
      <div className="container">

      <h2 class="section-header"><big>{headline}</big></h2>
      <p className="description">{firstDesc}</p>
      <div id="faq-items">
        <div className="faq-item">
          <h5>Real-world projects from industry experts</h5>
          <p>
           With real world projects built in partnership with industry experts, you’ll build a job-ready portfolio graded by experienced reviewers.
          </p>
        </div>

        <div className="faq-item">
          <h5>Get technical guidance</h5>
          <p>
           Get paired with a knowledgeable peer whos a few steps ahead of you in your learning journey, motivating you and keeping you on track.
          </p>
        </div>

        <div className="faq-item">
          <h5>Flexible learning program</h5>
          <p>
            Choose a program to fit into your busy life. Along with easy monthly payments you can learn at your own pace to better reach your personal goals.
          </p>
        </div>

        <div className="faq-item">
          <h5>Grow your network</h5>
          <p>
           We only accept the best mentors, technology partners and learners, so you can make meaningful connections in your chosen field.
          </p>
        </div>
           <br style={{ clear: "both" }} />
            <br />
         <br /> 
        </div>
        </div>
      </div>
      <div className="triangle triangle--top triangle--gray triangle--rotated">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="2560 0 2560 100 0 100" />
        </svg>
      </div>


     
      </section>
  );
}
