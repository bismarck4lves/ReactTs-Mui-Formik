import InputBase from '@mui/material/InputBase';
import { alpha, styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { appColors } from "pattens/colors";
export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "& .MuiDataGrid-cell": {
    background: theme.palette.background.paper,
  },
  "& .MuiDataGrid-footerContainer": {
    background: "white",
    borderRadius: "0px 0px 4px 4px",
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: appColors.blackAlpha[50],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: appColors.whiteAlpha[100],
  "&:hover": {
    backgroundColor: alpha(appColors.whiteAlpha[100], 0.90),
  },
  // marginRight: theme.spacing(2),
  // marginLeft: 0,
  // width: "100%",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // width: "100%",
  },
}));
