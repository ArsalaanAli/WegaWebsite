import React, { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Image from "next/image";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Team = () => {
	const slides = [
		{
			url: "https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg",
		},
		{
			url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt232a8ff06bf93ebd/63eeb1546495981254659630/Valorant_2022_EP6-1_PlayVALORANT_ContentStackThumbnail_1200x625_MB01.png",
		},
		{
			url: "https://artwork.espncdn.com/programs/50b35a39-8e89-4a07-a0fb-89341f77cd9c/16x9/1280x720_20200405134150.jpg",
		},

		{
			url: "https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/11/05/8c31deb2/smallerlogo.jpg",
		},
		{
			url: "https://149455152.v2.pressablecdn.com/wp-content/uploads/2015/04/Hearthstone-iPhone.jpg",
		},
		{
			url: "https://www.talkesport.com/wp-content/uploads/7ee27e3c7ca9b2434381b2728cedb5a4.CSGO-Operation-10-Details.jpg",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div>
			<Navbar />
			<div className="group relative m-auto h-[780px] w-full max-w-[1400px] py-16 px-4">
				<div
					style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
					className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
				></div>
				{/* Left Arrow */}
				<div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
					<BsChevronCompactLeft onClick={prevSlide} size={30} />
				</div>
				{/* Right Arrow */}
				<div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
					<BsChevronCompactRight onClick={nextSlide} size={30} />
				</div>
				<div className="top-4 flex justify-center py-2">
					{slides.map((slide, slideIndex) => (
						<div
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
							className="cursor-pointer text-2xl"
						>
							<RxDotFilled />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Team;
