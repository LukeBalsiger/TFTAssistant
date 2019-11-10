import React from "react";
import "./DashboardElements.scss";

const DashboardElements: React.FC = () => {
  return (
    <div className="dash-elements">
      <img
        src="/images/elements.png"
        alt="Elements"
        id="elements-image"
        className="elements-zoom"
      />
    </div>
  );
};

export default DashboardElements;
