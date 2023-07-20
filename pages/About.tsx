import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";
import UserCard from "@/components/UserCard";
import Image from "next/image";
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
} from "react-icons/si";

interface User {
	name: string;
	role: string;
	description: string;
	image: string;
	// Add other properties as needed
}

const About = () => {
	const userData = [
		{
			name: "Jennica Cai",
			role: "President",
			description: "President",
			image: "dummy",
		},
		{
			name: "Ijlaal Abdali",
			role: "Events",
			description: "Co-VP Events",
			image: "dummy",
		},
		{
			name: "Linda Shi",
			role: "Events",
			description: "Co-VP Events",
			image: "dummy",
		},
		{
			name: "Michael Huang",
			role: "Marketing",
			description: "VP Marketing",
			image: "dummy",
		},
		{
			name: "Joey Siy",
			role: "Internal",
			description: "VP Internal",
			image: "dummy",
		},
		{
			name: "Valentina Virviescas-Medina",
			role: "Esports",
			description: "Co-VP Esports",
			image: "dummy",
		},
		{
			name: "Elwin Wang",
			role: "Esports",
			description: "Co-VP Esports",
			image: "dummy",
		},
		{
			name: "Manisha Rambarack",
			role: "Design",
			description: "VP Design",
			image: "dummy",
		},
		{
			name: "Jacob Fenn",
			role: "Media",
			description: "VP Media",
			image: "dummy",
		},
		{
			name: "Shelley Li",
			role: "Partnerships",
			description: "VP Partnerships",
			image: "dummy",
		},
	];

	// Group the user data by role
	const groupedData: { [key: string]: User[] } = userData.reduce(
		(acc: { [key: string]: User[] }, user: User) => {
			const { role } = user;
			if (!acc[role]) {
				acc[role] = [];
			}
			acc[role].push(user);
			return acc;
		},
		{}
	);
	return (
		<div>
			<Head>
				<title> About Us </title>
			</Head>
			<Navbar />
			<div>
				<h1 className="mb-4 pt-10 text-center text-4xl font-bold">
					What is WEGA?
				</h1>
				<h1 className="mb-4 text-center text-xl">
					Western Esports Gaming Association is Western University&#39;s
					official gaming and esports club.
				</h1>
				<h1 className="mb-4 text-center text-xl">
					WEGA hosts various tournaments, social events and programs throughout
					the year!
				</h1>
				<h1 className="mb-4 text-center text-xl">
					We have over 2000+ members in our discord server and over 200 members
					every year. Join the discord below!
				</h1>
				<Link target="_blank" href=" https://discord.com/invite/wega">
					<div className="flex items-center justify-center ">
						<div className="rounded-full border p-4 shadow-xl">
							<SiDiscord className="text-8xl" />
						</div>
					</div>
				</Link>
				<h1 className="mb-4 pt-10 text-center text-4xl font-bold">
					Meet the Team
				</h1>
				<div>
					<div className="flex content-center justify-center">
						<div>
							{Object.entries(groupedData).map(([role, users]) => (
								<div key={role}>
									<h2 className="mb-6 text-center text-2xl font-bold">
										{role}
									</h2>
									<div
										className={`grid grid-cols-1 gap-5 p-10 sm:grid-cols-3 md:grid-cols-2`}
									>
										{users.map((user, index) => (
											<UserCard
												key={index}
												name={user.name}
												role={user.role}
												description={user.description}
												image={user.image}
											/>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
