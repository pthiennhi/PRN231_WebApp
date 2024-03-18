import React from "react";
import { Header } from "../(common)/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
