import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";

function HomePage() {
  return (
    <div>
      <Image src={banner} alt="WEGA banner" />
    </div>
  );
}

export default HomePage;
