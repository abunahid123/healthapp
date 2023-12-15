import Image from "next/image";
import React from "react";
import hero from "../public/rectangle-161.png";
import icon from "../public/manicon.svg";
import icon2 from "../public/calender.svg";

const BlogFr9 = () => {
  return (
    <>
      <div className=" mt-4 w-[305px] overflow-hidden rounded-lg flex flex-col gap-2 mx-2 bg-[#F9FAFB]  shadow-lg pb-2 ">
        <Image src={hero} className=" h-[190px] w-[305px]  object-contain " />
        <h1 className=" text-primary-color mt-2 mx-3 ">GYM</h1>
        <h1 className=" font-medium text-sm mx-3">
          The Emotional Toll of Being in UX
        </h1>
        <div className="flex mx-3 items-center justify-between">
          <div className=" flex items-center gap-1 ">
            <Image src={icon} className=" h-[16px] w-[16px] " />
            <h1 className=" font-medium text-xs ">By Admin</h1>
          </div>
          <div className=" flex gap-1 items-center ">
            <Image src={icon2} className=" h-[16px] w-[16px] " />
            <h1 className=" font-medium text-xs "> 23 Sep, 2023</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogFr9;
