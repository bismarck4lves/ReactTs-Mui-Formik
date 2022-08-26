import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

export function Button({
  variant = "contained",
  type = "button",
  ...rest
}: LoadingButtonProps) {
  return (
    <LoadingButton
      {...rest}
      sx={{
        textTransform: "none",
        fontWeight: 700,
      }}
      variant={variant}
      type={type}
    />
  );
}

Button;
