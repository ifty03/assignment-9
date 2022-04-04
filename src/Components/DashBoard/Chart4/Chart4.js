import React from "react";
import useChart from "../../hooks/chart";

const Chart4 = () => {
  const [data, setData] = useChart();
  return (
    <div>
      <h1 className="text-3xl text-purple-700 font-sans font-bold my-6">
        Line Chart
      </h1>
    </div>
  );
};

export default Chart4;
