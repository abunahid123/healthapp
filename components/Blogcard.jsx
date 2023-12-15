import Image from "next/image";
import React from "react";

import headerimg from "../public/rectangle-162.png";

const Blogcard = () => {
  return (
    <>
      <div className=" w-[370px] overflow-hidden rounded-xl bg-[#F9FAFB] m-3 shadow-md ">
        <Image src={headerimg} className=" w-[370px] h-[147px] object-cover " />
        <h1 className=" font-medium text-2xl mx-8 mt-3 ">
          The Emotional Toll of Being in UX
        </h1>
        <p className=" text-start text-sm mx-8 mt-2">
          There are times when our work impacts us deeply — sometimes in ways we
          neither acknowledge nor understand
        </p>
        <div className=" flex justify-between items-center mx-4 my-3 ">
          <Image
            src={headerimg}
            className=" h-[45px] w-[45px] rounded-full object-cover overflow-hidden "
          />
          <h1 className=" font-semibold text-xs text-[#6D7D8B] ">
            Wade Warren
          </h1>
          <h1 className=" font-semibold text-xs text-[#6D7D8B] ">
            2nd January,2022
          </h1>
        </div>
      </div>
    </>
  );
};

export default Blogcard;
