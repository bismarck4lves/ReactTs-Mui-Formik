import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FastButton from "./FastButton";
import { FastButtonProps } from "./types";

export const BackButton = (props: FastButtonProps) => (
  <FastButton icon={<ArrowBackIcon />} {...props} />
);
