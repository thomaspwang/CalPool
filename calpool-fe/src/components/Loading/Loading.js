import React from "react";
import "./Loading.css";

const Loading = ({ radius = "30px" }) => {
  const dotStyle1 = { animationDelay: "0s", width: radius, height: radius };
  const dotStyle2 = { animationDelay: "0.1s", width: radius, height: radius };
  const dotStyle3 = { animationDelay: "0.2s", width: radius, height: radius };

  return (
    <h1 className="bound-box">
      <div className="dot" style={dotStyle1} />
      <div className="dot" style={dotStyle2} />
      <div className="dot" style={dotStyle3} />
    </h1>
  );
};

export default Loading;
