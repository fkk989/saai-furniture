"use client";
import React, { useEffect, useRef, useState } from "react";
import { ClientButton, Navigator } from "../clientComponents";
import { SofaSetDropDown } from "./SofaSetDropDown";
import { scrollOnHide, changeBgAndColorOnScroll } from "@/helpers";
import { NavElem } from "./NavElem";

interface NavbarProp {
  location?: string;
}

export const Navbar: React.FC<NavbarProp> = ({ location }) => {
  const navbar = useRef<HTMLDivElement | null>(null);
  const [_city, setCity] = useState<string | undefined>();
  const [_location, setLocation] = useState<string | undefined>();
  const [changeBg, setChangeBg] = useState(false);

  useEffect(() => {
    setLocation(location);
    if (navbar && navbar.current) {
      scrollOnHide(navbar.current);
    }
    //changeing color on scroll
    if (navbar && navbar.current) {
      changeBgAndColorOnScroll(navbar.current, setChangeBg);
    }
  });
  return (
    <div
      ref={navbar}
      className={`max-mobile:hidden  ${
        changeBg ? "black-text" : "transparent-bg white-text"
      }  fixed top-0 w-screen h-[100px] flex justify-between items-center transition-all delay-300 duration-300 pl-[20px] pr-[100px] bg-white shadowww z-[10]`}
    >
      <Navigator to="/">
        <div className="flex justify-center items-center gap-[10px] text-red-500 cursor-pointer">
          <h1 className="text-[40px] font-bold">Sai</h1>{" "}
          <span className="text-[22px] font-[500]">Furniture Art</span>
        </div>
      </Navigator>
      <div className="">
        <NavElem location={location} />
      </div>
    </div>
  );
};
