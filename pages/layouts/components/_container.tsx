import React from "react";
export default function Container(props: any) {
	const { children, bgColor } = props;
	const rdsBackground = bgColor === "gray" ? "bg-cu-black-50" : "bg-white";

	return (
		<section className={`cu-container ${rdsBackground} py-8`}>
			{children || "Empty Panel"}
		</section>
	);
}
