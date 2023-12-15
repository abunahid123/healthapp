"use client";

import Image from "next/image";
import React from "react";
import Icon from "../public/cetagoyicon.svg";
import Icon1 from "../public/frame6icon.svg";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Fr6com = ({ type, title }) => {
  const handleclick = () => {};
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className=" flex flex-col  ">
        <h1 className=" text-sm sm:text-base font-semibold ">{title}</h1>
        {/* <div className="flex items-center gap-1 sm:gap-5  "> */}
        {/* <Image
            src={Icon}
            className=" h-[10px] w-[10px] sm:h-[16px] sm:w-[16px] "
          />
          <h1 className=" text-xs sm:text-base ">Cetagory</h1>
          <Image
            src={Icon1}
            className=" h-[4px] w-[8px] sm:w-[11px] sm:h-[6px] "
          /> */}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">{type}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            className=" "
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* </div> */}
    </>
  );
};

export default Fr6com;
