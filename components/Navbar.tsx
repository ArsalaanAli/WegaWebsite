import React from "react";
import Logo from "../public/favicon.ico";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="absolute w-screen sm:w-screen">
      <div className="flex flex-row justify-around">
        <div className="mt-5 flex flex-row">
          <div className="mx-24 text-xl text-white">Home</div>
          <div className="mx-24 text-xl text-white">Teams</div>
        </div>
        <Image
          src={"/LogoBadge.png"}
          alt="WEGA Logo"
          width={100}
          height={100}
        />
        <div className="mt-5 flex flex-row">
          <div className="mx-24 text-xl text-white">About Us</div>
          <div className="mx-24 text-xl text-white">FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
