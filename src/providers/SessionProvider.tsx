"use client";
import { SessionProvider } from "next-auth/react";
import { type PropsWithChildren } from "react";

const Session = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Session;
