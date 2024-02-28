"use client";
import { Layout, LoginForm } from "@/components";
import { useGetAdmin, useGetSubAdmin } from "@/hooks";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const navigate = useRouter();
  const { admin } = useGetAdmin();
  const { subAdmin } = useGetSubAdmin();

  if (admin || subAdmin) {
    navigate.push("/");
  }

  return (
    <Layout
      component={
        <div className="w-screen h-screen flex justify-center items-center">
          <LoginForm />
        </div>
      }
    />
  );
}
