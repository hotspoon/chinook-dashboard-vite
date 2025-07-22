// src/services/authService.ts
import { AuthApi } from "@/api/authApi";
import type { LoginResponse } from "@/schema/auth.schema";
import Cookies from "js-cookie";
import { HTTPError } from "ky";

// const isProduction = import.meta.env.MODE === "production";

export const login = async (credentials: {
  username: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await AuthApi.login(credentials);

    Cookies.set("token", response.token, {
      expires: 7,
      secure: false,
      sameSite: "lax",
    });

    return response;
  } catch (err: unknown) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json();
      const message = errorBody?.error || "Login failed";
      throw new Error(message);
    }
    throw new Error("An unknown error occurred");
  }
};
