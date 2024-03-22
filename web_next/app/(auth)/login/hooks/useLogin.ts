import { useMutation } from "@tanstack/react-query";
import { LoginService } from "@/app/(auth)/login/services/login.service";
import { useAuthStore } from "@/app/(auth)/login/store/authStore";
import { LOGIN_RESPONSE } from "../models/loginResponse";
import { Role } from "../models/role";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export const useLogin = () => {
  const { setAuth } = useAuthStore();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: LoginService,
    onSuccess: (res: LOGIN_RESPONSE) => {
      if (res.data) {
        const { accessToken, fullname, role } = res.data;
        setAuth({
          accessToken: accessToken as string,
          fullName: fullname as string,
          role: role as Role,
          isAuth: true,
        });
        setCookie("accessToken", accessToken as string);
        setCookie("fullName", fullname as string);
        setCookie("role", role as Role);
        setCookie("isAuth", "true");
        router.push("/");
      }
    },
  });
  return mutation;
};
