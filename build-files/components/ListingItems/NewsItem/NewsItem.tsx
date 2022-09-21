import React from "react";

export default function NewsItem(props: any) {
	const { className, padding, borderColor } = props;
	const addClasses = className ? className : "";
	const itemPadding = padding ? padding : "";
	const bottomBorder = borderColor
		? "border-b last:border-b-0 " + borderColor
		: "";

	return (
		<li className={`${addClasses} ${itemPadding} ${bottomBorder}`}>
			News List Item
		</li>
	);
}
