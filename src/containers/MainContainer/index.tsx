import Box from "@mui/material/Box";
import Theming from "pattens/Theming";
import { Outlet } from "react-router-dom";
import MainAppBar from "./MainAppBar";
import Menu from "./Menu";
import { Drawer } from "./styles";

export default function MiniDrawer() {
  return (
    <Theming>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent">
          <Menu />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <MainAppBar />
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Theming>
  );
}
