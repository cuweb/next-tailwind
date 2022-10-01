import React from "react";

const styles = {
	column: `cu-column mx-auto grid px-8 grid-cols-1 [&:last-child]:mb-0`,
};

const gridTemplateCols = {
	"1": "",
	"2": "md:grid-cols-2",
	"3": "md:grid-cols-3",
	"4": "md:grid-cols-4",
	"1/3": "lg:grid-cols-one3rd",
	"2/3": "lg:grid-cols-two3rd",
};

interface ColumnProps {
	children: React.ReactNode;
	maxWidth?: string;
	gridGap?: number;
	cols?: "1" | "2" | "3" | "4" | "1/3" | "2/3";
}

const Column: React.FC<ColumnProps> = ({
	children,
	maxWidth = "7xl",
	gridGap = 8,
	cols = "1",
}): JSX.Element => {
	return (
		<div
			className={`${styles.column} max-w-${maxWidth} gap-${gridGap} [&+.cu-column]:mt-${gridGap} ${gridTemplateCols[cols]}`}
		>
			{children}
		</div>
	);
};

export default Column;
