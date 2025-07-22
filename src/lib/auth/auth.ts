import { z } from "zod";
import { LoginSchema } from "@/schema/auth.schema";
import Cookies from "js-cookie";
import { AuthApi } from "@/api/authApi";

export type LoginInput = z.infer<typeof LoginSchema>;

export async function authCheck() {
  const res = await AuthApi.getCurrentUser();
  if (res?.authenticated) {
    return true;
  } else {
    return false;
  }
}

export function getToken() {
  const token = Cookies.get("token");
  return token ? token : null;
}
