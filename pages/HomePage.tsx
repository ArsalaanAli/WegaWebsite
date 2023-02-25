import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.png";

function HomePage() {
	return (
		<div className="w-full h-screen">
			<Image src={banner} alt="WEGA banner" />
		</div>
	);
}

export default HomePage;
