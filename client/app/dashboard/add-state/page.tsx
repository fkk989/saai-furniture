"use client";
import { AddState, Layout } from "@/components";
import React from "react";

export default function AddCategoryPage() {
  return (
    <Layout
      component={
        <div className="w-screen h-screen flex justify-center items-center">
          <AddState />
        </div>
      }
    />
  );
}
