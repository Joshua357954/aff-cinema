import Image from "next/image";
import React from "react";
import { FaChevronDown as Down } from "react-icons/fa";
import { IoMdSearch as Search } from "react-icons/io";
import { LuSearch as Search2 } from "react-icons/lu";

function User() {
  return (
    <div className="relative w-fit h-fit ">
      <Image
        src="/prf.svg"
        alt="Profile"
        width={35}
        height={70}
        className="relative z-10"
      />
      <div className="absolute -top-1 -right-2 z-10 w-5 h-5">
        <Image
          src="/gold-badge.png"
          alt="Gold Badge"
          width={50}
          height={70}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

function navBar() {
  return (
    <nav className="bg-cod-gray flex justify-between py-4 px-10 items-center">
      <a href="/">
        <Image src="/aff-pf.jpg" width={50} height={70} />
      </a>
      {/* <div className="flex bg-white w-2/5 px-3 py-2 gap-4 rounded-full">
        <Search size={28} />
        <input
          className="thin-placeholder  text-sm w-full text-center focus:outline-none font-extralight"
          placeholder="Enter Keywords..."
        />
      </div> */}

      <div className="py-2 px-4 text-sm rounded-full w-1/4 bg-white flex justify-between items-center">
        <span className="font-bold">New</span>
        <span>Movies</span>
        <span>Series</span>
        <span className="bg-gray-400 p-3 rounded-full">
          <Search2 />
        </span>
      </div>

      <div className="flex items-center gap-3">
        <User />
        <div className="text-white flex gap-2 items-center">
          <p className="text-xs font-semibold">Beta</p>
          <Down size={11} color="white" />
        </div>
      </div>
    </nav>
  );
}

export default navBar;
