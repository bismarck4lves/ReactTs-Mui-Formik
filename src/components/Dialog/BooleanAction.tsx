import { CardContent } from "@mui/material";
import ActionButton, { ActionButtonProps } from "../ActionButton";

const BooleanAction = (props: ActionButtonProps) => (
  <CardContent>
    <ActionButton {...props} />
  </CardContent>
);

export default BooleanAction;
