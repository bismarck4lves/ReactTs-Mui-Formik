import { Stack } from "@mui/system";
import { AddButton, BackButton, Button, DeleteButton } from "components/Button";
import Typography from "components/Typography";
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
function ModelButtons() {
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
        <Stack direction="row" spacing={2}>
          {colors.map((color, key) => (
            <Stack key={key + color} spacing={2}>
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
          ))}
        </Stack>
        <Typography>
          Utils Buttons
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant={variant}>Simple Button</Button>
          <DeleteButton variant={variant} />
          <DeleteButton label="Remover" variant={variant} />
          <AddButton variant={variant} />
          <AddButton label="Novo" variant={variant} />
          <BackButton variant={variant} />
          <BackButton label="Voltar" variant={variant} />
        </Stack>
      </Stack>
    </>
  );
}

export default ModelButtons;
