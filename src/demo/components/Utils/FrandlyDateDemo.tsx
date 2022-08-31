import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import FriendlyDate from "components/FriendlyDate";


function FrandlyDateDemo() {
  const date = new Date();
  return (
    <Stack>
      <Typography component="div">Original value: {JSON.stringify(date)}</Typography>
      <Typography component="div">
        Friendly : <FriendlyDate date={date} />
      </Typography>
    </Stack>
  );
}

export default FrandlyDateDemo;
