import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HandleRoutes = ({ routes }) => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      {routes.map((route, index) => {
        const { access, path, component: RouteComponent } = route;

        if (access === "private") {
          return (
            <Route
              key={index}
              path={path}
              element={isAuth ? <RouteComponent /> : <Navigate to="/login" />}
            />
          );
        } else if (access === "public") {
          return (
            <Route
              key={index}
              path={path}
              element={
                !isAuth ? <RouteComponent /> : <Navigate to="/dashboard" />
              }
            />
          );
        }

        return null;
      })}
    </Routes>
  );
};

export default HandleRoutes;
