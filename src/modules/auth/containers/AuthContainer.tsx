import { Stack } from "@mui/material";
import Theming from "pattens/Theming";
import React from "react";
import { Outlet } from "react-router-dom";

function AuthContainer() {
  return (
    <Theming>
      <React.Fragment>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ height: "100vh" }}
        >
          <Outlet />
        </Stack>
      </React.Fragment>
    </Theming>
  );
}

export default AuthContainer;
