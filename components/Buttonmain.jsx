import Link from "next/link";
import React from "react";

const Buttonmain = ({ title, href }) => {
  return (
    <>
      <Link
        href={href}
        className=" bg-primary-color text-white text-sm rounded-full  px-4 py-2 "
      >
        {title}
      </Link>
    </>
  );
};

export default Buttonmain;
