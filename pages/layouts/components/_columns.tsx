import React from "react";
export default function Columns(props: any) {
	const { children, maxWidth, columns } = props;
	const rdsMaxWidth = maxWidth ? "max-w-" + maxWidth : "max-w-5xl"; // odd thing here
	const rdsColumns = columns ? "grid-cols-" + columns : "grid-cols-1";

	return (
		<article
			className={`cu-column mx-auto mb-8 grid ${rdsMaxWidth} ${rdsColumns} gap-8 px-8 [&:last-child]:mb-0`}
		>
			{children || "Empty Panel"}
		</article>
	);
}