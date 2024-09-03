import React from "react";
import "./style.css";

export const Homebrioches = ({ className, onClick }) => {
  return (
    <div className={`homebrioches ${className}`} onClick={onClick}>
      <div className="overlap-group-3">
        <div className="text-wrapper-5">Home</div>
      </div>
    </div>
  );
};
