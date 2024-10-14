import "./styles/main.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from "./components/pages";
import routes from "./routes";
import { AuthProvider } from "./context/AuthContext";

import HandleRoutes from "./utils/handleRoutes";

function App() {
  return (
    <div className="app">
      <Router>
        <Page>
          <AuthProvider>
            <HandleRoutes routes={routes}/>
          </AuthProvider>
        </Page>
      </Router>
    </div>
  );
}

export default App;
