import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../hooks/chart";

const Chart2 = () => {
  const [data, setData] = useChart();
  return (
    <div>
      <h1 className="text-3xl text-purple-700 font-sans font-bold my-6">
        Area Chart
      </h1>
      <AreaChart width={450} height={380} data={data} barSize={20}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <ReferenceLine x="May" stroke="green" label="Min PAGE" />
        <ReferenceLine
          y={4000}
          label="Max"
          stroke="red"
          strokeDasharray="3 3"
        />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#8884d8"
          fill="#800080"
        />
      </AreaChart>
    </div>
  );
};

export default Chart2;
