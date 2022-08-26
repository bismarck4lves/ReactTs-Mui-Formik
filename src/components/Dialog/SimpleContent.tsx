import DialogContent, { DialogContentProps } from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";

interface SimpleContentProps extends DialogContentProps {
  deepDark?: boolean;
}
const SimpleContent: React.FC<SimpleContentProps> = ({
  children,
  dividers = true,
  deepDark,
  ...rest
}) => {
  return (
    <DialogContent dividers={dividers} {...rest}>
      <DialogContentText>{children}</DialogContentText>
    </DialogContent>
  );
};

export default SimpleContent;
