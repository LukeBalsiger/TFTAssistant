import React from "react";
import "./DashboardItems.scss";
import itemChart from "../../../assets/images/items.png";

const DashboardItems: React.FC = () => {
  return (
    <div className="dash-items">
      <img id="item-chart-image" src={itemChart} alt="Item Chart" />
    </div>
  );
};

export default DashboardItems;
