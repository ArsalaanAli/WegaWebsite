import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";
import LazyLoad from "react-lazy-load";

function HomePage() {
  return (
    <div className="overflow-hidden outline outline-1 outline-red-50">
      <Image
        src={"/Hero.png"}
        alt="WEGA"
        width={2048}
        height={1365}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default HomePage;
