import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import router from "@/router";
import PrivateRoute from "./router/private";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        {router.map((route) => {
          if (route.isPrivate) {
            return (
              <Route
                path={route.path}
                element={<PrivateRoute element={route.element} />}
                key={route.path}
              />
            );
          }

          return (
            <Route
              path={route.path}
              element={route.element}
              key={route.path}
            />
          );
        })}
      </Routes>
    </Router>
  </StrictMode>
);
