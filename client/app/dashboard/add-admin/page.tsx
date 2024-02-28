"use client";
import { AddAdmin, Layout } from "@/components";
import React from "react";

export default function Login() {
  return (
    <Layout
      component={
        <div className="w-screen h-screen flex justify-center items-center">
          <AddAdmin />
        </div>
      }
    />
  );
}
