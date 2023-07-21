import React from "react";
import Image, { StaticImageData } from "next/image";

interface User {
	name: string;
	role: string;
	description: string;
	image: StaticImageData;
}

const UserCard: React.FC<User> = ({ name, role, image, description }) => {
	return (
		<div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 shadow-xl">
			<div className="mb-4 h-24 w-24 overflow-hidden rounded-full">
				<Image src={image} alt={name} />
			</div>
			<h2 className="mb-2 text-xl font-semibold">{name}</h2>
			<p className="text-sm text-gray-600">{description}</p>
		</div>
	);
};

export default UserCard;
