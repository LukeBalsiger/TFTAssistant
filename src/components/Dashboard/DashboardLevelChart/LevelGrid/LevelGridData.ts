const columnDefs = [
  {
    headerName: "Level",
    field: "level"
  },
  {
    headerName: "Tier 1",
    field: "tier1"
  },
  {
    headerName: "Tier 2",
    field: "tier2"
  },
  {
    headerName: "Tier 3",
    field: "tier3"
  },
  {
    headerName: "Tier 4",
    field: "tier4"
  },
  {
    headerName: "Tier 5",
    field: "tier5"
  }
];
const rowData = [
  {
    level: "Lvl 2",
    tier1: "100%",
    tier2: "-",
    tier3: "-",
    tier4: "-",
    tier5: "-"
  },
  {
    level: "Lvl 3",
    tier1: "70%",
    tier2: "25%",
    tier3: "5%",
    tier4: "-",
    tier5: "-"
  },
  {
    level: "Lvl 4",
    tier1: "50%",
    tier2: "35%",
    tier3: "15%",
    tier4: "-",
    tier5: "-"
  },
  {
    level: "Lvl 5",
    tier1: "35%",
    tier2: "35%",
    tier3: "25%",
    tier4: "5%",
    tier5: "-"
  },
  {
    level: "Lvl 6",
    tier1: "25%",
    tier2: "35%",
    tier3: "30%",
    tier4: "10%",
    tier5: "-"
  },
  {
    level: "Lvl 7",
    tier1: "20%",
    tier2: "30%",
    tier3: "33%",
    tier4: "15%",
    tier5: "2%"
  },
  {
    level: "Lvl 8",
    tier1: "15%",
    tier2: "20%",
    tier3: "35%",
    tier4: "24%",
    tier5: "6%"
  },
  {
    level: "Lvl 9",
    tier1: "10%",
    tier2: "15%",
    tier3: "30%",
    tier4: "30%",
    tier5: "15%"
  },
  {
    level: "# in pool",
    tier1: "29",
    tier2: "22",
    tier3: "16",
    tier4: "12",
    tier5: "10"
  }
];

export const gridOptions = {
  defaultColDef: {
    sortable: false,
    editable: false,
    suppressMovable: true
  },
  columnDefs: columnDefs,
  rowData: rowData
};
