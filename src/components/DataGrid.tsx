import { Stack } from "@mui/material";
import {
  DataGrid as MUIDataGrid, DataGridProps, ptBR
} from "@mui/x-data-grid";

type CustomDataGridProps = DataGridProps & {
  height?: string | number;
  width?: string | number;
  spacing?: number;
};
export function DataGrid({
  height = "70vh",
  width = "100%",
  spacing = 2,
  ...props
}: CustomDataGridProps) {
  return (
    <Stack
      sx={{
        height,
        width,
      }}
      spacing={spacing}
    >
      <MUIDataGrid
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        {...props}
      />
    </Stack>
  );
}