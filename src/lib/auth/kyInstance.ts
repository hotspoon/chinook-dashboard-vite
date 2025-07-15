import ky from "ky";
import { getToken } from "./auth";

const apiUrl = import.meta.env.VITE_API_URL;

const kyInstance = ky.create({
  prefixUrl: apiUrl,
  // credentials: "include", // Send cookies with requests
  headers: { "Content-Type": "application/json" },
  hooks: {
    beforeRequest: [
      (request) => {
        const token = getToken();
        if (token) {
          request.headers.set("Authorization", `${token}`);
        }
      },
    ],
  },
});

export default kyInstance;
