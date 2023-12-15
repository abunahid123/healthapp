import Image from "next/image";
import React from "react";

import headimg from "../../public/rectangle-30.png";
import headimg2 from "../../public/rectangle-31.png";

const page = () => {
  return (
    <>
      <div className=" mt-5 mb-64 ">
        <div className=" w-1/2 flex justify-end bg-secondary-color  ">
          <h1 className=" font-semibold text-2xl text-white mx-5">
            For Buisness
          </h1>
        </div>
        <div className=" my-5 mx-5 flex flex-col md:flex-row justify-between items-center gap-4 ">
          <div className=" mx-8  ">
            <h1 className=" font-extrabold text-xl text-start md:w-[391] ">
              Fit bodies create healthy minds. Healthy minds create a healthy
              work environment.
            </h1>
          </div>
          <div className="">
            <Image src={headimg} className=" h-full w-full object-cover " />
          </div>
        </div>

        <div className=" relative  w-full ">
          <div className=" absolute w-1/2 right-0 flex justify-center  ">
            <h1 className=" font-extrabold text-xl text-start md:w-[391] ">
              Fitster for business
            </h1>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row mx-5 justify-between items-center gap-4  mt-16 ">
          <div className="">
            <Image
              src={headimg2}
              className=" w-full  h-full lg:w-[527px] lg:h-[280px] object-cover "
            />
          </div>
          <div className=" font-semibold text-xl text-start w-[570px] ">
            <h1>
              The average employee will spend at least 90,000 hours working in
              their lifetime. Employee burnout, fatigue, decreased productivity
              and innovation can become all too common in the workplace if
              employees do not have tools to manage their mental health.
              Businesses can invest in their most valuable asset – their
              employees by offering Fitster. As a benefit, your employeeswill be
              healthier, experience more productive collaboration, and increased
              ability to focus.
            </h1>
          </div>
        </div>
        <div className="  w-full bg-[#F4F4F2] text-center mt-10 py-5  ">
          <h1 className=" font-extrabold text-x  ">How it works</h1>
          <h1 className=" font-bold text-lg mt-5 ">
            {" "}
            Easy set-up and administration{" "}
          </h1>
          <div className=" flex justify-center ">
            <p className=" font-semibold  w-[825px] mt-6  ">
              With the support of our professional team, we can set up your
              program in a matter of weeks. Once your program is up and running,
              your employees will see benefits within days of using the Fitster
              application.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center my-8 mx-5  lg:mx-16 xl:mx-24 ">
          <div className="">
            <h1 className=" font-extrabold text-2xl  ">World-class support</h1>
          </div>
          <div className="">
            <h1 className=" text-start md:w-[400px] lg:w-[689px] font-semibold text-lg ">
              A member of our team will be assigned to ensure your business has
              the tools needed to implement the platform. The performance
              dashboard will keep administrators informed of progress toward key
              metrics. In addition to reliable performance data to monitor your
              return oninvestment, we provide live and recorded webinars and
              ongoing support to help your business integrate Fitster into your
              company's culture.
            </h1>
          </div>
        </div>
        <div className=" flex justify-center text-center bg-[#F4F4F2]  pb-6">
          <h1 className=" font-semibold text-2xl mx-8  mt-9 ">
            Your mental health has a direct correlation with your employees'
            ability to focus, collaborate as a team & decision making. Taking
            care of your mind is essential when trying to maintain your
            employees' mental health.
          </h1>
        </div>
      </div>
    </>
  );
};

export default page;
