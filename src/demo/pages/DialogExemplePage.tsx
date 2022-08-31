import Stack from "@mui/material/Stack";
import { Button } from "components/Button";
import Dialog from "components/Dialog";
import FullLoading from "components/FullLoading";
import Session from "demo/utils/Session";
import { useState } from "react";

function DialogExemplePage() {
  const [open, setOpen] = useState(false);
  const [openFullLoading, setOpenFullLoading] = useState(false);
  const [openFull, setOpenFull] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpenFull(false);
    setOpen(false);
    setOpenFullLoading(false);
  };

  const handleResolve = () => {
    setLoading(true);
    setTimeout(() => {
      handleClose();
      setLoading(false);
    }, 1000);
  };

  const handleLoad = () => {
    setOpenFullLoading(true);
    setTimeout(() => {
      handleClose();
      setOpenFullLoading(false);
    }, 3000);
  };
  function MockContainer() {
    return (
      <>
        <Dialog.Title label="Demo dialog" closeButton={handleClose} />
        <Dialog.Content></Dialog.Content>
        <Dialog.BooleanAction
          onReject={handleClose}
          onResolve={handleResolve}
          rejectMsg="Fechar"
          resolveMsg="Ok"
          resolveLoading={loading}
        />
      </>
    );
  }
  return (
    <Session>
      <Stack spacing={2}>
        <Button onClick={() => setOpen(true)} color="secondary">
          Simple Dialog
        </Button>
        <Button onClick={() => setOpenFull(true)}> Full secreen Dialog </Button>
        <Button onClick={handleLoad} color="info">
          Full loading
        </Button>

        <Dialog open={openFull} fullScreen>
          <MockContainer />
        </Dialog>

        <Dialog open={open}>
          <MockContainer />
        </Dialog>

        <FullLoading open={openFullLoading} />
      </Stack>
    </Session>
  );
}

export default DialogExemplePage;
