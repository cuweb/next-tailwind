import React from "react";

export default function StackedList(props: any) {
	const { children, className } = props;
	const addClasses = className ? className : "";

	return (
		<ul role="list" className={`${addClasses}`}>
			{children || "There are no items available"}
		</ul>
	);
}
