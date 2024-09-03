import React from "react";
import "./style.css";

export const Homeamaris = ({ className, onClick }) => {
  return (
    <div className={`homeamaris ${className}`} onClick={onClick}>
      <div className="text-wrapper-4">Home</div>
    </div>
  );
};
