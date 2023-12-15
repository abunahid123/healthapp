import Image from "next/image";
import React from "react";

import avater1 from "../public/ellipse-45.png";
import avater2 from "../public/ellipse-41.png";
import avater3 from "../public/ellipse-40.png";
import avater4 from "../public/ellipse-42.png";
import avater5 from "../public/ellipse-44.png";
import avater6 from "../public/ellipse-43.png";

import Buttonmain from "./Buttonmain";

const Frame4 = () => {
  return (
    <>
      <div className=" my-10 mx-5 ">
        <div className=" text-center font-medium text-xl">
          <h1 className="">- Our Trainer</h1>
          <h1 className="">
            <span className=" text-primary-color">World-Class Fitness </span>{" "}
            <br /> Trainers At Your Fingertips !
          </h1>
        </div>
      </div>
      <div className=" my-4 mx-2 lg:mx-8 xl:mx-14  ">
        <div className=" flex justify-between items-center mx-24 sm:mx-36 md:mx-56  lg:mx-72  ">
          <Image
            src={avater1}
            className=" h-[80px] w-[80px] sm:h-[90px] sm:w-[90px] md:h-[128px] md:w-[128px] lg:h-32 lg:w-32"
          />
          <Image
            src={avater2}
            className=" h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] lg:h-[108px]  lg:w-[108px]"
          />
        </div>
        <div className="  flex justify-between  ">
          <Image
            src={avater3}
            className=" h-[110px] w-[110px] sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] lg:h-[174px] lg:w-[174px] mt-4 "
          />
          <div className=" items-center flex flex-col px-6 mt-6 ">
            <h1 className=" font-medium sm:font-thin text-2xl sm:text-4xl text-primary-color ">
              Contact Us
            </h1>
            <p className=" hidden sm:flex px-2 mx-2 sm:px-2 sm:mt-3 md:px-3 md:mt-4 md:mx-8 lg:px-7  lg:mt-6 lg:mx-20  ">
              The most powerful finance software that connects with your
              financial accounts. Track spending and categorize expenses so you
              can see where your money is going.
            </p>
            <div className=" mt-6 sm:mt-4 md:mt-5 lg:mt-7 ">
              <Buttonmain title="Get Started" href={"/"} />
            </div>
          </div>
          <Image
            src={avater4}
            className=" h-[110px] w-[110px] sm:h-[145px] sm:w-[145px] md:h-[160px] md:w-[160px] lg:h-[199px]  lg:w-[199px] mt-10 md:mt-14 lg:mt-20 "
          />
        </div>
        <div className=" flex justify-between mx-14 sm:mx-20  md:mx-24 mt-5 md:mt-6 lg:mx-36 lg:mt-7 ">
          <Image
            src={avater5}
            className=" h-[60px] w-[60px] sm:h-[70px ] sm:w-[70px] md:h-[88px] md:w-[88px] lg:h-[107px] lg:w-[107px]  "
          />
          <Image
            src={avater6}
            className=" h-[70px] w-[70px] sm:h-[80px] sm:w-[80px]  md:h-[110px] md:w-[110px] lg:h-[130px] lg:w-[130px]  "
          />
        </div>
      </div>
    </>
  );
};

export default Frame4;
