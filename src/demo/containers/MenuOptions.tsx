import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import appMap from "../routes/appMap";

function MenuOptions() {
  const navigate = useNavigate()
  return (
    <div>
      {Object.keys(appMap).map((key, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            onClick={()=> navigate(`/${key}`)}
          >
            <ListItemIcon>
              <DonutLargeIcon />
            </ListItemIcon>
            <ListItemText primary={appMap[key]} />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
}
export default MenuOptions;
