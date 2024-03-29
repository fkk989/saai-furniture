"use client";

import React from "react";
import { ClientButton } from "../clientComponents";
import { useRouter } from "next/navigation";

interface SofaCardProp {
  imageUrl: string;
  title?: string;
  onClickQuote: () => void;
  onClickMore: () => void;
  link?: string;
  location?: string;
}

export const DesignCard: React.FC<SofaCardProp> = ({
  imageUrl,
  title,
  onClickQuote,
  onClickMore,
  location,
  link,
}) => {
  const navigate = useRouter();
  return (
    <div
      onClick={() => {
        if (location) {
          return navigate.push(`/${location}/sofa/${link}`);
        }
        navigate.push(`/sofa/${link}`);
      }}
      className="w-[300px] mobile:w-[400px] flex flex-col  items-center bg-white border border-gray-400 shadowww rounded-lg  p-[10px] cursor-pointer hover:scale-[1.1] transition-all duration-500"
    >
      <img src={imageUrl} alt="sofa-img" className="w-[300px]" />

      <div className="w-[100%] flex flex-col justify-center gap-[20px]">
        <div className="w-[95%] h-[1px] bg-[#2e2e2e7b]"></div>
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <h3 className="text-center text-[20px] font-bold capitalize">
            {title}
          </h3>
          <div className="flex items-center gap-[20px]">
            <ClientButton onClick={onClickQuote}>
              <button className="w-[130px] mobile:w-[150px] h-[40px] bg-[#2A1B18] text-[11px] font-bold text-white rounded-full">
                GET BEST QUOTE
              </button>
            </ClientButton>
            <ClientButton onClick={onClickMore}>
              <button className="w-[130px] h-[40px] bg-[#2A1B18] text-[11px] font-bold text-white rounded-full">
                READ MORE
              </button>
            </ClientButton>
          </div>
        </div>
      </div>
    </div>
  );
};
