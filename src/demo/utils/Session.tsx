import { Card, CardContent } from "@mui/material";
import Typography from "components/Typography";
import { PropsWithChildren } from "react";

interface SessionProps {
  title: string;
  elevation?: number;
  background?: "background.paper" | "background.default";
}
function Session({
  background = "background.paper",
  title,
  children,
  elevation,
}: PropsWithChildren<SessionProps>) {
  return (
    <Card sx={{ bgcolor: background }} elevation={elevation}>
      <CardContent>
        <Typography size="display" >
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default Session;
