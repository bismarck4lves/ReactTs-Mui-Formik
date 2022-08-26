import { Box, Grid, Stack, Typography } from "@mui/material";
import Footer from "components/Footer";
import GostDivider from "components/GostDivider";
import { Tab, TabContext, TabHeader, TabPanel } from "components/Tabs";
import AutoCompleteDemo from "demo/components/AutoComplete";
import FilesFields from "demo/components/FilesFields";
import FrandlyDateDemo from "demo/components/FrandlyDateDemo";
import Pallete from "demo/components/Pallete";
import RenderListExemple from "demo/components/RenderList";
import TablesExemple from "demo/components/TablesExemple";
import ThemeJson from "demo/components/ThemeJson";
import TypographyDemo from "demo/components/TypographyDemo";
import Session from "demo/utils/Session";
import Theming from "pattens/Theming";
import { useState } from "react";
import { getProjectName, getProjectVersion } from "utils/getPackage";
import Buttons from "../components/Buttons";
import Dialog from "../components/Dialog";

function UXComponents() {
  const [value, setValue] = useState("1");
  const handleChange = (_, newValue: string) => setValue(newValue);

  return (
    <Theming>
      <Box
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Session title="Patterns">
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
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Stack spacing={2}>
                  <Session title="Modals">
                    <Dialog />
                  </Session>
                  <Session title="Buttons">
                    <Buttons />
                  </Session>
                  <Session title="Forms with Formik">
                    <AutoCompleteDemo />
                  </Session>
                  <Session title="Render list">
                    <RenderListExemple />
                  </Session>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={2}>
                  <Session title="Import files">
                    <FilesFields />
                  </Session>
                  <Session title="Friendly Date">
                    <FrandlyDateDemo />
                  </Session>
                  <Session title="Data grid">
                    <TablesExemple />
                  </Session>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <GostDivider />
      </Box>
      <Footer>
        <Stack direction="row" spacing={2} alignItems="center">
          <img src="/logo.svg" />
          <Typography>
            {getProjectName} | version: {getProjectVersion}
          </Typography>
        </Stack>
      </Footer>
    </Theming>
  );
}

export default UXComponents;
