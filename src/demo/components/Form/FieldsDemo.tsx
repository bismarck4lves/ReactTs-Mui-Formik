import { Stack } from "@mui/system";
import {
  AutoComplete,
  Form,
  Formik,
  MessageField,
  PasswordField,
  SearchField,
  SelectField,
  TextArea,
  TextField
} from "components/Form";
import stocks from "../../mocks/stocks";

function FieldsDemo() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}} enableReinitialize={true}>
      {(props) => (
        <Form>
          <Stack spacing={2}>
            <AutoComplete
              name="auto_complete"
              label="Auto complete"
              options={stocks}
              onChange={(e) => {
                console.log(e);
              }}
              itemValue={(item) => item.id}
              getOptionLabel={(option) => `${option.abbr} - ${option.name}`}
              {...props}
            />
            <TextField name="simple_text_field" label="Text Field" />
            <TextField
              name="simple_text_field_with_mast"
              label="Text Field with mask"
              mask="999.999.999-99"
            />
            <PasswordField name="password_field" label="Password Field" />
            <SearchField name="search_field" label="Search Field" />
            <MessageField name="message_field" label="Message Field" />
            <SelectField
              name="simple_text_field"
              label="Select field "
              options={stocks}
              itemValue="abbr"
              displayFn={(option) => `${option.abbr} - ${option.name}`}
            />
            <TextArea name="text_area" label="Text area" />
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default FieldsDemo;
