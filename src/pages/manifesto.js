import React from "react";
import Layout from "../components/layout";

export default function Manifesto() {
  return (
    <Layout
      seoTitle="Bridge Manifesto"
      termsPage={true}
    >
      <section  className="container">
        <div className="container" style={{ textAlign: "left" }}>
          <h1 className="legalese-title">Manifesto</h1>
          <blockquote>
          <big><i>
           What the smartest people do on the weekends is what everyone else will do during the week in ten years - Chris Dixon.
          </i></big>
          </blockquote>
          <p>
            At <a href="/">Bridge</a>, we believe that our path forward to a brighter future is enabled by new technologies that maximize human potential.
          </p>
          <p>
            This is why we focus on emerging & frontier technologies that are entering the <a href="https://en.wikipedia.org/wiki/List_of_emerging_technologies#IT_and_communications">diffusion stage</a>, where they are the most fragile and need the most help.
          </p>
          <p>
           Our aim with Bridge, simply stated, is to:
          </p>
          
          <blockquote>
          <big><i>
           Inspire developers looking to learn new technologies at the frontier so they can gain new skills, contribute to open source projects, find mentorship and discover the most interesting and impactful career opportunities in the most exciting fields.
          </i></big>
          </blockquote>

          <p>
            Here are ten things that we believe at Bridge that impact our day-to-day decision making including our approach towards building our community, product development, hiring & partnerships.
          </p>

          <h3>1) Technology has the ability to positively impact and influence the future of humanity.</h3>
          <p>
            We acknowledge that while technology brings forth social upheaval, that it is a net benefit for our society and always has been throughout history. Don't call us Techno-utopian's, but Techno-optimists will do just fine.
          </p>

          <h3 className="legalese-title">2) Talent is globally distributed, while opportunities are not.</h3>

          <p>
            Today, you don't need to look far beyond Silicon Valley to recognize the lack of diffusion of opportunities. This applied both to educational and professional opportunities. Our mission with Bridge is to fill these gaps.
          </p>

         
          <h3>3) Technology has the potential to create new jobs, not just destroy them.</h3>


          <p>
            The history of technological progress is one of creative destruction. While each new wave destroys jobs, it creates as many or more jobs as it destroys. We believe that technology must intentionally be steered towards maximizing & augmenting our human intelligence, rather than just focused on optimizing and automating away our work and decisions.
          </p>


          <h3>4) Educational opportunities are linked to job opportunities.</h3>


          <p>
              Before we can evenly distribute global job opportunities, we must first solve the problem of distributing educational opportunities. The internet has been an amazing equalizing force here, but it's not enough by itself. Education comes in many forms including Mentorship, which is currently location dependent.
          </p>

        <h3>5) 'Know-how' is more important than 'Know-who' aka: who you know</h3>

          <p>
              In a world with open access to information, specific domain knowledge has become a more valuable and scarce resource. By increasing the 'know-how' of our community, we aim to Bridge the gaps in the 'know-who' side by connecting talent with mentors and hiring partners.
          </p>




       <h3>6) Credentials aren't everything, but they are worth something.</h3>

          <p>
            Education and work history are meaningful but relying solely on them results in missing good engineers. Good engineers come from many different backgrounds and places throughout the world. New credentialing systems are needed to support these kinds of engineers to make it easy to assess for employers.
          </p>

        <h3>7) Making educational opportunities available requires creativity in financing options</h3>

          <p>
           This is why at Bridge we use Income-Share agreements for some of our programs and have our own Bridge Scholarship Fund aimed to help decrease the up-front cost of our programs to Zero.
          </p>

        <h3>8) Hiring decisions should be objective and free of bias.</h3>

          <p>
            Hiring decisions should be made using a standard system, not based on gut reaction alone. This pattern matching harms candidates from diverse and international backgrounds and is detrimental to long-term performance.
          </p>


       <h3>9) Compensation should not be tied to location.</h3>

          <p>
            Today, many positions pay between 1/2 and 1/10th of the salary depending on where that person is based, for the same job title. Our aim with Bridge is to help decrease this location pay gap.
          </p>


        <h3>10) Finding and assessing global talent shouldn't be so difficult.</h3>

          <p>
            Right now, building a team of engineers outside the zipcode of your company headquarters requires a tremendous amount of leg work in recruiting, screening, interviewing and on-boarding onto your team.
          </p>

       
        </div>
      </section>
    </Layout>
  );
}
