import React from "react";
import angellist from "../img/home/angellist.png";
import yc from "../img/home/yc.png";
import blockstack300 from "../img/home/blockstack_300.png";

export default function Investors() {
  return (
    <section id="investors" className="ng-scope left-right">
      <div className="container">
        <br />
        <br />
        <h2 className="section-header text-center">
          <big>Our Investors</big>
        </h2>
        <div className="col-md-4">
          <img src={angellist} alt="AngelList" />
        </div>
        <div className="col-md-4">
          <img src={yc} alt="Y-Combinator" />
        </div>
        <div className="col-md-4">
          <img src={blockstack300} alt="Blockstack" />
        </div>
        <p>
          <br style={{ clear: "both" }} />
        </p>
        <br /> <br />
      </div>
    </section>
  );
}
