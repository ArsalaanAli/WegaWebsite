import React from "react";
import Icons from "./Icons";

function Footer() {
	return (
		<footer className="bg-purple-800 text-white">
			<div className="bg-#ffffff19 px-4 py-7 sm:px-12 md:flex md:items-center md:justify-between">
				<span>© Western Esports Gaming Association 2023</span>
				<Icons />
			</div>
		</footer>
	);
}

export default Footer;
