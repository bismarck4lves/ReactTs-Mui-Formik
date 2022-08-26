import { Theme } from "@mui/material";

export const appColors = {
  white: "#FFFFFF",
  black: "#000000",
  blackAlpha: {
    50: "#666B77",
    150: "#20304D",
  },
  teal: {
    50: "#D6EDF3",
    150: "#0091B3",
  },
  green: {
    50: "#EDFAF3",
    100: "#20BF6B",
  },
  red: {
    50: "#FCE0E5",
    100: "#EB3B5A",
  },
  whiteAlpha: {
    50: "#F0F2F5",
    100: "#E2E6EC",
  },
  gray: {
    50: "#CCC",
    100: "#999999",
  },
  yellow: {
    50: "#FEF3DE",
    100: "#F7B731",
  },
  blueViolet: {
    50: "#EBDCFF",
    100: "#8027FF",
    150: "#5B0BCE",
  },
  contrast: {
    white: "#FFFFFF",
    black: "#000000de",
  },
};

export const light = {
  palette: {
    mode: "light" as "light",
    primary: {
      main: appColors.blueViolet[100],
      light: appColors.blueViolet[50],
      dark: appColors.blueViolet[150],
      contrastText: appColors.contrast.white,
    },
    secondary: {
      main: appColors.whiteAlpha[100],
      light: "#E7EBEF",
      dark: "#9EA1A5",
      contrastText: appColors.contrast.black,
    },
    background: {
      default: appColors.whiteAlpha[50],
      paper: appColors.white,
    },
    success: {
      main: appColors.green[100],
      light: appColors.green[50],
      dark: "#16854A",
      contrastText: appColors.contrast.white,
    },
    error: {
      main: appColors.red[100],
      light: appColors.red[50],
      dark: "#A4293E",
      contrastText: appColors.contrast.white,
    },
    divider: appColors.whiteAlpha[50],
    text: {
      primary: appColors.blackAlpha[50],
      secondary: "#ffffffb3",
      hint: "#ffffff80",
      disabled: "#ffffff80",
    },
    warning: {
      main: appColors.yellow[100],
      dark: "AC8022",
      light: appColors.yellow[50],
      contrastText: appColors.contrast.black,
    },
    info: {
      main: "#2196F3",
      dark: "1769AA",
      light: "#4DABF5",
      contrastText: appColors.contrast.white,
    },
    common: {
      white: appColors.white,
      black: "#000000",
    },
  },
};

export const dark = {} as Theme;
