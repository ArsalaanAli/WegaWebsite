import React from "react";
import Image from "next/image";
import Logo from "../public/favicon.ico";

const navbar = () => {
	return (
		<div>
			<nav className="flex items-center justify-between bg-purple-900 px-20 py-10">
				<div className="flex items-center">
					<Image
						src="/favicon.ico"
						alt="wega logo"
						width={60}
						height={60}
						className="pr-4"
					/>
					<h1 className="text-2xl font-bold text-white">WEGA</h1>
				</div>
				<div className="flex items-center">
					<ul className="flex items-center space-x-6">
						<li className="group cursor-pointer text-xl font-bold text-white transition duration-300">
							TEAMS
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
						<li className="group cursor-pointer text-xl font-bold text-white transition duration-300">
							ABOUT US
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
						<li className="group cursor-pointer text-xl font-bold text-white transition duration-300">
							FAQ
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default navbar;
