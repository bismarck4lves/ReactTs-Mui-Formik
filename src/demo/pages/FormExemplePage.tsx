import { Stack } from "@mui/system";
import Fields from "demo/components/Form/FieldsDemo";
import FilesFields from "demo/components/Form/FilesFieldsDemo";
import Session from "demo/utils/Session";

function FormExemplePage() {
  return (
    <Stack spacing={2}>
      <Session title="Common Fields">
        <Fields />
      </Session>
      <Session title="File Field">
        <FilesFields />
      </Session>
    </Stack>
  );
}

export default FormExemplePage;
