import Image from "next/image";
import React from "react";

import rect from "../../public/rectangle-23.png";
import rect1 from "../../public/rectangle-25.png";

const page = () => {
  return (
    <>
      <div className=" mt-5   ">
        <div className=" w-1/2 flex justify-end bg-secondary-color  ">
          <h1 className=" font-semibold text-2xl text-white mx-5">About</h1>
        </div>
        <div className=" bg-[#F4F4F2] flex flex-col md:flex-row  ">
          <div className="flex-1  mt-10">
            <h1 className=" font-semibold text-2xl text-center">
              Fitster's mission is to help the world improve its mental fitness.
            </h1>
            <div className=" text-center  flex flex-col items-center  mt-8  ">
              <p className=" w-[491px] my-3">
                Fitster's mission is to help the world improve its mental
                fitness one exercise routine at a time.
              </p>
              <p className=" w-[491px] my-3">
                Fitster's mission is to help the world improve mental fitness by
                unlocking their physical potential.
              </p>
              <p className=" w-[491px] my-3">
                Fitster's mission is to help the world improve mental health one
                exercise routine at a time.
              </p>
            </div>
          </div>
          <div className=" mx-11 mt-8 ">
            <Image src={rect} className=" w-[274px]  h-full" />
          </div>
        </div>
        <div className=" relative w-full ">
          <div className=" w-1/2 absolute right-0 flex justify-start bg-secondary-color mt-3 ">
            <h1 className=" font-semibold text-2xl text-white mx-5">
              What We Do
            </h1>
          </div>
        </div>
        <div className=" flex flex-col items-center mt-16 ">
          <p className=" text-center w-[400px] sm:w-[657px] mx-2 ">
            Our personalized approach matches you with a coach who understands
            YOU. We understand your needs can change over time or even in the
            moment. We provide customized plans and exercise routines that can
            adapt to your mood and energy level.
          </p>
          <p className=" text-center w-[400px] sm:w-[657px] mt-3 mx-2 ">
            Our individualized approach focuses on what YOU need when YOU need
            it. We understand the challenges of maintaining a healthy mind and
            body. Your needs can change over time or even in the moment. With
            the support of our personal coach, Fitster provides customized plans
            and exercises that can adapt to your mood and energy level.
          </p>
        </div>
        <Image src={rect1} className=" w-full h-full object-contain mt-4 " />
      </div>
    </>
  );
};

export default page;
