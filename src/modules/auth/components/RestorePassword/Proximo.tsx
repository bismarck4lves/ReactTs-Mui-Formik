import { Button, ButtonProps } from "components/Button";

function Proximo(props: ButtonProps) {
  return (
    <Button {...props} type="submit" fullWidth>
      Proximo
    </Button>
  );
}

export default Proximo;
