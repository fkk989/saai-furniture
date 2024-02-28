"use client";
import { MdLocationPin } from "react-icons/md";
import { Navigator } from "../clientComponents";
import { useGetCity } from "@/hooks";

export const MarketArea = () => {
  const { cities } = useGetCity();

  return (
    <div
      className="w-screen min-h-screen flex flex-col  items-center"
      id="market-area"
    >
      <div
        className="w-screen h-[30vh] flex  justify-center items-center bg-[rgba(0,0,0,0.4)] gap-[20px] bg-cover bg-no-repeat bg-blend-multiply bg-center"
        style={{
          backgroundImage: "url('/location.jpeg')",
        }}
      >
        {/* <MdLocationPin className={"text-[100px] text-red-600"} /> */}
        <h1 className="text-[20px] mobile:text-[40px] text-white font-bold">
          our locations
        </h1>
      </div>
      <div className="mobile:w-[90%] mobile:mt-[50px] flex flex-col gap-[5px] max-mobile:p-[20px]">
        <h1 className="bg-[#424242ba] h-[30px] flex items-center pl-[10px] text-white text-[20px] font-bold rounded-md ">
          Delhi
        </h1>
        <ul className="flex flex-wrap gap-[20px] items-center">
          {cities?.map(({ id, name }) => {
            const link = name.split(" ").join("-");
            return (
              <Navigator to={`/${link}`}>
                <li className=" h-[30px] flex justify-center items-center text-white font-bold bg-[#62626281] hover:bg-[#424242ba] rounded-md cursor-pointer box-content p-[6] pl-[10px] pr-[10px]">
                  {name}
                </li>
              </Navigator>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
