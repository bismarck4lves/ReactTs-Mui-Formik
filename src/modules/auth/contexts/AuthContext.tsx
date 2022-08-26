import { useTokenStorage } from "hooks";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services";

interface State {
  dialogLogout: boolean;
  isAuthenticated: boolean;
}

interface Dispatch {
  singIn(credentials: any): Promise<void>;
  logOut(): void;
  setDialogLogout: React.Dispatch<React.SetStateAction<boolean>>;
}
type ContextProps = [State, Dispatch];

const Context = createContext({} as ContextProps);

export const AuthProvider = (props: PropsWithChildren) => {
  const navigate = useNavigate();
  const tokenStorage = useTokenStorage();
  const [dialogLogout, setDialogLogout] = useState(false);

  async function singIn(credentials) {
    const token = await authService.singIn(credentials);
    tokenStorage.set(token.access);
    return;
  }

  function logOut() {
    localStorage.clear();
    navigate("/");
  }

  const isAuthenticated = !!tokenStorage.get();

  return (
    <Context.Provider
      value={[
        { isAuthenticated, dialogLogout },
        { singIn, logOut, setDialogLogout },
      ]}
    >
      {props.children}
    </Context.Provider>
  );
};

export function useAuthContext() {
  return useContext(Context);
}
