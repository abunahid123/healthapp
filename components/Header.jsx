"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/logo-main.png";

import { motion } from "framer-motion";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const MothonLink = motion(Link);

import { IoMenu } from "react-icons/io5";
import Buttonmain from "./Buttonmain";

const Header = () => {
  const [openmanue, setOpenmenue] = useState(false);
  const hendleNav = () => {
    setOpenmenue(!openmanue);
  };
  return (
    <>
      <div className=" flex justify-between mx-3 mt-5 items-center lg:mr-7 ">
        <div className=" flex items-center  ">
          <div onClick={hendleNav} className="  px-4 cursor-pointer">
            <IoMenu className=" h-8 w-12 " />
          </div>
          <Image src={Logo} className=" h-[60px] w-[100px]" />
        </div>

        <div className="">
          <Buttonmain title={"Get the app"} href={"/about"} />
        </div>
      </div>
      <div
        className={
          openmanue
            ? " fixed top-0 left-0  h-screen w-[65%] md:w-[45%] lg:w-[20%] bg-[#ecf0f3] p-10 es duration-500 z-10 "
            : "fixed top-0 left-[-100%] p-10 ease-in duration-500"
        }
      >
        <div className=" flex items-center justify-end w-full">
          <div onClick={hendleNav} className=" cursor-pointer">
            <CloseIcon />
          </div>
        </div>
        <div className=" flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setOpenmenue(false)}
                className=" hover:text-blue-300 cursor-pointer py-4"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setOpenmenue(false)}
                className="hover:text-blue-300  cursor-pointer py-4"
              >
                About
              </li>
            </Link>
            {/* <Link href="#service">
              <li
                onClick={() => setOpenmenue(false)}
                className=" hover:text-blue-300 cursor-pointer py-4"
              >
                Service
              </li>
            </Link> */}
            <Link href="/blog">
              <li
                onClick={() => setOpenmenue(false)}
                className="hover:text-blue-300  cursor-pointer py-4"
              >
                Blog
              </li>
            </Link>
            <Link href="/forbuisness">
              <li
                onClick={() => setOpenmenue(false)}
                className="hover:text-blue-300  cursor-pointer py-4"
              >
                For Buisness
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-around items-center pb-4">
          <MothonLink
            href="https://www.facebook.com/omegaitsys"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon className="w-[24px] h-[24px]" />
          </MothonLink>
          <MothonLink
            href="https://www.instagram.com/"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon className="w-[24px] h-[24px]" />
          </MothonLink>
          <MothonLink
            href="https://twitter.com/home"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon className="w-[24px] h-[24px]" />
          </MothonLink>
          <MothonLink
            href="https://www.linkedin.com/company/omega-it-sys/"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon className="w-[24px] h-[24px]" />
          </MothonLink>
        </div>
      </div>
    </>
  );
};

export default Header;
