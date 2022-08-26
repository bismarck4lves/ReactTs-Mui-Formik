import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { TextField } from "./TextField";
import { TextFieldProps } from "./types_d";

type MessageFieldProps = TextFieldProps & {
  isPassword?: boolean;
  loading?: boolean;
};
export function MessageField(props: MessageFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...props}
      disabled={props.loading ? props.loading : !!props.disabled}
      type={!props.isPassword ? "text" : showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {props.isPassword && (
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )}
            {props.loading ? (
               <CircularProgress size={20} color="secondary" />
            ) : (
              <IconButton type="submit">
                <SendIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}
