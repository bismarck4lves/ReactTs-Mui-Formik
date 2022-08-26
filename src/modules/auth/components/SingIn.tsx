import { Stack } from "@mui/system";
import { Button } from "components/Button";
import { Form, Formik, PasswordField, TextField } from "components/Form";
import { useSnackbarContext } from "contexts/SnackbarContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appMap from "routes/appMap";
import { useAuthContext } from "../contexts/AuthContext";
import { singInValidator } from "../validators";

function SingIn() {
  const [, { singIn }] = useAuthContext();
  const { snackError } = useSnackbarContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handlesubmit(data) {
    setLoading(true);
    singIn(data)
      .then(() => navigate("/"))
      .catch((e) => snackError(e.message))
      .finally(() => setLoading(false));
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={() => {}}
      validationSchema={singInValidator}
    >
      {(props) => {
        return (
          <Form>
            <Stack spacing={2}>
              <TextField
                placeholder="Usuario"
                label="Usuário"
                name="username"
              />
              <PasswordField
                placeholder="Senha"
                label="Senha"
                name="password"
              />
              <Button
                type="submit"
                fullWidth
                loading={loading}
                disabled={!props.isValid}
                onClick={() => {
                  handlesubmit(props.values);
                }}
              >
                Entrar
              </Button>
              <Button
                type="button"
                fullWidth
                variant="text"
                onClick={() => navigate(appMap.auth.restorePassord)}
              >
                Esqueci minha senha
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SingIn;
