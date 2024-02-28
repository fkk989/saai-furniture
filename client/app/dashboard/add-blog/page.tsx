"use client";
import { AddBlog, Layout } from "@/components";
import React from "react";

export default function AddBlogPage() {
  return (
    <Layout
      component={
        <div className="w-screen min-h-[100vh] flex justify-center items-center pb-[50px]">
          <AddBlog />
        </div>
      }
    />
  );
}
