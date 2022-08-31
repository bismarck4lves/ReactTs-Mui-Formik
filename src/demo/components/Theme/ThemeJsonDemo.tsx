import { useTheme } from "@mui/material/styles";

function ThemeJsonDemo() {
  const theme = useTheme();
  return (
    <textarea
      id="json-input"
      style={{
        width: "90%",
        height: "70vh",
      }}
    >
      {JSON.stringify(theme.palette, null, 4)}
    </textarea>
  );
}

export default ThemeJsonDemo;
