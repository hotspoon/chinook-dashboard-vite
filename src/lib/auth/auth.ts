import kyInstance from "./kyInstance";
import { z } from "zod";
import { LoginSchema } from "@/schema/auth";

export type LoginInput = z.infer<typeof LoginSchema>;

export async function getCurrentUser() {
  try {
    return await kyInstance.get("me").json();
  } catch {
    return null;
  }
}
