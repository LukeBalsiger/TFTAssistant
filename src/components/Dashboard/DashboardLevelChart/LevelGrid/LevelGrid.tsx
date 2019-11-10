import React from "react";
import { AgGridReact } from "ag-grid-react";
import "../../../../ag-grid-theme.scss";
import { GridReadyEvent } from "ag-grid-community";
import { gridOptions } from "./LevelGridData";

const LevelGrid: React.FC = () => {
  function onGridReady(params: GridReadyEvent): void {
    params.api.sizeColumnsToFit();
  }

  return (
    <div className="ag-theme-bootstrap">
      <AgGridReact
        gridOptions={gridOptions}
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
};

export default LevelGrid;
