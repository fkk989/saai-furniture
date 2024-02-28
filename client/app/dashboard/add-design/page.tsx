"use client";
import { AddDesign, Layout } from "@/components";
import React from "react";

export default function AddDesignPage() {
  return (
    <Layout
      component={
        <div className="w-screen h-screen flex justify-center items-center">
          <AddDesign />
        </div>
      }
    />
  );
}
