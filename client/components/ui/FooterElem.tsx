"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SofaSetDropDown } from "./SofaSetDropDown";

interface FooterElemProp {
  location?: string;
}

export const FooterElem: React.FC<FooterElemProp> = ({ location }) => {
  const navigate = useRouter();
  return (
    <ul className="flex flex-col gap-[10px] text-white">
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
      <li
        onClick={() => {
          location
            ? navigate.push(`/${location}/sofa`)
            : navigate.push(`/sofa`);
        }}
        className="text-[20px] font-[600]  capitalize cursor-pointer"
      >
        sofa set
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
      <li
        className="mobile:text-[18px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          navigate.push("/market-area");
        }}
      >
        Market Area
      </li>
    </ul>
  );
};
