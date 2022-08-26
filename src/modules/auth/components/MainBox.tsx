import { Card } from "@material-ui/core";
import { CardContent, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

function MainBox(props: PropsWithChildren) {
  return (
    <>
      <Stack>
        <img src="/logo.svg" width="200"/>
      </Stack>
      <Card style={{ width: 300 }}>
        <CardContent>
          <Stack spacing={2} alignItems="center">
            {props.children}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default MainBox;
