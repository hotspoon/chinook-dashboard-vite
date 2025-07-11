// src/services/authService.ts
import { AuthApi } from "@/api/authApi";
import type { LoginResponse } from "@/schema/auth";
import Cookies from "js-cookie";
import { HTTPError } from "ky";

export const login = async (credentials: {
  username: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await AuthApi.login(credentials);

    Cookies.set("token", response.token, {
      expires: 7,
      secure: true,
      sameSite: "strict",
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
