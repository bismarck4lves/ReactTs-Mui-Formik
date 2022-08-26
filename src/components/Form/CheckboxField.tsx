import {
    Checkbox, FormControlLabel, FormControlLabelProps
} from "@mui/material";
import { Field } from "formik";

export function CheckboxField(props: FormControlLabelProps) {
  return (
    <Field
      name={props.name ? props.name : ""}
      {...props}
      as={FormControlLabel}
      type="checkbox"
      control={<Checkbox />}
    />
  );
}
