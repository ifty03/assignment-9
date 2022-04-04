import React from "react";
import { Slide } from "react-reveal";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../hooks/chart";

const Chart3 = () => {
  const [data, setData] = useChart();
  return (
    <Slide bottom>
      <div className="shadow-lg p-3 rounded-md">
        <h1 className="text-3xl text-purple-700 font-sans font-bold my-6">
          Line Chart
        </h1>
        <ResponsiveContainer height={400} width="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Slide>
  );
};

export default Chart3;
