import "./styles/main.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from "./components/pages";
import Home from "./views/home";
import Users from "./views/dashboard";
import LoginPage from "./views/login";
import SignUpPage from "./views/signup";

function App() {
  return (
    <div className="app">
      <Router>
        <Page>
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Page>
      </Router>
    </div>
  );
}

export default App;
