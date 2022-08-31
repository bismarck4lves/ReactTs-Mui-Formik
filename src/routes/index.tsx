// import MainContainer from "containers/MainContainer";
import ProtectedMiddleware from "middlewares/ProtectedRoutes";
import UnProtectedMiddleware from "middlewares/UnProtectedRoutes";
import AuthContainer from "modules/auth/containers/AuthContainer";
import { ProtectedProvider } from "modules/auth/contexts/ProtectedContext";
import RestoryPasswordPage from "modules/auth/pages/RestorePassword";
import SingInPage from "modules/auth/pages/SingIn";

import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router-dom";
import appMap from "./appMap";

function Router() {
  return (
    <Routes>
      <Route element={<UnProtectedMiddleware />}>
        <Route element={<AuthContainer />}>
          <Route path={appMap.auth.singIn} element={<SingInPage />} />
          <Route
            path={appMap.auth.restorePassord}
            element={<RestoryPasswordPage />}
          />
        </Route>
      </Route>
      <Route element={<ProtectedProvider />}>
        <Route element={<ProtectedMiddleware />}>
          {/* <Route element={<MainContainer />}></Route> */}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
