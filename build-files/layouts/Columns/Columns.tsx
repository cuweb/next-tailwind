import React from "react";

export default function Columns(props: any) {
	const { children, maxWidth, columns, gridGap } = props;
	const setMaxWidth = maxWidth ? maxWidth : "5xl"; // odd thing here
	const setColumns = columns ? columns : "grid-cols-1";
	const setGridGap = gridGap ? gridGap : "gap-8";

	return (
		<div
			className={`cu-column mx-auto mb-8 grid max-w-${setMaxWidth} grid-cols-1 ${setColumns} ${setGridGap} px-8 [&:last-child]:mb-0`}
		>
			{children || "Empty Panel"}
		</div>
	);
}
