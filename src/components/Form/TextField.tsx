import { BaseTextField } from "./BaseTextField";
import { MaskedField } from "./MaskedField";
import { TextFieldProps } from "./types_d";

export function TextField(props: TextFieldProps) {
  return props.mask ? <MaskedField {...props} /> : <BaseTextField {...props} />;
}