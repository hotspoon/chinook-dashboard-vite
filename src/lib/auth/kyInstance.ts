import ky from "ky";
import { getToken } from "./auth";

const apiUrl = import.meta.env.VITE_API_URL;

const kyInstance = ky.create({
  prefixUrl: apiUrl,
  headers: { "Content-Type": "application/json" },
  retry: 0,
  hooks: {
    beforeRequest: [
      (request) => {
        const token = getToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (!response.ok) {
          const errorBody = (await response.json().catch(() => ({}))) as {
            error?: string;
          };
          throw new Error(errorBody.error || "Unknown error");
        }
      },
    ],
  },
});

export default kyInstance;
