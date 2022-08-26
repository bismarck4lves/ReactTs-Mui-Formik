import {
  TextFieldProps as TextFieldBaseProps
} from "@mui/material";

type MaskDefinition = string | RegExp | (string | RegExp)[];

export type BaseFieldProps = TextFieldBaseProps & {
  label?: string;
  mask?: MaskDefinition;
};

export type TextFieldProps = BaseFieldProps & {
  label?: string;
  mask?: MaskDefinition;
};

export type  SelectFieldProps = Omit<TextFieldProps, "variant"> & {
  label?: string;
  options: any[];
  itemValue: string;
  displayFn: (val?) => string;
  onSelect?:(val?) =>  any
}
