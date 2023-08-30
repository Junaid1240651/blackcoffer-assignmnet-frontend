import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

function BarChart(props) {
  const data = props.data;

  const chartData = {
    labels: data.map((data) => data.source),
    datasets: [
      {
        label: "Intensity",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        data: data.map((data) => data.intensity),
      },
      {
        label: "Based on relevance",
        backgroundColor: "blue",
        borderColor: "black",
        data: data.map((el) => el.relevance),
      },
      {
        label: "Likelihood",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        data: data.map((data) => data.likelihood),
      },
    ],
  };
  const chartOptions = {
    indexAxis: "x",
    responsive: true,
  };

  return (
    <div>
      <div>
        <h1>Bar Chart</h1>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default BarChart;
