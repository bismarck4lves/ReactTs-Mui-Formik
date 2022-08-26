import { useTheme } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { light } from "pattens/colors";
import typography from "pattens/typography";
import React, { PropsWithChildren } from "react";

interface ThemingProps {
  dark?: boolean;
}
function Theming(props: PropsWithChildren<ThemingProps>) {
  // const theme = props.dark ? dark : light;
  const currentTheme = useTheme();
  const themePallete = React.useMemo(
    () => createTheme({ ...currentTheme, ...light, ...typography }),
    []
  );
  return <ThemeProvider theme={themePallete}>{props.children}</ThemeProvider>;
}

export default Theming;
