import { Role } from "@/app/(auth)/login/models/role";
import { getCookie } from "cookies-next";
import { get } from "https";
import { create } from "zustand";

interface AuthState {
  accessToken: string;
  fullName: string;
  role: Role | null;
  isAuth: boolean;
}

interface AuthActions {
  setAuth: (auth: AuthState) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  accessToken: getCookie("accessToken") || "",
  fullName: getCookie("fullName") || "",
  role: (getCookie("role") as Role) || null,
  isAuth: getCookie("isAuth") === "true",
  setAuth: (auth: AuthState) => set(auth),
  logout: () =>
    set({ accessToken: "", fullName: "", role: Role.User, isAuth: false }),
}));
