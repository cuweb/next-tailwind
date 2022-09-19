import React from "react";
export default function PagePanel(props) {
	return (
		<section className="border border-cu-black-100 bg-white p-4 [&:not(:last-child)]:mb-8">
			{props.children || "Empty Panel"}
		</section>
	);
}
