import React, { useState, useEffect } from "react"
import ChartJS from "../Charts";
import MadeData from "../Charts/Data";



const Market1 = () => {
  const [chartsToDisplay, setChartsToDisplay] = useState([]);

  const getData = async () => {
    const charts = [];
    charts.push(<ChartJS key={1} data={MadeData} />);
    setChartsToDisplay(charts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (

  <div className="bg-gray-500 mt-5">{chartsToDisplay}</div>
)
};

export default Market1;
