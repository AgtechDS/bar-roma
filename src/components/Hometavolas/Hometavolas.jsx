import React from "react";
import "./style.css";

export const Hometavolas = ({ className, onClick }) => {
  return (
    <div className={`hometavolas ${className}`} onClick={onClick}>
      <div className="text-wrapper-3">Home</div>
    </div>
  );
};
