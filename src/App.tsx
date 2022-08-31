import { SnackbarsProvider } from "contexts/SnackbarContext";
import DemoRoutes from "demo/routes";
import LogOutDialog from "modules/auth/components/LogOutDialog";
import { AuthProvider } from "modules/auth/contexts/AuthContext";
import { HashRouter } from "react-router-dom";
// import Routes from "routes";
import "./clear.css";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <SnackbarsProvider>
          <DemoRoutes />
          {/* <Routes /> */}
          <LogOutDialog />
        </SnackbarsProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
