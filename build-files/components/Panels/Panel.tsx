import React from "react";
export default function Panel(props: any) {
	return (
		<div className="border border-cu-black-100 bg-white p-4 [&:not(:last-child)]:mb-8">
			{props.children || "Empty Panel"}
		</div>
	);
}
