import "./styles/main.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Page } from "./components/pages";
import routes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import HandleRoutes from "./utils/handleRoutes";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Page>
            <HandleRoutes routes={routes} />
          </Page>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
