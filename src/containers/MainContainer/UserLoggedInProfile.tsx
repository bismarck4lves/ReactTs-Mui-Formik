import Logout from "@mui/icons-material/Logout";
import { Divider, ListItemText, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import { useProtectedContext } from "modules/auth/contexts/ProtectedContext";
import { Fragment, MouseEvent, useState } from "react";
import { firstLetter } from "utils/textParsers";
import { profileStyles } from "./styles";
export default function UserLoggedInProfile() {
  const [, { logOut, setDialogLogout }] = useAuthContext();
  const { userLoggedIn } = useProtectedContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const onHandleLogout = () => setDialogLogout(true);

  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: (theme) => theme.palette.secondary.main,
              }}
            >
              {firstLetter(userLoggedIn.username)}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={profileStyles}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div
          style={{
            width: "150px",
          }}
        >
          <Typography noWrap fontSize="small" sx={{ p: 1 }}>
            {userLoggedIn.email}
          </Typography>
        </div>
        <Divider />

        <MenuItem onClick={onHandleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
