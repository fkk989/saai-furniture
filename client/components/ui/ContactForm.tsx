import React from "react";
import { FiMapPin } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

export const ContactForm = () => {
  return (
    <div className="w-[70vw] h-[550px]">
      <div className="w-[45%] h-[90%] flex flex-col bg-[#2A1B18] p-[20px] text-white gap-[20px]">
        <h1 className="text-[#B19777] uppercase text-[20px] font-bold">
          contact information
        </h1>
        <p className="text-[15px]">
          Write to us or call us, get quick response powered by our advanced
          customer support team .
        </p>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <FiMapPin className="text-[40px]" />
            <div>
              9/50, 2nd Floor, Industrial Area, Opp. Railway Reservation Center,
              Kirti Nagar, New Delhi - 110015, (India)
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <IoCallOutline className="text-[40px]" />
            <div>+91-921-214-0888</div>
          </div>
        </div>
        <div className="text-[#B19777] uppercase text-[20px] font-[600]">
          contact information
        </div>
      </div>
      <div className="w-[55%]"></div>
    </div>
  );
};
