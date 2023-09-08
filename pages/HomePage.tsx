import React from "react";
import Image from "next/image";
import banner from "../public/wegabanner.svg";
import LazyLoad from "react-lazy-load";

function HomePage() {
	return (
		<div className="relative">
			<LazyLoad>
				<div className="bg-hero-image relative min-h-screen bg-cover bg-center">
					<div className="aspect-w-16 aspect-h-9">
						<div className="absolute top-0 left-0 h-full w-full">
							<Image
								src={banner}
								alt="WEGA banner"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
				</div>
			</LazyLoad>
			<p
				className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform pt-10 text-center text-5xl text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
				style={{ marginTop: "10px" }}
			>
				Western Esports & Gaming Association
			</p>
		</div>
	);
}

export default HomePage;
