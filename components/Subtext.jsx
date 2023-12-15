import Image from "next/image";
import React from "react";

const Subtext = ({ icon, title, className }) => {
  return (
    <>
      <div
        className={`flex items-center rounded-full drop-shadow-2xl bg-white  px-3 py-1 gap-2 h-fit `}
      >
        <div className={`${className} rounded-full items-center p-3 `}>
          <Image src={icon} className=" w-full h-full" />
        </div>
        <div className={`text-xs text-primary-color`}>{title}</div>
      </div>
    </>
  );
};

export default Subtext;
