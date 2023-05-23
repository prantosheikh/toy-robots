import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import './index.css';
import AuthProvider from "./provider/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);