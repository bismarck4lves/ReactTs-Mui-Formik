import {
  TabList
} from "@material-ui/lab";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { HeaderProps } from "./types";

export function TabHeader(props: HeaderProps) {
    const theme = useTheme();
  
    return (
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          {...props}
          TabIndicatorProps={{
            style: {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          {props.children}
        </TabList>
      </Box>
    );
  }
  