import React, { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Team = () => {
	const slides = [
		{
			url: "https://wallpapercave.com/wp/wp4302547.jpg",
		},
		{
			url: "https://library.sportingnews.com/2021-08/valorant-promo-image-ftr_7xt9eqw2n2k71icqzep2efi5k.jpeg",
		},
		{
			url: "https://trumpwallpapers.com/wp-content/uploads/Rocket-League-Wallpaper-04-1920x1080-1.jpg",
		},
		{
			url: "https://bleedingcool.com/wp-content/uploads/2022/12/Overwatch-World-Cup-Generic-Art-1200x675.jpg",
		},
		{
			url: "https://wallpapers.com/images/featured/3v67z0soy51nutlt.jpg",
		},
		{
			url: "https://c4.wallpaperflare.com/wallpaper/624/883/791/counter-strike-global-offensive-counter-strike-wallpaper-preview.jpg",
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

	const goToSlide = (slideIndex: React.SetStateAction<number>) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div>
			<Head>
				<title>Teams</title>
			</Head>
			<Navbar />
			<p className="flex justify-center py-6 text-center text-3xl font-bold">
				WEGA&#39;s Collegiate Teams
			</p>
			<div className="text-center text-xl">
				Interested in our collegiate teams? Here are some of the titles that we
				play in for various competitive leagues.
			</div>
			<div className="group relative m-auto h-[780px] w-full max-w-[1400px] py-16 px-4">
				<div
					style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
					className="h-full w-full rounded-2xl bg-cover bg-center bg-no-repeat duration-500"
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
