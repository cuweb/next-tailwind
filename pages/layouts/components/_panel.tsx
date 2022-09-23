import React from "react";
export default function PagePanel(props: any) {
	return (
		<div className="p-4 bg-white border border-cu-black-100">
			{props.children || "Empty Panel"}
		</div>
	);
}
