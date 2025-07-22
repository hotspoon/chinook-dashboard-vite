import type {
  Credentials,
  LoginResponse,
  MeResponse,
} from "@/schema/auth.schema";
import kyInstance from "../lib/auth/kyInstance";

export class AuthApi {
  static async login(credentials: Credentials): Promise<LoginResponse> {
    return kyInstance.post("auth/login", { json: credentials }).json();
  }

  static async logout(): Promise<void> {
    return kyInstance.post("auth/logout").json();
  }

  static async getCurrentUser(): Promise<MeResponse | null> {
    try {
      return await kyInstance.get("auth/me").json();
    } catch (error) {
      return null;
    }
  }
}
