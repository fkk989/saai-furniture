import { BestSofaSec } from "./BestSofaSec";
import { DesignerSofaSec } from "../../ui";
import { HomeSlider } from "../../ui";

export const SofaSec: React.FC<{ location?: string }> = ({ location }) => {
  return (
    <div className="w-[100%] flex flex-col max-mobile:items-center gap-[50px] min-h-screen mt-[50px] mobile:mt-[100px]">
      <div className="w-[100%] flex flex-col justify-between items-center gap-[15px]">
        <h1 className="flex text-[25px] mobile:text-[35px] font-[500] text-[#2a1b18f1] ">
          Popular Sofa Set Categories
        </h1>
        <HomeSlider />
        <div className="w-[100px] h-[2px] bg-[#2a1b18f1]"></div>
      </div>

      <div className="mobile:mt-[50px]">
        <DesignerSofaSec />
      </div>
      <div>
        <BestSofaSec location={location} />
      </div>
    </div>
  );
};
