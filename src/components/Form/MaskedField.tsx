import { TextField } from "components/custom/TextField";
import { Field } from "formik";
import ReactInputMask from "react-input-mask";
import { TextFieldProps } from "./types_d";

export function MaskedField(props: TextFieldProps) {
  return (
    <Field name={props.name}>
      {({ field, form: { touched, errors } }) => (
        <ReactInputMask mask={props.mask} {...field} {...props}>
          {(inputProps) => (
            <TextField
              {...inputProps}
              error={touched[field.name] && errors[field.name]}
              helperText={
                touched[field.name] && errors[field.name]
                  ? errors[field.name]
                  : null
              }
            />
          )}
        </ReactInputMask>
      )}
    </Field>
  );
}
