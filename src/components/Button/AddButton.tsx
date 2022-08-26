import AddCircleIcon from "@mui/icons-material/AddCircle";
import FastButton from "./FastButton";
import { FastButtonProps } from "./types";

export const AddButton = (props: FastButtonProps) => (
  <FastButton icon={<AddCircleIcon />} {...props} />
);
