import * as Yup from "yup";

const PASSWORD_LENGTH = 8;

const email = Yup.string().email().required();
const code = Yup.string().required().min(5);
const password = Yup.string().min(PASSWORD_LENGTH).required();

export const singInValidator = Yup.object().shape({
  username:Yup.string().required(),
  password,
});

export const emailValidator = Yup.object().shape({
  email,
});

export const codeValidator = Yup.object().shape({
  email,
  code,
});

export const passwordValidator = Yup.object().shape({
  email,
  code,
  password,
  password_confirmation: password.oneOf([Yup.ref("password"), null])
});

