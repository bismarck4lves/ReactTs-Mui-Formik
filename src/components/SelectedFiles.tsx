import UploadFileIcon from "@mui/icons-material/UploadFile";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import Typography from "components/Typography";
import React from "react";


interface FilesProps {
  name: any;
  type: any;
  size: any;
}
interface SelectedFilesProps {
  files: FilesProps[];
}

function SelectedFiles(props: SelectedFilesProps) {
  return (
    <div>
      {props.files &&
        props.files.map((file, i) => (
          <List
            key={i}
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <UploadFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography noWrap>{file.name}</Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography noWrap></Typography>
                    <Typography>Tamanho: {file.size}kb</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        ))}
    </div>
  );
}

export default SelectedFiles;
