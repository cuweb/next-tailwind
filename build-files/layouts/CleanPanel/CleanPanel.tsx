import React from "react";

export default function CleanPanel(props: any) {
	const { className } = props;
	const addClasses = className ? className : "";

	return <section className={`${addClasses}`}>{props.children}</section>;
}
