import React from "react";

export default function CourseCurriculum({headline, firstDesc, curriculum}) {
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
      <div class="container">
      <h2 class="section-header"><big>{headline}</big></h2>
      <p className="description">{firstDesc}</p>
      
      <div id="faq-items">
      
      {curriculum.slice(0, curriculum.length ).map(week => (
        <div className="faq-item">
          <h3>{week.number}</h3>
          <p>
          {week.desc}
          </p>
        </div>
        ))}

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
