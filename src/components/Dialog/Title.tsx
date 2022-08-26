import CloseIcon from "@mui/icons-material/Close";
import { DialogTitle, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";

interface TitleProps {
  label?: string;
  component?: React.ReactNode;
  closeButton?: () => void;
}
function Title({ label, component, closeButton }: TitleProps) {
  function TitleContent() {
    return component ? (
      <>{component}</>
    ) : (
      <Typography fontWeight={700}>{label}</Typography>
    );
  }
  return (
    <DialogTitle>
      <Stack direction="row" justifyContent="space-between">
        <TitleContent />
        {closeButton && (
          <IconButton
            color="secondary"
            onClick={closeButton}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Stack>
    </DialogTitle>
  );
}

export default Title;
