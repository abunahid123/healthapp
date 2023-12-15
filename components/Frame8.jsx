"use client";

import React, { useState } from "react";
import Buttonmain from "./Buttonmain";
import Crfr8 from "./Crfr8";

const Frame8 = () => {
  const [state, setState] = useState(false);

  const handleclick = () => {
    setState(!state);
  };

  return (
    <>
      <div className="flex justify-between mx-5 mt-16 items-center ">
        <div className="">
          <h1 className=" font-medium  ">- Expert Trainer</h1>
          <h1 className=" font-medium text-lg">
            <span className=" text-primary-color ">Empower Your Fitness: </span>
            <br />
            Your Personal Trainer
          </h1>
        </div>
        <div onClick={handleclick} className="  ">
          <Buttonmain title={"View All Agents"} href={"#"} />
        </div>
      </div>

      <div className=" mt-8 mx-5 xl:mx-10  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
        {state ? (
          <>
            <Crfr8 />
            <Crfr8 />
            <Crfr8 />
            <Crfr8 />
            <Crfr8 />
            <Crfr8 />
            <Crfr8 />
          </>
        ) : (
          <>
            <Crfr8 />
            <Crfr8 />
            <Crfr8 />
          </>
        )}
      </div>
    </>
  );
};

export default Frame8;
