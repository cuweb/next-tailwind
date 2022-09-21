import React from "react";

export default function Columns(props: any) {
	const { children, maxWidth, columns, breakPoint } = props;
	const rdsMaxWidth = maxWidth ? maxWidth : "5xl"; // odd thing here
	const rdsColumns = columns ? columns : "grid-cols-1";

	return (
		<div
			className={`cu-column mx-auto mb-8 grid max-w-${rdsMaxWidth} grid-cols-1 ${rdsColumns} gap-8 px-8 [&:last-child]:mb-0`}
		>
			{children || "Empty Panel"}
		</div>
	);
}
