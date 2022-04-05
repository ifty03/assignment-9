import React from "react";
import { Slide } from "react-reveal";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../hooks/chart";

const Chart2 = () => {
  const [data, setData] = useChart();
  return (
    <Slide top>
      <div className="shadow-lg p-3 rounded-md">
        <h1 className="text-3xl text-purple-700 font-sans font-bold my-6">
          Area Chart
        </h1>
        <ResponsiveContainer width="100%" height={380}>
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
        </ResponsiveContainer>
      </div>
    </Slide>
  );
};

export default Chart2;
