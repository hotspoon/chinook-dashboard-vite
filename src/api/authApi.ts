import type { Credentials, LoginResponse } from "@/schema/auth";
import kyInstance from "../lib/auth/kyInstance";

export class AuthApi {
  static async login(credentials: Credentials): Promise<LoginResponse> {
    return kyInstance.post("auth/login", { json: credentials }).json();
  }
}
