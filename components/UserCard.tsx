import React from "react";
interface UserCardProps {
	name: string;
	role: string;
	image: string;
	description: string;
}
const UserCard: React.FC<UserCardProps> = ({
	name,
	role,
	image,
	description,
}) => {
	return (
		<div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 shadow-xl">
			<img src={image} alt={name} className="mb-4 h-24 w-24 rounded-full" />
			<h2 className="mb-2 text-xl font-semibold">{name}</h2>
			<p className="text-sm text-gray-600"> {description}</p>
		</div>
	);
};

export default UserCard;
