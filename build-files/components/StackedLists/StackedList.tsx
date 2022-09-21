import React from "react";

export default function StackedList(props: any) {
	const { children } = props;
	return <ul role="list">{children || "There are no items available"}</ul>;
}
