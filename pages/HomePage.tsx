import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";
import LazyLoad from "react-lazy-load";

function HomePage() {
  return (
    <div className="overflow-hidden">
      <div className="absolute z-40 flex h-screen w-full flex-col ">
        <div className="mt-[15vw] flex flex-col items-center">
          <h1 className="text-center text-xl font-black text-white md:text-6xl lg:text-8xl">
            WESTERN ESPORTS
          </h1>
          <h1 className="mt-5 text-center text-xl font-black text-white md:text-6xl lg:text-8xl">
            GAMING ASSOCIATION
          </h1>
          <h3 className="mt-5 text-center text-2xl font-extralight text-white">
            Western University's largest gaming society
          </h3>
        </div>
      </div>
      <Image
        src={"/Hero.png"}
        alt="WEGA"
        width={2048}
        height={1365}
        className=" z-0 animate-imageanim"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "90vh",
          objectFit: "cover",
        }}
      />
      <div className="absolute flex h-screen w-full flex-col bg-black">
        <div className="mt-32 flex flex-col items-center">
          <h1 className="text-8xl font-black text-white underline decoration-purple-600">
            FAQ
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
