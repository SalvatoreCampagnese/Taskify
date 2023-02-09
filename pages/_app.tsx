import { Inter } from "@next/font/google";
import React from "react";
import Link from "next/link";
import Onboarding from "./onboarding";
import Dashboard from "./dashboard";
import UserProfile from "./userProfile";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function Timify() {
  return (
    <div>
      <Link href="/" as="/">
        <Onboarding></Onboarding>
      </Link>
      <Link href="/dashboard" as="/dashboard">
        <Dashboard></Dashboard>
      </Link>
      <Link href="/userProfile" as="/userProfile">
        <UserProfile></UserProfile>
      </Link>
    </div>
  );
}
