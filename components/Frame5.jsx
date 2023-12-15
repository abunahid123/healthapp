import React from "react";

import Rectange from "../public/rectangle-10.png";
import Image from "next/image";

const Frame5 = () => {
  return (
    <>
      <div className=" text-center mt-7 ">
        <h1 className=" text-xl ">- App Demo</h1>
        <h1 className=" text-2xl ">
          <span className=" text-primary-color ">View Our</span> App Demo
        </h1>
      </div>
      <div className=" flex justify-center mt-8 ">
        <Image
          src={Rectange}
          className="  lg:h-[600px] lg:w-[990px] xl:h-[633px] xl:w-[1034px] "
        />
      </div>
    </>
  );
};

export default Frame5;
