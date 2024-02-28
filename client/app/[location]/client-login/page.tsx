"use client";
import { ClientLoginForm, Layout } from "@/components";
import { useGetAdmin, useGetSubAdmin } from "@/hooks";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login({ params }: { params: { location: string } }) {
  return (
    <Layout
      location={params.location}
      component={
        <div className="w-screen h-screen flex justify-center items-center">
          <ClientLoginForm location={params.location} />
        </div>
      }
    />
  );
}
