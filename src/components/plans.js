import React from "react";


export default function Plans({ headline, desc, endSlice }) {
  return (
    <section class="explore-communities">
      <div id="plans" className="container">
        <div className="communities-container row">
          {plans.slice(0, endSlice || plans.length).map(plan => (
            <div key={plan.name} className="col-md-4">
              <div className="community-item card">
                <h3 className="card-name" dangerouslySetInnerHTML={{ __html: plan.name }} />
                <h3 className="lighter" dangerouslySetInnerHTML={{ __html: plan.subhead }} />
                <div className="card-body">
                <div className="card-desc" dangerouslySetInnerHTML={{ __html: plan.desc }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Starter",
    subhead: "$1.5k/month",
    desc:"<ul><li><strong>60 hours/month</strong></li><li><strong>Part-time</strong> Developer</li><strong>Timezone matching:</strong> 2hrs/day </li><li><strong>Extra hours:</strong> $25/hr</li><li><strong>Tech-Stack Training:</strong> Included</li><li><strong>Communication Training:</strong> Included</li></ul>",
    color: "#F3764B",
  },
  {
    name: "Full-time",
    subhead: "$4k/month",
    desc:"<ul><li><strong>160 hours/month</strong></li><li><strong>Full-time</strong> Developer</li><li><strong>Timezone matching:</strong> 5hrs/day </li><li><strong>Extra hours:</strong> $25/hr</li><li><strong>Tech-Stack Training:</strong> Included</li><li><strong>Communication Training:</strong> Included</li></ul>",
    color: "#F3764B",
  },
  {
    name: "Team",
    subhead: "$10k/month",
    desc:"<ul><li><strong>320 hours/month</strong></li><li><strong>Two</strong> Developers </li><strong>Timezone matching:</strong> All day</li><li><strong>Extra hours:</strong> $25/hr</li><li><strong>Tech-Stack Training:</strong> Included</li><li><strong>Communication Training:</strong> Included</li></ul>",
    color: "#F3764B",
  }
];
