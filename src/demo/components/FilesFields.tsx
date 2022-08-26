import { Stack } from "@mui/material";
import { FileField, Form, Formik } from "components/Form";
import SelectedFiles from "components/SelectedFiles";

function FilesFields() {
  return (
    <Formik initialValues={{ files: null }} onSubmit={() => {}}>
      {({ values, handleSubmit, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2} justifyContent="center">
              <FileField setFieldValue={setFieldValue} />
              <SelectedFiles {...values} />
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FilesFields;
