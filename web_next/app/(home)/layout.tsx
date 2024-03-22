import { Header } from "@/app/(common)/components";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
