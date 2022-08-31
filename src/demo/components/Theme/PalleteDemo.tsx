import { Box, Theme } from "@mui/material";
import { ResponsiveStyleValue, Stack } from "@mui/system";
import Typography from "components/Typography";
import { PropsWithChildren } from "react";

interface MainBoxProps {
  description: string;
  bgColor: (theme: Theme) => ResponsiveStyleValue<any> | string;
}
function MainBox(props: MainBoxProps) {
  return (
    <div>
      <Box
        sx={{
          width: 20,
          height: 20,
          background: props.bgColor,
          border: "1px solid gray",
          borderRadius: "4px",
        }}
      />
      <Typography>{props.description}</Typography>
    </div>
  );
}

interface SubSessionProps {
  label?: string;
}
function SubSession(props: PropsWithChildren<SubSessionProps>) {
  return (
    <div>
      <Typography>{props.label}</Typography>

      <Stack direction="row" spacing={2}>
        {props.children}
      </Stack>
    </div>
  );
}
function PalleteDemo() {
  const patterMaindar = ["main", "dark", "light"];
  const commons = ["white", "black"];
  const backGrounds = ["default", "paper"];
  const texts = ["primary", "secondary", "hint", "disabled"];

  return (
    <Stack spacing={2}>
      <SubSession label="Primary">
        {patterMaindar.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.primary[item]}
            description={`primary.${item}`}
          />
        ))}
      </SubSession>

      <SubSession label="Secondary">
        {patterMaindar.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.secondary[item]}
            description={`secondary.${item}`}
          />
        ))}
      </SubSession>

      <SubSession label="Background">
        {backGrounds.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.background[item]}
            description={`background.${item}`}
          />
        ))}
      </SubSession>
      <SubSession label="Success">
        {patterMaindar.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.success[item]}
            description={`success.${item}`}
          />
        ))}
      </SubSession>

      <SubSession label="Info">
        {patterMaindar.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.info[item]}
            description={`info.${item}`}
          />
        ))}
      </SubSession>

      <SubSession label="Error">
        {patterMaindar.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.error[item]}
            description={`error.${item}`}
          />
        ))}
      </SubSession>
      <SubSession label="Warning">
        {patterMaindar.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.warning[item]}
            description={`warning.${item}`}
          />
        ))}
      </SubSession>
      <SubSession label="Common">
        {commons.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.common[item]}
            description={`common.${item}`}
          />
        ))}
      </SubSession>

      <SubSession label="Texts">
        {texts.map((item, key) => (
          <MainBox
            key={key}
            bgColor={(theme) => theme.palette.text[item]}
            description={`text.${item}`}
          />
        ))}
      </SubSession>

      <SubSession>
        <MainBox
          bgColor={(theme) => theme.palette.divider}
          description={`divider`}
        />
      </SubSession>
    </Stack>
  );
}

export default PalleteDemo;
