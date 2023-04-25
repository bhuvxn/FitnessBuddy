import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const CircleChart = ( {value}, {text}) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar />
    </div>
  );
};

export default CircleChart;
