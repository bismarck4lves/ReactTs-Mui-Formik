import { Stack } from "@mui/material";
import { Button } from "components/Button";
import { ActionButtonProps } from "./types_d";
export type { ActionButtonProps };

function ActionButton({
  resolveMsg = "Sim",
  rejectMsg = "Não",
  rejectLoading,
  resolveLoading,
  rejectDisabled,
  resolveDisabled,
  justifyContent = "flex-end",
  onResolve,
  onReject,
}: ActionButtonProps) {
  return (
    <Stack direction="row" justifyContent={justifyContent} spacing={2}>
      {onReject && (
        <Button
          variant="text"
          onClick={onReject}
          loading={rejectLoading}
          disabled={rejectDisabled}
        >
          {rejectMsg}
        </Button>
      )}

      {onResolve && (
        <Button
          onClick={onResolve}
          loading={resolveLoading}
          disabled={resolveDisabled}
        >
          {resolveMsg}
        </Button>
      )}
    </Stack>
  );
}

export default ActionButton;
