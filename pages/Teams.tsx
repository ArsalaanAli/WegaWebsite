import React, { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Team = () => {
	const slides = [
		{
			url: "https://wallpapercave.com/wp/wp4302547.jpg",
		},
		{
			url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt79971d6ef53d8a5f/5e8cdeaa07387e0c9bfff0c5/IMAGE_4.jpg	",
		},
		{
			url: "https://trumpwallpapers.com/wp-content/uploads/Rocket-League-Wallpaper-04-1920x1080-1.jpg",
		},

		{ url: "https://cdn.wallpapersafari.com/5/34/sDpa8T.jpg" },
		{
			url: "https://wallpapers.com/images/featured/3v67z0soy51nutlt.jpg",
		},
		{
			url: "https://wallpapercave.com/wp/wp7881092.jpg",
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
			<p className="flex justify-center text-center text-3xl font-bold ">
				WEGA's Collegiate Teams
			</p>
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
