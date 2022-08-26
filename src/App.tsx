import { SnackbarsProvider } from "contexts/SnackbarContext";
import LogOutDialog from "modules/auth/components/LogOutDialog";
import { AuthProvider } from "modules/auth/contexts/AuthContext";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import "./clear.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SnackbarsProvider>
            <Routes />
            <LogOutDialog />
        </SnackbarsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
