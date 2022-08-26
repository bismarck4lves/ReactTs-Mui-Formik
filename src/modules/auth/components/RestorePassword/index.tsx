import { Stack } from "@mui/material";
import { BackButton } from "components/Button";
import { Form, Formik } from "components/Form";
import { useSnackbarContext } from "contexts/SnackbarContext";
import { debounce } from "lodash";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import appMap from "routes/appMap";
import { authService } from "../../services";
import {
  codeValidator,
  emailValidator,
  passwordValidator
} from "../../validators";
import Code from "./Code";
import Email from "./Email";
import NewPassword from "./NewPassword";
import Proximo from "./Proximo";
import { FormRestoreProps, StepChoices, Steps } from "./types_d";

interface StepMap {
  email: any;
  code: any;
  newPassword: any;
}

function RestoryPasswordPage() {
  const [currentStep, setCurrentStep] = useState<Steps>(StepChoices.email);
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { snackError, snackSuccess } = useSnackbarContext();
  const navigate = useNavigate();

  function handleEmailStep(data: FormRestoreProps) {
    setLoading(true);
    authService
      .generateCodeForRecovery(data)
      .then(() => {
        handleNext(StepChoices.code);
        snackSuccess("Codigo enviado pro email");
      })
      .catch((err) => {
        snackError(err.message);
      })
      .finally(() => setLoading(false));
  }

  function codeVerificationStep(data) {
    setLoading(true);
    authService
      .postCodeForRecovery(data)
      .then(() => handleNext(StepChoices.newPassword))
      .catch((err) => {
        snackError(err.message);
      })
      .finally(() => setLoading(false));
  }

  function newPasswordStep(data) {
    setLoading(true);
    authService
      .postNewPassword(data)
      .then(() => {
        backToSingin();
        snackSuccess("Sua senha foi atualizada com sucesso");
      })
      .catch((err) => {
        snackError(err.message);
      })
      .finally(() => setLoading(false));
  }

  function backToSingin() {
    navigate(appMap.auth.singIn);
  }

  function handleBack() {
    if (currentStep === StepChoices.email) {
      backToSingin();
    }
    setCurrentStep(rollBacks[currentStep]);
  }
  function handleNext(code: Steps) {
    setCurrentStep(code);
    setBtnDisabled(true);
  }

  const steps: StepMap = {
    email: <Email />,
    code: <Code />,
    newPassword: <NewPassword />,
  };

  const actions: StepMap = {
    email: handleEmailStep,
    code: codeVerificationStep,
    newPassword: newPasswordStep,
  };

  const validators: StepMap = {
    email: emailValidator,
    code: codeValidator,
    newPassword: passwordValidator,
  };

  const rollBacks: StepMap = {
    email: StepChoices.email,
    code: StepChoices.email,
    newPassword: StepChoices.code,
  };

  function onSubmit(data: FormRestoreProps) {
    actions[currentStep](data);
  }

  async function handleChangeForm(data) {
    try {
      await validators[currentStep].validate(data, { abortEarly: false });
      setBtnDisabled(false);
    } catch {
      setBtnDisabled(true);
    }
  }

  const debouncedhandleChangeForm = useMemo(
    () => debounce(handleChangeForm, 200),
    [handleChangeForm]
  );

  return (
    <>
      <Stack direction="row" justifyContent="flex-start" sx={{ width: "100%" }}>
        <BackButton onClick={handleBack} color="primary"/>
      </Stack>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {(props) => {
          debouncedhandleChangeForm(props.values);
          return (
            <Form>
              <Stack spacing={2}>
                {steps[currentStep]}
                <Proximo loading={loading} disabled={btnDisabled} />
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default RestoryPasswordPage;
