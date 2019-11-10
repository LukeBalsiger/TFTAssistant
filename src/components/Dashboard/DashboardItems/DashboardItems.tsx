import React from "react";
import "./DashboardItems.scss";
import ItemsTable from "../../_shared/Items/ItemsTable/ItemsTable";

const DashboardItems: React.FC = () => {
  return (
    <div className="dash-items">
      {/* <img
        src="/images/items.png"
        alt="Item Chart"
        id="item-chart-image"
        className="items-zoom"
      />*/}
      <ItemsTable />
    </div>
  );
};

export default DashboardItems;
