import kyInstance from "./kyInstance";
import { z } from "zod";
import { LoginSchema } from "@/schema/auth";
import Cookies from "js-cookie";

export type LoginInput = z.infer<typeof LoginSchema>;

export async function getCurrentUser() {
  try {
    return await kyInstance.get("/auth/me").json();
  } catch {
    return null;
  }
}

export async function isAuthenticated() {
  const token = Cookies.get("token");
  return !!token;
}
