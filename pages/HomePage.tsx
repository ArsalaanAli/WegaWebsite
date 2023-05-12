import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";

function HomePage() {
	return (
		<div>
			<Image src={banner} alt="WEGA banner" />
			<p className="absolute top-[83%] w-[100%] text-center text-5xl">
				Western's #1 Gaming Community
			</p>
		</div>
	);
}

export default HomePage;
