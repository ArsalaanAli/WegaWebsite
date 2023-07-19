import React from "react";
import Image from "next/image";
import Logo from "../public/favicon.ico";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

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
					<ul className="group cursor-pointer text-xl font-bold  transition duration-300">
						<Link href="../">WEGA</Link>
						<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
					</ul>
				</div>
				<div className="flex items-center p-0">
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
							aria-label="Toggle menu"
						>
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{isOpen ? (
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
									/>
								) : (
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16ZM4 21H20V19H4V21Z"
									/>
								)}
							</svg>
						</button>
					</div>
					<ul
						className={`${
							isOpen ? "block" : "hidden"
						} md:flex md:items-center md:space-x-6`}
					>
						<li className="group cursor-pointer text-xl font-bold  transition duration-300">
							<Link href="../Teams">TEAMS</Link>
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
						<li className="group cursor-pointer text-xl font-bold  transition duration-300">
							<Link href="/About">ABOUT US</Link>
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
						<li className="group cursor-pointer text-xl font-bold  transition duration-300">
							<Link href="/FAQ">FAQ</Link>
							<span className="block h-0.5 max-w-0 bg-purple-600 transition-all duration-500 group-hover:max-w-full" />
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
