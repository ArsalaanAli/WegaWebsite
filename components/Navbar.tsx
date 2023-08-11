import React, { useEffect, useState } from "react";
import Logo from "../public/favicon.ico";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [windowDimension, setWindowDimension] = useState(1000);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 950;
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  if (isMobile) {
    return (
      <div className="absolute z-50 w-full">
        <div
          className={
            "absolute z-50 h-screen w-full overflow-hidden  transition-all duration-500 " +
            (isOpen ? "left-0" : "left-full scale-x-0")
          }
        >
          <div className="absolute h-full w-full overflow-hidden bg-black opacity-90"></div>
          <div className="fixed flex h-full w-full flex-col items-center justify-evenly overflow-hidden">
            <Link href="#" className="text-6xl font-bold text-white">
              Home
            </Link>
            <Link href="/Teams" className="text-6xl font-bold text-white">
              Teams
            </Link>
            <Link href="#" className="text-6xl font-bold text-white">
              About Us
            </Link>
            <Link href="#" className="text-6xl font-bold text-white">
              Membership
            </Link>
          </div>
        </div>

        <div className="absolute z-50 flex w-full flex-row justify-end">
          <button
            className="group flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        <div className="flex w-full flex-row items-center justify-center">
          <Image
            src={"/LogoBadge.png"}
            alt="WEGA Logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="absolute z-50 w-full sm:w-full">
        <div className="absolute z-50 flex w-full flex-row items-center justify-center">
          <Image
            src={"/LogoBadge.png"}
            alt="WEGA Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-row justify-around">
          <div className="mt-5 flex flex-row">
            <Link
              href="/"
              className="z-50 mx-12 text-white sm:text-sm md:text-xl"
            >
              Home
            </Link>
            <Link
              href="/Teams"
              className="z-50 mx-12 text-white sm:text-sm md:text-xl"
            >
              Teams
            </Link>
          </div>

          <div className="mt-5 flex flex-row">
            <Link
              href="#"
              className="z-50 mx-12 text-white sm:text-sm md:text-xl"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="sm:textLink-sm z-50 mx-12 text-white md:text-xl"
            >
              Membership
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
