import { useTheme } from "@mui/material/styles";
import Typography from "components/Typography";

function ThemeJson() {
  const theme = useTheme();
  return (
    <div>
      <Typography>Palette</Typography>
      {JSON.stringify(theme.palette, null, 4)}
    </div>
  );
}

export default ThemeJson;
