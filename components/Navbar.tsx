import React from "react";
import Image from "next/image";
import Logo from "../public/favicon.ico";
import Link from "next/link";

const navbar = () => {
	return (
		<div>
			<nav className="flex items-center justify-between px-5 py-3">
				<div className="flex items-center p-0">
					<Link href="/">
						<Image
							src="/WegaLogoSVG.svg"
							alt="wega logo"
							width={80}
							height={80}
							className=""
						/>
					</Link>
					<Link href="/">
						<h1 className="text-2xl font-bold">WEGA</h1>
					</Link>
				</div>
				<div className="flex items-center p-0">
					<ul className="flex items-center space-x-6">
						<li className="group cursor-pointer text-xl font-bold  transition duration-300">
							<Link href="../Teams">TEAMS </Link>
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
						<li className="group cursor-pointer text-xl font-bold  transition duration-300">
							<Link href="/About">ABOUT US</Link>
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
						<li className="group cursor-pointer text-xl font-bold  transition duration-300">
							<Link href="/FAQ">FAQ </Link>
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default navbar;
