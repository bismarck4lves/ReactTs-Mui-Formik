import AsyncRender from "components/AsyncRender";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState
} from "react";
import { Outlet } from "react-router-dom";
import { authService } from "../services";
import { UserLoggedInPros } from "../types_d";
interface ContextProps {
  userLoggedIn: UserLoggedInPros;
}
const Context = createContext({} as ContextProps);

export const ProtectedProvider = () => {
  const [render, setRender] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState({} as UserLoggedInPros);

  const getUserInfo = useCallback(() => {
    setRender(false);
    authService
      .me()
      .then((res) => {
        setUserLoggedIn(res);
      })
      .finally(() => setRender(true));
  }, []);

  useEffect(getUserInfo, [getUserInfo]);

  return (
    <Context.Provider value={{ userLoggedIn }}>
      <AsyncRender render={render} component={<Outlet />} />
    </Context.Provider>
  );
};

export function useProtectedContext() {
  return useContext(Context);
}
