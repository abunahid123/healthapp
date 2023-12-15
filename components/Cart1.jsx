import Image from "next/image";
import React from "react";

const Cart1 = ({ title, imgsrc }) => {
  return (
    <>
      <div className=" ml-12 md:mx-1 lg:mx-8 xl:mx-12 my-2 p-2 h-auto w-48   ">
        <div className=" flex justify-center ">
          <div className=" h-[60px] w-[60px] rounded-full bg-[#FF7917] bg-opacity-10 flex items-center justify-center ">
            <Image src={imgsrc} className=" w-8 h-8 " />
          </div>
        </div>
        <div className=" text-center my-5 text-primary-color ">
          <h1> {title} </h1>
        </div>
        <div className=" text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            debitis!
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart1;
