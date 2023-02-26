import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";

function HomePage() {
	return (
		<div>
			<Image src={banner} alt="WEGA banner" />
			<h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 truncate text-4xl text-black ">
				Westerns Leading Gaming Community
			</h1>
		</div>
	);
}

export default HomePage;
