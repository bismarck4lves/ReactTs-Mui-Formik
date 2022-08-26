import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import { fonSizes, fontWeight } from "pattens/typography";

type CustomTypography = TypographyProps & {
  size?: keyof typeof fonSizes;
  weight?: keyof typeof fontWeight;
}
function Typography({
  size = "xs",
  weight = "medium",
  ...rest
}: CustomTypography) {
  return (
    <MuiTypography
      {...rest}
      fontSize={fonSizes[size]}
      fontWeight={fontWeight[weight]}
    />
  );
}

export default Typography;
