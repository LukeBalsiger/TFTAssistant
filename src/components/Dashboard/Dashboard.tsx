import React from "react";
import "./Dashboard.scss";
import DashboardClasses from "./DashboardClasses/DashboardClasses";
import DashboardLevelChart from "./DashboardLevelChart/DashboardLevelChart";
import DashboardItems from "./DashboardItems/DashboardItems";
import DashboardOrigins from "./DashboardOrigins/DashboardOrigins";

const Dashboard: React.FC = () => {
  return (
    <div className="dash">
      <DashboardLevelChart></DashboardLevelChart>
      <DashboardItems></DashboardItems>
      <DashboardClasses></DashboardClasses>
      <DashboardOrigins></DashboardOrigins>
    </div>
  );
};

export default Dashboard;
