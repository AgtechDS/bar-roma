/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Facebook = ({ className }) => {
  return (
    <div className={`facebook ${className}`}>
      <img className="img" alt="Facebook" src="/img/facebook.png" />
      <a className="overlap-group-wrapper" href="" rel="noopener noreferrer" target="_blank">
        <div className="overlap-group-4">
          <div className="text-wrapper-6">Facebook</div>
        </div>
      </a>
    </div>
  );
};
