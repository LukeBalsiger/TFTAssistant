import React from "react";
import "./DashboardClasses.scss";

const DashboardClasses: React.FC = () => {
  return (
    <div className="dash-classes">
      <img
        src="/images/classes.png"
        alt="Level Chart"
        id="classes-chart-image"
        className="classes-zoom"
      />
    </div>
  );
};

export default DashboardClasses;
