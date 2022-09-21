import React from "react";

export default function CleanPanel(props: any) {
	const { className } = props;
	return <section className={className}>{props.children}</section>;
}
