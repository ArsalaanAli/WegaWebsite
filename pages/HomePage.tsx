import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";
import LazyLoad from "react-lazy-load";

function HomePage() {
	return (
		<div className="relative">
			<LazyLoad>
				<Image src={banner} alt="WEGA banner" />
			</LazyLoad>
			<p
				className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform pt-10 text-center text-5xl text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
				style={{ marginTop: "10px" }}
			>
				Western&#39;s #1 Gaming Community
			</p>
		</div>
	);
}

export default HomePage;
