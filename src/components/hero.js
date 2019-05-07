import React from "react";

export default function Hero({
  children,
  headline,
  subHeadline,
  firstDesc,
  secondDesc,
  className,
  id,
  heroimg,
}) {
  return (
    <section id="homepage" className="hero">
    <div className="container">
    


      <div  id={id}  className={className}>
        {headline && (
          <h1>
            <span style={{ textAlign: "center" }}>
              {headline}
              <big style={{ color: "#59cbb9" }}>.</big>
            </span>
          </h1>
        )}

        {subHeadline && <h3>{subHeadline}</h3>}

        {firstDesc && (
          <div className="hero-desc" dangerouslySetInnerHTML={{ __html: firstDesc }} />
        )}

        {secondDesc && (
          <div className="hero-desc" dangerouslySetInnerHTML={{ __html: secondDesc }} />
        )}

        {children}
      </div>

          {heroimg && (
      <div className='feature-hero'>
        <img  src={heroimg}   />
      </div>
    )}

      </div>
    </section>
  );
}
