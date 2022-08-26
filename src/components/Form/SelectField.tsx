import MenuItem from "@mui/material/MenuItem";
import { TextField } from "./TextField";
import { SelectFieldProps } from "./types_d";

export function SelectField({
  label,
  options,
  itemValue,
  displayFn,
  onSelect,
  ...rest
}: SelectFieldProps) {
  return (
    <TextField select {...rest} label={label}>
      {options.map((item, key) => (
        <MenuItem key={key} value={item[itemValue]} onClick={onSelect}>
          {displayFn(item)}
        </MenuItem>
      ))}
    </TextField>
  );
}
