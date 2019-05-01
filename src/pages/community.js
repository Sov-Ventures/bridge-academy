import React, { Fragment } from "react";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
import FlashBar from "../components/flash-bar";
import Tweets from "../components/tweets";
import Hero from "../components/hero";
import discord from "../img/home/discord.png";
import discourse from "../img/home/discourse.png";

export default function Community() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Community Love">
      <Hero 
        headline="Community Love"
        firstDesc="The Bridge community is a passionate group of developers, mentors and technology enthusiasts."
      
      >

      <a href="hhttps://discord.gg/mnRPFCN" class="btn btn-secondary">
        <img style={{ display: "inline", width: "25px" }} src={discord} alt="Forum" /> Join us on Discord
        </a>
        &nbsp;
      <a href="https://forum.bridge.academy" class="btn btn-secondary">
       <img style={{ display: "inline", width: "25px" }} src={discourse} alt="Discourse" /> Join us on Discourse
       </a>

      </Hero>

      <Tweets 
        endSlice={null}
      />
    </Layout>
    </Fragment>
  );
}
