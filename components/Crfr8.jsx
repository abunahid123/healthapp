import Image from "next/image";
import React from "react";
import CardImg from "../public/rectangle-16.png";
import Star from "../public/star1.svg";

const Crfr8 = () => {
  return (
    <>
      <div className=" w-[305px]  bg-[#F9FAFB] overflow-hidden rounded-lg flex flex-col mt-5 drop-shadow-md ">
        <Image
          src={CardImg}
          className=" h-[197px] w-[305px] object-contain  "
        />
        <div className="flex justify-between mt-5 mx-3 ">
          <div className="flex flex-col">
            <h1 className=" font-thin text-lg ">Albert Laangster</h1>
            <h1 className=" font-medium text-sm">Satisfied Trainee</h1>
          </div>
          <div className="flex mx-5 gap-2 ">
            <Image src={Star} className=" h-[16px] w-[16px] " />
            <h1>5.0</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crfr8;
