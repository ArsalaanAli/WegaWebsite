import React from "react";
import Link from "next/link";
import {
	SiDiscord,
	SiFacebook,
	SiTwitter,
	SiInstagram,
	SiTiktok,
	SiTwitch,
	SiYoutube,
	SiLinkedin,
} from "react-icons/Si";

function Icons() {
	return (
		<div>
			<span className="flex items-center">
				<Link target="_blank" href=" https://discord.com/invite/wega">
					<SiDiscord size="1.75rem" className="mr-3 " />
				</Link>
				<Link target="_blank" href="https://www.facebook.com/WesternEGA">
					<SiFacebook size="1.75rem" className="mr-3" />
				</Link>
				<Link target="_blank" href="https://twitter.com/WesternEGA">
					<SiTwitter size="1.75rem" className="mr-3" />
				</Link>
				<Link target="_blank" href="https://www.instagram.com/WesternEGA/">
					<SiInstagram size="1.75rem" className="mr-3" />
				</Link>
				<Link target="_blank" href="https://www.tiktok.com/@westernwega">
					<SiTiktok size="1.75rem" className="mr-3" />
				</Link>
				<Link
					target="_blank"
					href="https://www.youtube.com/@wega-westernesportsgaminga6387"
				>
					<SiYoutube size="1.75rem" className="mr-3" />
				</Link>
				<Link
					target="_blank"
					href="https://www.linkedin.com/company/western-electronic-gaming-association-wega/"
				>
					<SiLinkedin size="1.75rem" className="mr-3" />
				</Link>
			</span>
		</div>
	);
}

export default Icons;
