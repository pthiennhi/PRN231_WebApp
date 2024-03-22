"use client";

import { Password, Text } from "@/app/(common)/components";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useLogin } from "@/app/(auth)/login/hooks/useLogin";

export const LoginForm = () => {
  const { mutate: loginMutation, isPending, isError, error } = useLogin();

  const handleSubmit = (formData: FormData) => {
    loginMutation({
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    });
  };

  return (
    <form className="min-w-96 space-y-6" action={handleSubmit}>
      <Input
        label="Username"
        type="text"
        placeholder="Enter your username"
        name="username"
        required
      />

      <Password
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
        required
      />

      <Button color="primary" type="submit" fullWidth isLoading={isPending}>
        Login
      </Button>
      {isError && (
        <Text className="max-w-96 text-sm italic text-red-500">
          {error.message}
        </Text>
      )}
    </form>
  );
};
