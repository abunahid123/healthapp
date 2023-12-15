import React from "react";
import Buttonmain from "./Buttonmain";
import Image from "next/image";
import Vector from "../public/vector.svg";

const Frame1 = () => {
  return (
    <>
      <div className="mx-5 flex flex-col md:flex-row mt-7 mb-5 ">
        <div className=" md:w-1/3 ">
          <div className="flex flex-col ">
            <div className=" mx-6 font-medium text-2xl ">
              <h1>
                Download Our <br />
                <span className=" text-primary-color ">Fitness App</span> Today
                !
              </h1>
            </div>
            <div className=" mx-6 mt-3  ">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                facilis possimus vitae veritatis? .
              </p>
            </div>
            <div className=" mx-6 mt-3 ">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                facilis possimus vitae veritatis? .
              </p>
            </div>
            <div className="flex mx-6 mt-8  divide-black  divide-x-2  ">
              <div className=" pr-2  ">
                <div className=" text-primary-color font-extralight text-lg ">
                  <h1>5 Million+</h1>
                </div>
                <div className=" text-[#6C6C6C] font-medium  text-sm ">
                  <h1>Worldwide Active Users</h1>
                </div>
              </div>
              <div className=" pl-8 pr-2  ">
                {" "}
                <div className=" text-primary-color font-extralight text-lg ">
                  <h1>1250+</h1>
                </div>
                <div className=" text-[#6C6C6C] font-medium  text-sm ">
                  <h1>Trainer</h1>
                </div>
              </div>
              <div className=" pl-8 ">
                {" "}
                <div className=" text-primary-color font-extralight text-lg ">
                  <h1>750+</h1>
                </div>
                <div className=" text-[#6C6C6C] font-medium  text-sm ">
                  <h1>Workout</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 md:w-2/3 md:relative">
          <div className="flex md:absolute right-2 justify-between ">
            <div className="flex flex-col mr-7  ">
              <div className=" font-medium text-lg mx-2 lg:mb-4  ">
                <h1>For iOS</h1>
              </div>
              <div className=" mt-9 mb-4 ">
                <Buttonmain title={"Download app"} href={"/"} />
              </div>
              <div className=" mt-9 mx-2 ">
                <Image src={Vector} className=" w-[55px] h-[55px] " />
              </div>
            </div>
            <div className="flex flex-col mx-5  ">
              <div className=" font-medium text-lg ml-3 lg:mb-4 ">
                <h1>For Android</h1>
              </div>
              <div className=" mt-9 mb-4 ">
                <Buttonmain title={"Download app"} href={"/"} />
              </div>
              <div className=" mt-9 ml-6 pl-4 ">
                <Image src={Vector} className=" w-[55px] h-[55px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame1;
