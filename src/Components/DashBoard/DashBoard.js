import React from "react";
import Chart1 from "./Chart1/Chart1";
import Chart2 from "./Chart2/Chart2";
import Chart3 from "./Chart3/Chart3";
import Chart4 from "./Chart4/Chart4";

const DashBoard = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 w-4/5 mx-auto gap-6 mt-4 grid-cols-1">
        <Chart1></Chart1>
        <Chart2></Chart2>
        <Chart3></Chart3>
        <Chart4></Chart4>
      </div>
    </div>
  );
};

export default DashBoard;
