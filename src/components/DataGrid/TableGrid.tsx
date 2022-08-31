import { Box, Stack } from "@mui/material";
import { DataGridProps, ptBR } from "@mui/x-data-grid";
import { StyledDataGrid } from "./styles";
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
    <Box
      sx={{
        height: 300,
        width: "100%",
        border: "none",
        "& .super-app-theme--header": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack
        sx={{
          height,
          width,
        }}
        spacing={spacing}
      >
        <StyledDataGrid
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          {...props}
        />
      </Stack>
    </Box>
  );
}
