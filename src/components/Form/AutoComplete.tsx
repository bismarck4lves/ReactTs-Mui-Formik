import {
  Autocomplete as MuiAutocomplete
} from "@mui/material";
import { TextField } from "components/custom/TextField";
import { textFieldBaseProperties } from "./contants";
import { TextFieldProps } from "./types_d";

type CustomAutoComplete = TextFieldProps & {
  getOptionLabel: (val: any) => string;
  options: any[];
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  onCustomChange?: (values: any) => any;
  itemValue: (props) => string;
};

export function AutoComplete({
  name,
  label,
  itemValue,
  setFieldValue,
  options,
  getOptionLabel,
}: CustomAutoComplete) {
  const autoCompleteProperties = {
    options,
    getOptionLabel,
  };
  return (
    <MuiAutocomplete
      {...autoCompleteProperties}
      onChange={(_, value: any) => setFieldValue(name, itemValue(value))}
      renderInput={(params) => (
        <TextField
          name={name}
          label={label}
          {...params}
          {...textFieldBaseProperties}
        />
      )}
    />
  );
}
