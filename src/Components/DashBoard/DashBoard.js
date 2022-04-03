import React from "react";
import Chart1 from "./Chart1/Chart1";
import Chart2 from "./Chart2/Chart2";
import Chart3 from "./Chart3/Chart3";

const DashBoard = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 w-4/5 mx-auto">
        <Chart1></Chart1>
        <Chart2></Chart2>
        <Chart3></Chart3>
      </div>
    </div>
  );
};

export default DashBoard;
