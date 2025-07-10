import { AuthApi } from "@/api/authApi";
import Cookies from "js-cookie";

export const login = async (credentials: {
  username: string;
  password: string;
}): Promise<boolean> => {
  const response = await AuthApi.login(credentials);
  Cookies.set("token", response.token, {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
  // Only return success status
  return true;
};
