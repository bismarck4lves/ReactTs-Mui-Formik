import { PasswordField } from "components/Form";

function NewPassword() {
  return (
    <>
      <PasswordField
        label="Nova Senha"
        placeholder="Nova Senha"
        name="password"
      />
      <PasswordField
        label="Confirmar Senha"
        placeholder="Confirmar Senha"
        name="password_confirmation"
      />
    </>
  );
}

export default NewPassword;
