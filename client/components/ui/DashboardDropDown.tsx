"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const DashboardDropDown = () => {
  const navigate = useRouter();
  const [open, setOpen] = useState(false);
  const dashboardDropDown = useRef<HTMLDivElement | null>(null);

  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
      className="relative"
    >
      <div className="flex items-center gap-[10px] font-[600] text-[20px] cursor-pointer">
        <span>Dashboard</span>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div
        ref={dashboardDropDown}
        className={`absolute top-[30px] min-w-[200px]  bg-[rgba(0,0,0,0.6)]  rounded-xl capitalize overflow-scroll transition-all duration-300 ease-out ${
          open ? "" : "scale-y-0"
        } origin-top  translate-x-[-20%] p-[15px] box-content`}
      >
        <ul className="flex flex-col text-white">
          <li
            onClick={() => {
              navigate.push("/dashboard/add-admin");
            }}
            className=" hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md cursor-pointer"
          >
            Add Admin
          </li>
          <li
            onClick={() => {
              navigate.push("/dashboard/add-category");
            }}
            className=" hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md cursor-pointer"
          >
            Add Sofa Category
          </li>
          <li
            onClick={() => {
              navigate.push("/dashboard/add-design");
            }}
            className=" hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md cursor-pointer"
          >
            Add Sofa Design
          </li>
          <li
            onClick={() => {
              navigate.push("/dashboard/add-state");
            }}
            className=" hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md cursor-pointer"
          >
            Add state
          </li>
          <li
            onClick={() => {
              navigate.push("/dashboard/add-city");
            }}
            className=" hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md cursor-pointer"
          >
            Add city
          </li>
          <li
            onClick={() => {
              navigate.push("/dashboard/add-location");
            }}
            className=" hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md cursor-pointer"
          >
            Add location
          </li>
          <li
            onClick={() => {
              localStorage.removeItem("saai-admin-token");
              localStorage.removeItem("saai-sub-admin-token");
              location.reload();
              navigate.push("/");
            }}
            className="text-[#E91E62] hover:text-[#ff679a] hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md"
          >
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
};
