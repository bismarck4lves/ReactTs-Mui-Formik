import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { useDropzone } from "react-dropzone";
interface FileFieldProps {
  height?: number;
  setFieldValue: any;
  mensagem?: string;
  icon?: ReactNode;
}
export function FileField({
  height = 100,
  mensagem = "Arraste o arquivo aqui ou Click",
  icon,
  ...rest
}: FileFieldProps) {
  const { setFieldValue } = rest;
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFieldValue("files", acceptedFiles);
    },
  });

  return (
    <Stack {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <Box
        component="span"
        sx={{
          p: 2,
          border: "1px dashed grey",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          height,
        }}
      >
        <Stack spacing={2} justifyContent="center" alignItems="center">
          {icon ? icon : <CloudUploadIcon color="secondary" fontSize="large" />}
          <Typography>{mensagem}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
