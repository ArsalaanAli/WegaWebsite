import React from "react";
import Logo from "../public/favicon.ico";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="absolute z-40 w-full sm:w-full">
      <div className="absolute flex w-full flex-row items-center justify-center">
        <Image
          src={"/LogoBadge.png"}
          alt="WEGA Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-row justify-around">
        <div className="mt-5 flex flex-row">
          <div className="mx-12 text-white sm:text-sm md:text-xl">Home</div>
          <div className="mx-12 text-white sm:text-sm md:text-xl">Teams</div>
        </div>

        <div className="mt-5 flex flex-row">
          <div className="mx-12 text-white sm:text-sm md:text-xl">About Us</div>
          <div className="mx-12 text-white sm:text-sm md:text-xl">
            Membership
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
