import React from "react";
import { Slide } from "react-reveal";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../hooks/chart";

const Chart4 = () => {
  const [data, setData] = useChart();
  return (
    <Slide right>
      <div className="shadow-lg p-3 rounded-md">
        <h1 className="text-3xl text-purple-700 font-sans font-bold my-6">
          Pie Chart
        </h1>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Tooltip />
            <Pie
              data={data}
              dataKey="revenue"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="investment"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Slide>
  );
};

export default Chart4;
