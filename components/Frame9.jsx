"use client";

import { use, useEffect, useState } from "react";
import BlogFr9 from "./BlogFr9";

const Frame9 = () => {
  return (
    <>
      <div className=" mt-14 flex justify-between mx-5  items-center ">
        <div className=" flex flex-col ">
          <h1 className=" font-medium  ">- Blog And News </h1>
          <h1 className=" font-medium text-2xl ">
            Our Latest <span className=" text-primary-color ">Blog </span> &
            <br />
            <span className=" text-primary-color ">News</span>
          </h1>
        </div>
        <div className=" ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            quidem.
          </p>
        </div>
      </div>
      <div className=" mx-10 xl:mx-16 lg:mx-10 grid lg:grid-cols-3 md:grid-cols-2 mb-52 ">
        <BlogFr9 />
        <BlogFr9 />
        <BlogFr9 />
      </div>
    </>
  );
};

export default Frame9;
