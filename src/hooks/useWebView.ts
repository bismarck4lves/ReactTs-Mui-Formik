import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


export function useWebView() {
    const theme = useTheme();
    const isMobile = !useMediaQuery(theme.breakpoints.up("sm"));
    return { isMobile }
}


