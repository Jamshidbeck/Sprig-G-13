import React from "react";
import "./Muhammadsaid.css";

import A from "./img/1.png";
import B from "./img/IMAGE (2).png";
import C from "./img/IMAGE (3).png";
import D from "./img/IMAGE (3).png";
import E from "./img/IMAGE (3).png";
import F from "./img/IMAGE (3).png";
import G from "./img/IMAGE (3).png";
import H from "./img/IMAGE (3).png";
import I from "./img/IMAGE (3).png";
import J from "./img/IMAGE (3).png";


import Bicycle from "./img/Frame.png";

import Degree from "./img/IMAGE (13).png"

export function Muhammadsaid() {
  return (
    <div className="companies">
      <div className="c-names">
        <p>
          Trusted by the world's most <br /> innovative companies
        </p>
        <div className="c-elements">
          <img src={A} alt="" />
          <img src={B} alt="" />
          <img src={C} alt="" />
          <img src={D} alt="" />
          <img src={E} alt="" />    
          <img src={F} alt="" />
          <img src={B} alt="" />
          <img src={B} alt="" />
          <img src={B} alt="" />
          <img src={B} alt="" />
          <img src={B} alt="" />
          <img src={B} alt="" />
          <img src={B} alt="" />
          <img src={B} alt="" />
          <img src={B} alt="" />
         
        </div>
      </div>
      <div className="c-about">
        <div className="a-img">
          <img src={Bicycle} alt="" />
        </div>
        <div className="a-text">
          <p>
            Modern product teams move fast, <br /> but learning from customers
            takes <br />a ton of time, effort, and energy.
          </p>
          <br />
          <p>
            So teams often rush user research or skip it altogether, <br />
            causing products and features to miss the mark.
          </p>
        </div>
      </div>
      <div className="c-degree">
        <div className="d-name">
          <p>
            Sprig makes it possible to obtain qualitative <br /> insights at the
            speed and scale of analytics
          </p>
        </div>
        <div className="degreeImg">
          <img src={Degree} alt="" />
        </div>
        <div className="d-btn">
          <button>Start for Free</button>
        </div>
      </div>
    </div>
  );
}
