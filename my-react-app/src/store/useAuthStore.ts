import { useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface AuthState {
  user: User | null;
  status: "authenticated" | "unauthenticated" | "loading";
  login: (name: string, email: string) => void;
  logout: () => void;
}

let globalUser: User | null = null;
const listeners = new Set<() => void>();

const notify = () => listeners.forEach((listener) => listener());

export function useAuthStore(): AuthState {
  const [user, setUser] = useState<User | null>(globalUser);
  const [status, setStatus] = useState<"authenticated" | "unauthenticated" | "loading">(
    globalUser ? "authenticated" : "unauthenticated"
  );

  useEffect(() => {
    const listener = () => {
      setUser(globalUser);
      setStatus(globalUser ? "authenticated" : "unauthenticated");
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return {
    user,
    status,
    login: (name: string, email: string) => {
      globalUser = {
        id: "usr_123",
        name,
        email,
        image: "https://api.dicebear.com/7.x/bottts/svg?seed=" + name,
      };
      notify();
    },
    logout: () => {
      globalUser = null;
      notify();
    },
  };
}