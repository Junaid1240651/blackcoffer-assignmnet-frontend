import React from "react";
import { Pie } from "react-chartjs-2";

const PieCharts = (props) => {
  const data = props.data;

  const createPieChartData = (data, key) => {
    const counts = {};
    data.forEach((item) => {
      const value = item[key] || "Unknown";
      counts[value] = (counts[value] || 0) + 1;
    });

    const labels = Object.keys(counts);
    const chartData = labels.map((label) => counts[label]);

    return {
      labels: labels,
      datasets: [
        {
          data: chartData,
          backgroundColor: ["red", "blue", "green"],
        },
      ],
    };
  };

  return (
    <div>
      <div className="chart-container">
        <h2>Country Pie Chart</h2>
        <Pie
          data={createPieChartData(data, "country")}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default PieCharts;
