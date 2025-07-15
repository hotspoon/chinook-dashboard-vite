import { z } from "zod";
import { LoginSchema } from "@/schema/auth";
import Cookies from "js-cookie";

export type LoginInput = z.infer<typeof LoginSchema>;

export function isAuthenticated() {
  const token = Cookies.get("token");
  return !!token;
}

export function getToken() {
  const token = Cookies.get("token");
  return token ? token : null;
}
