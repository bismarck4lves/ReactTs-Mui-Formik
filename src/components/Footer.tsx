// import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { PropsWithChildren } from "react";

export default function Footer({ children }: PropsWithChildren) {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
