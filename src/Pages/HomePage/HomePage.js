import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";
import BarChart from "../../Components/BarChart ";
import PieCharts from "../../Components/PieChart";
import HorizontalBarChart from "../../Components/HorizontalBarChart ";
import YearLineChart from "../../Components/LineChart";

const HomePage = () => {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    endYear: "",
    topics: [],
    sector: "",
    region: "",
    pest: "",
    source: "",
    // swot: "",
    country: "",
    // city: "",
    limit: 20,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://blackcoffer-assignmneet-backend.onrender.com/", {
        params: filters,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  return (
    <>
      {data ? (
        <div className="home-page">
          <div className="filters">
            {Object.entries(filters).map(([key, value]) => (
              <div className="filter" key={key}>
                <label className="filter-label">
                  {key.charAt(0).toUpperCase() + key.slice(1)} Filter:
                </label>
                <input
                  className="filter-input"
                  type="text"
                  value={value}
                  onChange={(event) =>
                    handleFilterChange(key, event.target.value)
                  }
                />
              </div>
            ))}
            <button className="apply-button" onClick={fetchData}>
              Apply Filters
            </button>
          </div>
          <div className="charts">
            <BarChart data={data} />
            <YearLineChart data={data} />
            <PieCharts data={data} />
            <HorizontalBarChart data={data} />
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default HomePage;
