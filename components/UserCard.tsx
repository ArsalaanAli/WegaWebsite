import React from "react";

const UserCard = ({ name, role, image }) => {
	return (
		<div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 shadow-lg">
			<img src={image} alt={name} className="mb-4 h-24 w-24 rounded-full" />
			<h2 className="mb-2 text-xl font-semibold">{name}</h2>
			<p className="text-sm text-gray-600"> {role}</p>
		</div>
	);
};

export default UserCard;
