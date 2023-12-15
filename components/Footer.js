"use client";

import React from "react";
import logo from "../public/logo01-1.png";
import Image from "next/image";

import { motion } from "framer-motion";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Input } from "postcss";
import Buttonmain from "./Buttonmain";
const MothonLink = motion(Link);

const Footer = () => {
  return (
    <>
      <div className="relative w-full h-auto bg-[#2B2B2B] ">
        <div className=" hidden  bg-primary-color relative py-9 md:pl-15  xl:pl-16 md:flex md:-top-24 mx-40 rounded-xl  ">
          <div className=" mx-9  flex flex-col gap-4 ">
            <h1 className=" text-center text-white ">
              Unlock your Fitness Potential: Your Workout Hub
            </h1>
            <h1 className=" text-center font-medium text-3xl ">
              Download the App Now
            </h1>
            <p className=" text-center text-white ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
            </p>
            <div className="flex flex-row items-start justify-start gap-[19px]  lg:mx-32 xl:mx-44 ">
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
          </div>
        </div>
        {/* ************************* main footer.............. ****************** */}
        <div className="flex flex-col  gap-4  justify-between mx-14  md:flex-row  ">
          <div className=" flex flex-col w-[220px] items-center ">
            <Image src={logo} className=" h-[88px] w-[131px] " />
            <p className=" text-white">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
            <div className="flex justify-around items-center pb-4">
              <MothonLink
                href="https://www.facebook.com/omegaitsys"
                target={"_blank"}
                className="w-6 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FacebookIcon className="w-[24px] h-[24px] text-white" />
              </MothonLink>
              <MothonLink
                href="https://www.instagram.com/"
                target={"_blank"}
                className="w-6 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <InstagramIcon className="w-[24px] h-[24px] text-white" />
              </MothonLink>
              <MothonLink
                href="https://twitter.com/home"
                target={"_blank"}
                className="w-6 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon className="w-[24px] h-[24px]  text-white" />
              </MothonLink>
              <MothonLink
                href="https://www.linkedin.com/company/omega-it-sys/"
                target={"_blank"}
                className="w-6 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon className="w-[24px] h-[24px] text-white" />
              </MothonLink>
            </div>
          </div>
          <div className=" flex flex-col justify-around ">
            <h1 className=" text-primary-color ">Company</h1>
            <h1 className=" text-white ">Home</h1>
            <h1 className=" text-white ">about us</h1>
            <h1 className=" text-white ">Blog</h1>
            <h1 className=" text-white ">For Buisness</h1>
          </div>
          <div className=" flex flex-col justify-around ">
            <h1 className=" text-primary-color ">Help</h1>
            <h1 className=" text-white ">Customer support</h1>
            <h1 className=" text-white ">Terms & condition </h1>
            <h1 className=" text-white "> privicy & policy </h1>
          </div>
          <div className=" flex items-center">
            <input
              id="email"
              type="email"
              className=" bg-black text-white outline-none px-2 py-2  rounded-l-md "
              placeholder="Enter you Email"
            />
            <div className=" bg-black  py-2 rounded-r-md ">
              <Buttonmain title={"Submit"} href={"/"} />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-2 text-center font-medium text-sm ">
        <h1>@copyrights2023 All Rights Reserved by</h1>
        <h1 className=" text-primary-color ">Fitster</h1>
      </div>
    </>
  );
};

export default Footer;
