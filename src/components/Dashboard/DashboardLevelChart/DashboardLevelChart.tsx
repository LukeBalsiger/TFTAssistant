import React from "react";
import "./DashboardLevelChart.scss";
// import LevelGrid from "./LevelGrid/LevelGrid";
import LevelTable from "./LevelTable/LevelTable";

const DashboardLevelChart: React.FC = () => {
  return (
    <div className="dash-level-chart">
      <LevelTable />
      {/*<LevelGrid />*/}
    </div>
  );
};

export default DashboardLevelChart;
