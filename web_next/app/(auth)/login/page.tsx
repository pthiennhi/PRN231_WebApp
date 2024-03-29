import { Surround, Text } from "@/app/(common)/components";
import Image from "next/image";
import { LoginForm } from "@/app/(auth)/login/components/LoginForm";

export default function LoginPage() {
  return (
    <Surround className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Surround className="mx-auto w-fit space-y-6 rounded-2xl bg-slate-50 p-8 shadow-md">
        <Surround className="flex flex-col items-center justify-center gap-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src="/logos/logo.svg"
            alt="Logo"
            width={64}
            height={64}
            unoptimized
            priority
            quality={100}
          />
          <Text className="text-center text-2xl font-bold leading-9 tracking-tight text-primary-500">
            Login
          </Text>
        </Surround>
        <LoginForm />
      </Surround>
    </Surround>
  );
}
