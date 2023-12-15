import Image from "next/image";
import React from "react";

import Hero from "../public/rectangle-14.png";
import Icon from "../public/star1.svg";

import Icon1 from "../public/networkicon.svg";
import Icon2 from "../public/timeicon.svg";
import Icon3 from "../public/peopleicon.svg";

import profile from "../public/ellipse-48.png";

const Cardfr6 = () => {
  return (
    <>
      <div className=" w-[305px] overflow-hidden flex flex-col bg-[#D9D9D9] rounded-lg mt-4 ">
        <Image src={Hero} className=" h-full w-full " />
        <div className=" flex justify-between mx-5 my-4 ">
          <h1 className=" text-primary-color ">Yoga | Online</h1>
          <div className=" flex justify-between mx-4 gap-2 ">
            <Image src={Icon} className=" h-full w-full " />
            <h1> 4.9 </h1>
          </div>
        </div>
        <div className=" mt-7 mx-2 ">
          <h1 className=" font-medium text-base ">Mindful Movement</h1>
        </div>
        <div className=" flex mt-3 items-center gap-3  mx-3 mb-4 ">
          <div className=" flex items-center gap-2 ">
            <Image src={Icon1} className=" h-[11px] w-[11px]  " />
            <h1 className=" font-medium text-sm ">12 Activity</h1>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Icon2} className=" h-[11px] w-[11[x]] " />
            <h1 className=" font-medium text-sm ">1hr 30min</h1>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Icon3} className=" h-[11px] w-[11[x]] " />
            <h1 className=" font-medium text-sm ">15000</h1>
          </div>
        </div>
        <div className=" mt-5 text-black ">
          <hr className=" mx-6 text-black " />
        </div>
        <div className=" flex my-8 mx-2 items-center justify-between ">
          <div className=" flex gap-2 items-center ">
            <div className=" h-[42px] w-[42px]  rounded-full overflow-hidden ">
              <Image
                src={profile}
                className=" h-full w-full object-contain  "
              />
            </div>
            <h1 className=" font-medium ">Albert Hamrich</h1>
          </div>
          <h1 className=" text-primary-color font-medium "> $150.00 </h1>
        </div>
      </div>
    </>
  );
};

export default Cardfr6;
