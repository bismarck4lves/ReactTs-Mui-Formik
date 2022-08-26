import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import { Stack } from "@mui/system";
import { dark, light } from "pattens/colors";
function MainBox(props) {
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          width: 30,
          height: 30,
          background: props.color,
        }}
      />
      <Typography>{props.label}</Typography>
    </Stack>
  );
}

function Title(props) {
  return (
    <div
      style={{
        marginBottom: 20,
      }}
    >
      {props.label}
      <Divider />
    </div>
  );
}

function MapContainer(props) {
  return (
    <Card
    
    sx={{background: "#b5b5b5"}}>
      <CardContent>
        <Stack spacing={2}>
          <Title label="Light" />
          <Stack direction="row" spacing={2}>
            {props.options.map((item, key) => (
              <MainBox
                key={key}
                label={item}
                color={light.palette[props.groupKey][item]}
              />
            ))}
          </Stack>
          <Title label="Dark" />
          <Stack direction="row" spacing={2}>
            {props.options.map((item, key) => (
              <MainBox
                key={key}
                label={item}
                color={dark.palette[props.groupKey][item]}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
const common = ["black", "white"];
const background = ["paper", "default"];
const primarySecondaryError = ["light", "main", "dark", "contrastText"];
const text = ["primary", "secondary", "disabled", "hint"];

function Pallete() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Title label="Common" />
        <MapContainer groupKey="common" options={common} />
      </Grid>

      <Grid item xs={4}>
        <Title label="Background" />
        <MapContainer groupKey="background" options={background} />
      </Grid>

      <Grid item xs={4}>
        <Title label="Primary" />
        <MapContainer groupKey="primary" options={primarySecondaryError} />
      </Grid>

      <Grid item xs={4}>
        <Title label="Secondary" />
        <MapContainer groupKey="secondary" options={primarySecondaryError} />
      </Grid>

      <Grid item xs={4}>
        <Title label="Error" />
        <MapContainer groupKey="error" options={primarySecondaryError} />
      </Grid>

      <Grid item xs={4}>
        <Title label="Text" />
        <MapContainer groupKey="text" options={text} />
      </Grid>
    </Grid>
  );
}

export default Pallete;
