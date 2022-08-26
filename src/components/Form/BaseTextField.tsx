import { TextField } from "components/custom/TextField";
import { Field } from "formik";
import { TextFieldProps } from "./types_d";

export function BaseTextField(props: TextFieldProps) {
  return (
    <Field name={props.name ? props.name : ""}>
      {({ field, form: { touched, errors } }) => (
        <TextField
          {...field}
          {...props}
          error={touched[field.name] && errors[field.name]}
          helperText={
            touched[field.name] && errors[field.name]
              ? errors[field.name]
              : null
          }
        />
      )}
    </Field>
  );
}
