import { IconButton } from "@mui/material";
import { Button } from "components/custom/Buttom";
import { FastButtonProps } from "./types";


function FastButton(props: FastButtonProps) {
  return props.label ? (
    <Button startIcon={props.icon} {...props}> {props.label} </Button>
  ) : (
    <IconButton {...props}>{props.icon}</IconButton>
  );
}

export default FastButton;
