import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { DialogTitle, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";

interface TitleProps {
  label?: string;
  component?: React.ReactNode;
  backButton?: () => void;
  closeButton?: () => void;
}
function Title({ label, component, closeButton, backButton }: TitleProps) {
  function TitleContent() {
    return component ? (
      <>{component}</>
    ) : (
      <Typography fontWeight={700}>{label}</Typography>
    );
  }
  return (
    <DialogTitle>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          {backButton && (
            <IconButton color="primary" onClick={backButton}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <TitleContent />
        </Stack>
        {closeButton && (
          <IconButton color="primary" onClick={closeButton}>
            <CloseIcon />
          </IconButton>
        )}
      </Stack>
    </DialogTitle>
  );
}

export default Title;
