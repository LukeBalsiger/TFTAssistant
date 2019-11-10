import React from "react";
import "./DashboardItems.scss";
// import ItemGridNoText from "components/_shared/ItemGridNoText/ItemGridNoText";

const DashboardItems: React.FC = () => {
  return (
    <div className="dash-items">
      <img
        src="/images/items.png"
        alt="Item Chart"
        id="item-chart-image"
        className="items-zoom"
      />
      {/* TODO: Custom make grid using <ItemGridNoText />*/}
    </div>
  );
};

export default DashboardItems;
