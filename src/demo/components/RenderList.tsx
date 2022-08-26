import ImageIcon from "@mui/icons-material/Image";
import { Stack } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "components/Button";
import RenderList from "components/RenderList";
import { useState } from "react";
import stocks from "../mocks/stocks";

function RenderListExemple(props) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSetState(val) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setState(val);
    }, 1000);
  }
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => handleSetState(stocks)}> load data </Button>
        <Button onClick={() => handleSetState([])}> reset data </Button>
      </Stack>
      <Stack
        sx={{
          height: "40vh",
          overflow: "auto",
        }}
      >
        <RenderList
          list={state}
          emptyContent="No data to show"
          loading={loading}
        >
          <List>
            {state.map((item, key) => (
              <ListItem key={key}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.abbr} />
              </ListItem>
            ))}
          </List>
        </RenderList>
      </Stack>
    </>
  );
}

export default RenderListExemple;
