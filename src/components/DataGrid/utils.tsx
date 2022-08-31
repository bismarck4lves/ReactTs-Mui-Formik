import { GridColDef } from "@mui/x-data-grid";


export function columnItem(props: GridColDef) {
  return {
    ...props,
    ...{ headerClassName: "super-app-theme--header" },
  };
}
