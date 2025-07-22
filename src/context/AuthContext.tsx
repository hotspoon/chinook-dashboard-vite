import * as React from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import type { MeResponse } from "@/schema/auth.schema";

const guestUser: MeResponse = {
  id: 0,
  username: "",
  email: "",
  authenticated: false,
};

export interface AuthContext {
  user: MeResponse;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data } = useCurrentUser();

  // Always provide a MeResponse, never null
  const user: MeResponse = data ?? guestUser;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
