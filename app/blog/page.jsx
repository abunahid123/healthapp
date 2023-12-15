import Blogcard from "@/components/Blogcard";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" mt-5 mb-64 ">
        <div className=" w-1/2 flex justify-end bg-secondary-color  ">
          <h1 className=" font-semibold text-2xl text-white mx-5">
            Blog Posts
          </h1>
        </div>
        <h1 className=" mt-6 mx-10 font-semibold  text-[#6D7D8B] text-lg ">
          Our latest updates and blogs about managing your team{" "}
        </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 ">
          <Blogcard />
          <Blogcard />
          <Blogcard />
          <Blogcard />
          <Blogcard />
        </div>
      </div>
    </>
  );
};

export default page;
