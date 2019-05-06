import React, { Fragment } from "react";
import Alumni from "../components/alumni";
import Benefactors from "../components/benefactors";
import Layout from "../components/layout";
import Hero from "../components/hero";
import PrimaryButton from "../components/button";
import FAQ from "../components/faq";
import FlashBar from "../components/flash-bar";
import scholarship from "../img/home/scholarship.png";
import { scholarshipFAQData } from "../api/data";

export default function Scholarship() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Bridge Academy Scholarship">

    <Hero 
        className="hero contest"
        id="home-tagline"
        headline="Pay it forward"
        subHeadline="To the next generation of software developers."
        firstDesc="For each purchase of a Bridge course, we earmark 50% of the proceeds for scholarships."
        secondDesc="Scholarship funds go directly towards offsetting the cost of our programs for aspiring developers in develping countries."
        heroimg={scholarship}
      >
        <PrimaryButton to="#faq">Learn more</PrimaryButton>

      </Hero>


      <FAQ data={scholarshipFAQData} />

      <Benefactors 
        endSlice={3}
      />

      <Alumni 
        endSlice={3}
      />


    </Layout>
    </Fragment>
  );
}
