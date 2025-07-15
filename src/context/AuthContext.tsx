import { useAuth } from "@/hooks/use-auth";
import type { UseQueryResult } from "@tanstack/react-query";
import { createContext, useContext } from "react";

// Use your actual data type instead of unknown if possible
type AuthContextType = UseQueryResult<any, unknown>;

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
