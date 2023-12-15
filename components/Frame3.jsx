import React from "react";
import Cart1 from "./Cart1";
import Vector from "../public/newicon.svg";
import Vector2 from "../public/newicon2.svg";
import Vector3 from "../public/newicon3.svg";
import Vector4 from "../public/newicon4.svg";

const Frame3 = () => {
  return (
    <>
      <div className=" mt-16 mb-5 ">
        <div className="flex justify-between my-6 mx-3  md:mx-10">
          <div className="">
            <h1 className=" font-medium text-lg ">- Benefits of Fitness App</h1>
            <h1 className=" font-medium  ">
              <span className="text-primary-color"> How it Works </span> <br />{" "}
              of Fitness App
            </h1>
          </div>
          <div className=" divide-black divide-x-2  ">
            <p></p>
            <p className=" pl-2 md:px-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap ">
          <Cart1 title={"Energy"} imgsrc={Vector} />
          <Cart1 title={"Clarity"} imgsrc={Vector2} />
          <Cart1 title={"Energy"} imgsrc={Vector3} />
          <Cart1 title={"Energy"} imgsrc={Vector4} />
          <Cart1 title={"Energy"} imgsrc={Vector} />
        </div>
      </div>
    </>
  );
};

export default Frame3;
