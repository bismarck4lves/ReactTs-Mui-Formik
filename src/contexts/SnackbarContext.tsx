import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {
  createContext,
  forwardRef,
  PropsWithChildren, useContext, useState
} from "react";

interface AlertOptionsProps {
  open: boolean;
  message: string;
  variant: "success" | "error" | "warning" | "info";
}
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ContextProps {
  snackError(message: any, error?): void;
  snackSuccess(message: any): void;
}

const Context = createContext({} as ContextProps);

export function SnackbarsProvider({ children }: PropsWithChildren) {
  const [snackBar, setSnackBar] = useState({} as AlertOptionsProps);

  function snackError(message, error) {
    setSnackBar({
      open: true,
      message,
      variant: "error",
    });
    if (error) {
      console.error(error)
    }
  }

  function snackSuccess(message) {
    setSnackBar({
      open: true,
      message,
      variant: "success",
    });
  }
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar({
      open: false,
      message: "",
      variant: "error",
    });
  };

  return (
    <Context.Provider
      value={{
        snackError,
        snackSuccess,
      }}
    >
      <>
        {children}
        <Snackbar
          open={snackBar?.open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={snackBar?.variant}
            sx={{ width: "100%" }}
          >
            {snackBar?.message}
          </Alert>
        </Snackbar>
      </>
    </Context.Provider>
  );
}

export function useSnackbarContext() {
  return useContext(Context);
}
