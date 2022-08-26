import { Stack, StackProps } from "@mui/system";

interface GostDividerProps extends StackProps {
  height?: number;
}
function GostDivider({ height = 40, ...rest }: GostDividerProps) {
  return <Stack {...rest} style={{ padding: 40 }}></Stack>;
}

export default GostDivider;
