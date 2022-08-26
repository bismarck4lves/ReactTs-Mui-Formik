import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "components/custom/TextField";
import { Field } from "formik";
import { TextFieldProps } from "./types_d";

type SearchFieldProps = TextFieldProps & {
  onSearch?: (val?: any) => any;
  onClear?: (val?: any) => any;
};
export function SearchField(props: SearchFieldProps) {
  return (
    <Field name={props.name}>
      {({ field, form: { touched, errors, setFieldValue } }) => (
        <TextField
          {...field}
          {...props}
          error={touched[field.name] && errors[field.name]}
          helperText={
            touched[field.name] && errors[field.name]
              ? errors[field.name]
              : null
          }
          onKeyUp={props.onSearch}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {field.value && (
                  <IconButton
                    type="submit"
                    onClick={() => {
                      setFieldValue(field.name, "");
                      props.onClear();
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </Field>
  );
}
