import { StackProps } from "@mui/system";

export interface ActionButtonProps extends StackProps {
    resolveMsg?: string;
    rejectMsg?: string;
    rejectDisabled?: boolean;
    resolveDisabled?: boolean;
    rejectLoading?: boolean;
    resolveLoading?: boolean;
    onResolve?: () => void;
    onReject?: () => void;
  }