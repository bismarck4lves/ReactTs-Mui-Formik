import api from "services/api";
import unprotectedApi from "services/unprotectedApi";
import { FormRestoreProps } from "./components/RestorePassword/types_d";
import { JWTCredentials, PostSingInProps, UserLoggedInPros } from "./types_d";

export const authService = {
  singIn: (payload: PostSingInProps) =>
    unprotectedApi
      .post<JWTCredentials>("authentication/singin/", payload)
      .then((res) => res.data),
  generateCodeForRecovery: (payload: FormRestoreProps) =>
    unprotectedApi
      .post("authentication/code/generate", payload)
      .then((res) => res.data),

  postCodeForRecovery: (payload: FormRestoreProps) =>
    unprotectedApi
      .post("authentication/code/verify", payload)
      .then((res) => res.data),

  postNewPassword: (payload: FormRestoreProps) =>
    unprotectedApi
      .post("authentication/restore-password/", payload)
      .then((res) => res.data),
  me: () =>
    api.get<UserLoggedInPros>("authentication/me/").then((res) => res.data),
};
