import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";
import UserCard from "@/components/UserCard";
import Image from "next/image";

const About = () => {
	const userData = [
		{ name: "Jennica Cai", role: "President" },
		{ name: "Ijlaal Abdali", role: "VP Events" },
		{ name: "Linda Shi", role: "VP Events" },
		{ name: "Michael Huang", role: "VP Marketing" },
		{ name: "Joey Siy", role: "VP Internal" },
		{ name: "Valentina Virviescas-Medina", role: "VP Esports" },
		{ name: "Elwin Wang", role: "VP Esports" },
		{ name: "Manisha Rambarack", role: "VP Design" },
		{ name: "Jacob Fenn", role: "VP Media" },
		{ name: "Shelley Li", role: "VP Media Partnerships" },
	];

	// Group the user data by role
	const groupedData = userData.reduce((acc, user) => {
		const { role } = user;
		if (!acc[role]) {
			acc[role] = [];
		}
		acc[role].push(user);
		return acc;
	}, {});
	return (
		<div>
			<Head>
				<title> About Us </title>
			</Head>
			<Navbar />
			<div>
				<h1 className="mb-4 text-center text-2xl font-bold">Meet the Team!</h1>
				<div>
					<div className="flex">
						<div>
							{Object.entries(groupedData).map(([role, users]) => (
								<div key={role}>
									<h2 className="mb-6 text-center text-2xl font-bold">
										{role}
									</h2>
									<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
										{users.map((user, index) => (
											<UserCard key={index} name={user.name} role={user.role} />
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
