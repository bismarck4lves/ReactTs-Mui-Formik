import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/system";
import UserLoggedInProfile from "./UserLoggedInProfile";

export default function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <img src="/logo.svg" width="170" />
            <UserLoggedInProfile />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
