"use client";
import React from "react";
import { SofaSetDropDown } from "./SofaSetDropDown";
import { Navigator } from "../clientComponents";
import {
  useGetAdmin,
  useGetClient,
  useGetSubAdmin,
  useGetSubClient,
} from "@/hooks";
import { DashboardDropDown } from "./DashboardDropDown";
import { useRouter } from "next/navigation";
import { ClientDashboard } from "./ClientDashboard";

export const navObj: Array<{
  title?: string;
  Component?: React.FC;
  link?: string;
}> = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "company profile",
    link: "/about",
  },
  {},
  {
    title: "dining set",
    link: "/dining",
  },
  {
    title: "blog",
    link: "/blog",
  },

  {
    title: "contact us",
    link: "/contact",
  },
];

interface NavElemProp {
  location?: string;
}

export const NavElem: React.FC<NavElemProp> = ({ location }) => {
  const navigate = useRouter();
  const { admin } = useGetAdmin();
  const { subAdmin } = useGetSubAdmin();
  const { client } = useGetClient();
  const { subClient } = useGetSubClient();

  return (
    <ul className="flex justify-between items-center gap-[30px]">
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location ? navigate.push(`/${location}`) : navigate.push(`/`);
        }}
      >
        home
      </li>
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location
            ? navigate.push(`/${location}/about`)
            : navigate.push(`/about`);
        }}
      >
        company profile
      </li>
      <li className="text-[20px] font-[600]  capitalize cursor-pointer">
        <SofaSetDropDown location={location} />
      </li>
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location
            ? navigate.push(`/${location}/dining`)
            : navigate.push(`/dining`);
        }}
      >
        dining set
      </li>
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location
            ? navigate.push(`/${location}/blog`)
            : navigate.push(`/blog`);
        }}
      >
        blog
      </li>
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location
            ? navigate.push(`/${location}/contact`)
            : navigate.push(`/contact`);
        }}
      >
        contact us
      </li>
      <div>
        {admin || subAdmin ? (
          <DashboardDropDown />
        ) : (
          <li
            className="text-[20px] font-[600]  capitalize cursor-pointer"
            onClick={() => {
              navigate.push(`/login`);
            }}
          >
            admin
          </li>
        )}
      </div>
      <div>
        {client || subClient ? (
          <ClientDashboard />
        ) : (
          <li
            className="text-[20px] font-[600]  capitalize cursor-pointer"
            onClick={() => {
              location
                ? navigate.push(`/${location}/client-login`)
                : navigate.push(`/client-login`);
            }}
          >
            Log In
          </li>
        )}
      </div>
    </ul>
  );
};
