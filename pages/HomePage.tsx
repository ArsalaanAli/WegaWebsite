import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";
import LazyLoad from "react-lazy-load";

function HomePage() {
	return (
		<div>
			<LazyLoad>
				<Image src={banner} alt="WEGA banner" />
			</LazyLoad>
			<p className="absolute top-[83%] w-[100%] text-center text-5xl font-bold">
				Western's #1 Gaming Community
			</p>
		</div>
	);
}

export default HomePage;
