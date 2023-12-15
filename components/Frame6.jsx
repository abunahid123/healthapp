import React from "react";
import Fr6com from "./Fr6com";
import Cardfr6 from "./Cardfr6";
import Buttonmain from "./Buttonmain";

const Frame6 = () => {
  return (
    <>
      <div className=" mt-16 mx-5 text-center mb-5  ">
        <h1 className=" font-bold text-xl ">- 750+ Workout Activity</h1>
        <h1 className=" font-semibold text-2xl ">
          <span className=" text-primary-color ">Our Featured</span> Workout
        </h1>
      </div>
      <div className=" mt-7 mx-5 flex justify-between border-l-4 border-t-4 border-r-4 border-l-primary-color border-t-primary-color border-r-primary-color px-3 md:px-5 lg:px-10 xl:px-14 pt-4  mb-5 ">
        <div className="">
          <Fr6com title={"Cetagoy"} type={" Cetagoy"} />
        </div>
        <div className="">
          <Fr6com title={"Trainer"} type={" Trainer"} />
        </div>
        <div className="">
          <Fr6com title={"Price  "} type={" Price"} />
        </div>
        <div className="">
          <Buttonmain title={"Search"} href={"/"} />
        </div>
      </div>
      <div className=" w-full xl:px-9 xl:ml-20 lg:mx-10  md:mx-9 mx-16 my-8 grid  lg:grid-cols-3 md:grid-cols-2 ">
        <Cardfr6 />
        <Cardfr6 />
        <Cardfr6 />
        <Cardfr6 />
        <Cardfr6 />
        <Cardfr6 />
        <Cardfr6 />
        <Cardfr6 />
      </div>
    </>
  );
};

export default Frame6;
