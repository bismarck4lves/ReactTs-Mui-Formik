import DeleteIcon from "@mui/icons-material/Delete";
import FastButton from "./FastButton";
import { FastButtonProps } from "./types";

export const DeleteButton = (props: FastButtonProps) => (
  <FastButton icon={<DeleteIcon />} {...props} />
);
