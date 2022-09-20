import React from "react";
export default function Columns(props: any) {
	const { children, columns, maxWidth } = props;

	return (
		<article
			className={`mx-auto mb-8 grid max-w-${maxWidth} grid-cols-${columns} gap-8 px-8 [&:last-child]:mb-0`}
		>
			{children || "Empty Panel"}
		</article>
	);
}
