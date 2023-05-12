import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Image from "next/image";
import banner from "../public/wega.jpg";
import AccordionItem from "../components/AccordionItem";
import { useState } from "react";

const FAQ = () => {
	const [open, setOpen] = useState(false);
	const toggle = (index) => {
		if (open === index) {
			return setOpen(null);
		}
		setOpen(index);
	};
	const accordionData = [
		{
			title: "How Do I Join WEGA?",
			desc: "You can purchase a membership on the USC Storefront: with this link: ",
		},
		{
			title: "Do I have to play games to join WEGA?",
			desc: "No!",
		},
		{
			title: "Can I tryout for a collegiate team?",
			desc: "Yes! View the Teams page to view the teams that we have.",
		},
		{
			title: "How can I apply to become an exec?",
			desc: "Sugondeez Nutz",
		},
		{
			title: "How can I apply to become an exec?",
			desc: "Sugondeez Nutz",
		},
		{
			title: "How can I apply to become an exec?",
			desc: "Sugondeez Nutz",
		},
	];
	return (
		<div>
			<Navbar />
			<Image className="h-screen" src={banner} alt="FAQ page" />

			<section className="grid place-items-center text-center"> </section>
			<div className="">
				{accordionData.map((data, index) => {
					return (
						<AccordionItem
							key={index}
							title={data.title}
							description={data.desc}
							open={index === open}
							toggle={() => toggle(index)}
						/>
					);
				})}
			</div>

			<Footer />
		</div>
	);
};

export default FAQ;
