import { scan } from "react-scan";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";

const isProduction = import.meta.env.MODE === "production";

scan({
  enabled: !isProduction,
});

createRoot(document.getElementById("root")!).render(<App />);
