import { Box } from "@mui/material";
import GostDivider from "components/GostDivider";
import { Tab, TabContext, TabHeader, TabPanel } from "components/Tabs";
import Pallete from "demo/components/Theme/PalleteDemo";
import ThemeJson from "demo/components/Theme/ThemeJsonDemo";
import TypographyDemo from "demo/components/Theme/TypographyDemo";
import Session from "demo/utils/Session";
import { useState } from "react";

function ThemeExemplePage() {
  const [value, setValue] = useState("1");
  const handleChange = (_, newValue: string) => setValue(newValue);

  return (
    <Session>
      <TabContext value={value}>
        <TabHeader onChange={handleChange}>
          <Tab label="Pallete" value="1" />
          <Tab label="Typography" value="2" />
          <Tab label="Settings" value="3" />
        </TabHeader>
        <TabPanel value="1">
          <Box
            sx={{
              height: "75vh",
              overflow: "auto",
            }}
          >
            <Pallete />
            <GostDivider />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <TypographyDemo />
        </TabPanel>
        <TabPanel value="3">
          <Box
            sx={{
              height: "75vh",
              overflow: "auto",
            }}
          >
            <ThemeJson />
          </Box>
        </TabPanel>
      </TabContext>
    </Session>
  );
}

export default ThemeExemplePage;
