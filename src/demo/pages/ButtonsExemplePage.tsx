import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { AddButton, BackButton, Button, DeleteButton } from "components/Button";
import Session from "demo/utils/Session";
import { useState } from "react";

type VariantsProps = "text" | "outlined" | "contained";
type ColorsProps =
  | "warning"
  | "success"
  | "error"
  | "info"
  | "primary"
  | "secondary"
  | "inherit";

function ButtonsExemplePage() {
  const [variant, setVariant] = useState<VariantsProps>("contained");
  const variantes: VariantsProps[] = ["text", "outlined", "contained"];

  const colors: ColorsProps[] = [
    "warning",
    "success",
    "error",
    "info",
    "primary",
    "secondary",
  ];
  return (
    <>
      <Stack spacing={2}>
        <Session title="All buttons">
          <Grid container spacing={2}>
            {colors.map((color, key) => (
              <Grid item key={key + color} xs={6}>
                <Stack spacing={2}>
                  {variantes.map((item, key) => (
                    <Button
                      key={key}
                      onClick={() => setVariant(item)}
                      size="small"
                      variant={item}
                      color={color}
                    >
                      {item}
                    </Button>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Session>
        <Session title="Utils Buttons">
          <Stack spacing={2}>
            <Stack direction="row">
              <Button variant={variant}>Simple Button</Button>
            </Stack>
            <Stack direction="row">
              <DeleteButton variant={variant} />
              <DeleteButton label="Remover" variant={variant} />
            </Stack>
            <Stack direction="row">
              <AddButton variant={variant} />
              <AddButton label="Novo" variant={variant} />
            </Stack>
            <Stack direction="row">
              <BackButton variant={variant} />
              <BackButton label="Voltar" variant={variant} />
            </Stack>
          </Stack>
        </Session>
      </Stack>
    </>
  );
}

export default ButtonsExemplePage;
