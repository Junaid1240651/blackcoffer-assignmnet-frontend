import React from "react";
import { Line } from "react-chartjs-2";

const YearLineChart = (props) => {
  const data = props.data;

  const createChartData = (data) => {
    const dataByYear = {};

    data.forEach((item) => {
      if (item.published) {
        const year = item.published.split(",")[1]?.trim() || "Unknown";
        if (!dataByYear[year]) {
          dataByYear[year] = [];
        }
        dataByYear[year].push(item);
      }
    });

    const years = Object.keys(dataByYear);
    const intensityData = years.map((year) => {
      const averageIntensity =
        dataByYear[year].reduce((sum, item) => sum + item.intensity, 0) /
        dataByYear[year].length;
      return parseFloat(averageIntensity.toFixed(2));
    });

    return {
      labels: years,
      datasets: [
        {
          label: "Average Intensity",
          data: intensityData,
          borderColor: "blue",
          fill: false,
        },
      ],
    };
  };

  return (
    <div>
      <h1>Line Chart</h1>
      <Line data={createChartData(data)} />
    </div>
  );
};

export default YearLineChart;
