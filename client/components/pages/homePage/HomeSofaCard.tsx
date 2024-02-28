import React from "react";

interface HomeSofaCardProp {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

export const HomeSofaCard: React.FC<HomeSofaCardProp> = ({
  imageUrl,
  title,
  description,
  href,
}) => {
  return (
    <div className="w-[100%] mobile:w-[30%] h-[80vh] bg-[#000] rounded-md cursor-pointer">
      <div>{imageUrl}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{href}</div>
    </div>
  );
};
