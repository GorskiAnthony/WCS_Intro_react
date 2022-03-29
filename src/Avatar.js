import React from "react";

const Avatar = ({ image, lastName, firstName }) => {
	return (
		<div className="card">
			<img src={image} alt={`${firstName} ${lastName}`} />
			<h1>
				{firstName} {lastName}
			</h1>
		</div>
	);
};

export default Avatar;
