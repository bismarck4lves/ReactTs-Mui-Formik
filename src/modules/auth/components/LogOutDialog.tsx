import { Stack, Typography } from "@mui/material";
import Dialog from "components/Dialog";
import Theming from "pattens/Theming";
import { useAuthContext } from "../contexts/AuthContext";

function LogOutDialog() {
  const [{ dialogLogout }, { setDialogLogout, logOut }] = useAuthContext();

  const onHandleClose = () => {
    setDialogLogout(false);
  };

  const onHandleConfirm = () => {
    logOut();
    onHandleClose();
  };

  return (
    <Theming>
      <Dialog open={dialogLogout}>
        <Dialog.Content>
          <Stack spacing={2}>
            <Typography variant="h6" component="div" align="center">
              Poxa que pena! :(
            </Typography>
            <Typography paragraph align="center">
              Você realmente deseja sair da plataforma?
            </Typography>
          </Stack>
        </Dialog.Content>
        <Dialog.BooleanAction
          onResolve={onHandleConfirm}
          onReject={onHandleClose}
        />
      </Dialog>
    </Theming>
  );
}

export default LogOutDialog;
