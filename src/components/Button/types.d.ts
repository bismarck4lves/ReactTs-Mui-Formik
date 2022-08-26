import { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { ReactNode } from "react";

export interface FastButtonProps extends LoadingButtonProps {
  label?: string;
  icon?: ReactNode;
}