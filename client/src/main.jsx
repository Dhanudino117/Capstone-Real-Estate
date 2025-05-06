import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="927666537387-krq5q195so0ii1n9dmq45c594su8e3ru.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </StrictMode>
);
