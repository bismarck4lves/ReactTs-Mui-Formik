import { TextField } from "./TextField";
import { TextFieldProps } from "./types_d";

export function TextArea({ minRows = 4, ...rest }: TextFieldProps) {
  return <TextField multiline minRows={minRows} {...rest} />;
}

