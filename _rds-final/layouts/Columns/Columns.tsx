import React from "react";

const styles = {
	column: `cu-column mx-auto mb-8 grid gap-8 px-8 [&:last-child]:mb-0 grid-cols-1`,
};

const gridTemplateCols = {
	"1": null,
	"2": "md:grid-cols-2",
	"3": "md:grid-cols-3",
	"4": "md:grid-cols-4",
	"1/3": "lg:grid-cols-one3rd",
	"2/3": "lg:grid-cols-two3rd",
};

interface ColumnProps {
	children: React.ReactNode;
	maxWidth?: string;
	cols?: "1" | "2" | "3" | "4" | "1/3" | "2/3";
}

const Column: React.FC<ColumnProps> = ({
	children,
	maxWidth = "7xl",
	cols = "1",
}): JSX.Element => {
	return (
		<div
			className={`${styles.column} max-w-${maxWidth} ${gridTemplateCols[cols]}`}
		>
			{children}
		</div>
	);
};

export default Column;
