import MuiDialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import BooleanAction from "./BooleanAction";
import SimpleContent from "./SimpleContent";
import Title from "./Title";
import Transition from "./Transition";
import { CustomTransitionProps } from "./types_d";

interface CustomDialogProps extends DialogProps, CustomTransitionProps {
  width?: number;
  height?: number;
}

type CustomDialogType = React.FC<CustomDialogProps> & {
  Title: typeof Title;
  Content: typeof SimpleContent;
  Actions: typeof DialogActions;
  BooleanAction: typeof BooleanAction;
};

const Dialog: CustomDialogType = (props) => {
  return <MuiDialog TransitionComponent={Transition} {...props} />;
};

Dialog.Title = Title;
Dialog.Content = SimpleContent;
Dialog.Actions = DialogActions;
Dialog.BooleanAction = BooleanAction;

export default Dialog;
