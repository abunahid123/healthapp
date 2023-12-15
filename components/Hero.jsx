import Image from "next/image";
import React from "react";
import Frame11 from "../public/PlayStore.png";
import Frame12 from "../public/AppStore.png";
import Link from "next/link";
import Frame10 from "../public/Frame10.png";
import Subtext from "./Subtext";
import Heroimg from "../public/Grouphero.svg";
import Icon from "../public/icons.svg";
import Icon2 from "../public/icons1.svg";

const Hero = () => {
  return (
    <>
      <div className=" bg-herobg h-auto   bg-no-repeat">
        <div className=" flex flex-col lg:flex-row  m-4 ">
          <div className=" flex-col  lg:w-1/3 mt-4 mx-8  ">
            <h1 className=" font-extralight ">
              The Best Fitness & Workout App
            </h1>
            <h1 className=" font-kadwa font-extrabold text-3xl my-4">
              Your All-in-One
            </h1>
            <h1 className=" text-primary-color font-Inika text-3xl my-6 ">
              Your personal fitness and mental health coach.
            </h1>
            <h1 className=" my-6">
              Join the Fitster & get personalized coaching for your fitness and
              mental health needs. Our goal is to improve your overall health by
              using AI to create custom fitness plans based on your specific
              needs and goals.
            </h1>
            {/* <div className=" flex gap-4 ">
                <Link href={"/"}>
                  <Image
                    src={Frame11}
                    className=" mt-11 w-[150px] h-[45px]  sm:w-[202px] sm:h-[60px] "
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={Frame12}
                    className=" mt-11 w-[150px] h-[45px]  sm:w-[202px] sm:h-[60px] "
                  />
                </Link>
              </div>
              <Image src={Frame10} className=" h-full w-full" /> */}

            {/* ********************************** copyed code..................start .......................****************************** */}

            <div className="flex flex-col items-start justify-start gap-[20px] text-xs text-mediumslateblue font-paragraph-1">
              <div className="flex flex-row items-start justify-start gap-[19px] ">
                <Link href={"/"}>
                  <img
                    className="relative w-[150px] h-[45px]  sm:w-[202px] sm:h-[60px]"
                    alt=""
                    src="/play-store.svg"
                  />
                </Link>
                <Link href={"/"}>
                  <img
                    className="relative w-[150px] h-[45px]  sm:w-[202px] sm:h-[60px]"
                    alt=""
                    src="/app-store.svg"
                  />
                </Link>
              </div>
              <div className="flex flex-row items-start justify-start gap-[19px]">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="rounded-181xl w-[27px] h-[27px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar12@2x.png"
                    />
                    <img
                      className="rounded-181xl w-[27px] h-[27px] overflow-hidden shrink-0 object-cover ml-[-4px]"
                      alt=""
                      src="/avatar13@2x.png"
                    />
                    <img
                      className="rounded-181xl w-[27px] h-[27px] overflow-hidden shrink-0 object-cover ml-[-4px]"
                      alt=""
                      src="/avatar14@2x.png"
                    />
                    <img
                      className="rounded-181xl w-[27px] h-[27px] overflow-hidden shrink-0 object-cover ml-[-4px]"
                      alt=""
                      src="/avatar15@2x.png"
                    />
                    <img
                      className="rounded-181xl w-[27px] h-[27px] overflow-hidden shrink-0 object-cover ml-[-4px]"
                      alt=""
                      src="/avatar16@2x.png"
                    />
                    <img
                      className="rounded-181xl w-[27px] h-[27px] overflow-hidden shrink-0 object-cover ml-[-4px]"
                      alt=""
                      src="/avatar17@2x.png"
                    />
                    <img
                      className="rounded-181xl w-[27px] h-[27px] overflow-hidden shrink-0 object-cover ml-[-4px]"
                      alt=""
                      src="/avatar18@2x.png"
                    />
                    <div className="relative rounded-181xl bg-ghostwhite box-border w-7 h-7 ml-[-4px] border-[2px] border-solid border-shades-white">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_14px)] leading-[18px] font-medium inline-block w-6">
                        +5
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-xl bg-shades-white box-border w-[25px] h-[25px] border-[1px] border-dashed border-lightgray">
                    <div className="absolute h-[96%] w-[96%] top-[0%] right-[4%] bottom-[4%] left-[0%] rounded-xl overflow-hidden flex flex-row items-center justify-center p-1 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/plus.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-left text-base text-color-n4 font-button-12">
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <b className="relative">5M +</b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-2.5 text-3xs text-dimgray">
                    <div className="relative font-medium">Worldwide Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ******************second div start for hero**************************************************** */}
          <div className=" hidden lg:flex w-2/3 relative  ">
            <div className=" absolute lg:top-[300px]  xl:top-[350px] xl:left-36 ">
              <Subtext
                icon={Icon2}
                title={"700+ Workout activity"}
                className="bg-[#5D2C02]"
              />
            </div>

            <div className=" absolute lg:left-[200px] xl:left-[400px] flex ">
              <Image
                src={Heroimg}
                className=" lg:h-[420px] lg:w-[200px] xl:h-[448px] xl:w-[223px] lg:mx-1 xl:mx-5"
              />

              <div className=" lg:mt-14 xl:mt-24 ">
                <Subtext
                  icon={Icon}
                  title={"700+ Workout activity"}
                  className="bg-[#68DBFF]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
