import React from "react";
import { Bar } from "react-chartjs-2";

const HorizontalBarChart = (props) => {
  const data = props.data;

  const createChart = () => {
    const topicsCount = {};
    data.forEach((item) => {
      const topic = item.topic || "Unknown";
      topicsCount[topic] = (topicsCount[topic] || 0) + 1;
    });

    const topicLabels = Object.keys(topicsCount);
    const topicData = topicLabels.map((label) => topicsCount[label]);

    const chartData = {
      labels: topicLabels,
      datasets: [
        {
          label: "Topic Frequency",
          data: topicData,
          backgroundColor: "blue",
        },
      ],
    };

    const chartOptions = {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return (
      <div>
        <h2>Topics Horizontal Bar Chart</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    );
  };

  return data.length > 0 ? createChart() : <p>Loading data...</p>;
};

export default HorizontalBarChart;
