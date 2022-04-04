import React from "react";
import { Slide } from "react-reveal";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../hooks/chart";

const Chart1 = () => {
  const [data, setData] = useChart();
  return (
    <Slide left>
      <div className="shadow-lg p-3 rounded-md">
        <h1 className="text-3xl text-purple-700 font-sans font-bold my-6">
          Bar Chart
        </h1>
        <BarChart width={450} height={400} data={data} barSize={20}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey={"revenue"}
            fill="#8884d8"
            background={{ fill: "#eee" }}
          />
          <Bar
            dataKey={"investment"}
            fill="#800080"
            background={{ fill: "#eee" }}
          />
          <Bar dataKey={"sell"} fill="#0000FF" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </Slide>
  );
};

export default Chart1;
