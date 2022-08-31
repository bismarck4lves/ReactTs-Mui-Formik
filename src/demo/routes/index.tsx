import MainContainer from "../containers/MainContainer";

import ButtonsExemplePage from "demo/pages/ButtonsExemplePage";
import DialogExemplePage from "demo/pages/DialogExemplePage";
import FormExemplePage from "demo/pages/FormExemplePage";
import TablesExemplePage from "demo/pages/TablesExemplePage";
import ThemeExemplePage from "demo/pages/ThemeExemplePage";
import UtilsExemplePage from "demo/pages/UtilsExemplePage";
import { Route, Routes } from "react-router-dom";
import appMap from "./appMap";

function Router() {
  return (
    <Routes>
      <Route element={<MainContainer />}>
        {/* <Route index element={<UXComponents />} /> */}
        <Route path={appMap.home} element={<ThemeExemplePage />} />
        <Route path={appMap.buttons} element={<ButtonsExemplePage />} />
        <Route path={appMap.fileds} element={<FormExemplePage />} />
        <Route path={appMap.dialogs} element={<DialogExemplePage />} />
        <Route path={appMap.tables} element={<TablesExemplePage />} />
        <Route path={appMap.utils} element={<UtilsExemplePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
