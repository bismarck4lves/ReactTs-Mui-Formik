import { TextField as OriginalTextField, Theme } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { TextFieldProps } from "./types";

export const textFieldBaseProperties = {
  fullWidth: true,
  variant: "outlined" as "outlined",
  size: "small" as "small",
};

export function TextField(props: TextFieldProps) {
  const color = (theme: Theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.common.white
      : theme.palette.secondary.main;

  return (
    <OriginalTextField
      {...props}
      {...textFieldBaseProperties}
      InputLabelProps={{
        sx: {
          [`&.${inputLabelClasses.shrink}`]: {
            color,
          },
        },
        shrink: true,
      }}
      sx={{
        color: color,
        borderColor: color,
        "& .MuiSvgIcon-root": {
          color: color,
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: color,
          },
          "&:hover fieldset": {
            borderColor: color,
          },
          "&.Mui-focused fieldset": {
            borderColor: color,
          },
        },
      }}
    />
  );
}
