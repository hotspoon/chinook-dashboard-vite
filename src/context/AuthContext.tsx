import type { MeResponse } from "@/schema/auth";
import * as React from "react";

export interface AuthContext {
  user: MeResponse;
}

const AuthContext = React.createContext<AuthContext | null>(null);

function getStoredUser() {
  return {
    id: 2,
    username: "john123",
    email: "john@example.com",
    authenticated: true,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, _] = React.useState<MeResponse>(getStoredUser());

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
