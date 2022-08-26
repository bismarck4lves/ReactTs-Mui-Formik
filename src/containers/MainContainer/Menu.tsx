import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import appMap from "routes/appMap";

interface ItemProps {
  icon: React.ReactNode;
  text: string;
  route: string;
  onClick: any;
}
function Item(props: ItemProps) {
  const location = useLocation();

  return (
    <Box
      {...props}
      sx={{
        width: 100,
        height: 100,
        background:
          location.pathname === props.route
            ? (theme) => theme.palette.primary.main
            : null,
        color: (theme) => theme.palette.common.white,
        "&:hover": {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: 100 }}
        spacing={2}
      >
        {props.icon}
        <Typography
          component="div"
          sx={{
            width: 90,
            boxSizing: "border-box",
            overflowWrap: "break-word",
            textAlign: "center",
          }}
          fontSize={14}
        >
          {props.text}
        </Typography>
      </Stack>
    </Box>
  );
}

function Menu() {
  const navigate = useNavigate();
  return (
    <>
      <Item
        icon={<UploadFileIcon />}
        text="Importações"
        route={appMap.protected.home}
        onClick={() => navigate(appMap.protected.home)}
      />
    </>
  );
}

export default Menu;
