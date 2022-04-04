import React from "react";
import { Slide } from "react-reveal";
import useChart from "../../hooks/chart";

const Chart4 = () => {
  const [data, setData] = useChart();
  return (
    <Slide right>
      <div>
        <h1 className="text-3xl text-purple-700 font-sans font-bold my-6">
          Line Chart
        </h1>
      </div>
    </Slide>
  );
};

export default Chart4;
