import React from "react";
import Image from "next/image";
import Logo from "../public/favicon.ico";

const navbar = () => {
  return (
    <div>
      <nav className="flex justify-between px-20 py-10 items-center bg-white">
        <div className="flex items-center">
          <Image
            src="/favicon.ico"
            alt="wega logo"
            width={60}
            height={60}
            className="pr-4"
          />
          <h1 className="text-xl text-gray-800 font-bold">WEGA</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-gray-700">Home</li>
            <li className="font-semibold text-gray-700">Articles</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
