import ky from "ky";
import { isAuthenticated } from "./auth";

const apiUrl = import.meta.env.VITE_API_URL;

const kyInstance = ky.create({
  prefixUrl: apiUrl,
  credentials: "include", // Send cookies with requests
  headers: { "Content-Type": "application/json" },
  hooks: {
    beforeRequest: [
      (request) => {
        const token = isAuthenticated();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});

export default kyInstance;
