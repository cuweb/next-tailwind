import React from "react";

const styles = {
	container: `cu-column mx-auto mb-8 grid gap-8 px-8 [&:last-child]:mb-0 grid-cols-1`,
	// maxWidth: `max-w-3xl md:max-w-7xl`,
};

// const maxGridWidth = {
// 	"3xl": "max-w-3xl",
// 	"5xl": "max-w-5xl",
// 	"7xl": "max-w-7xl",
// };

// const gridTemplateCols = {
// 	"2": "md:grid-cols-2",
// 	"3": "md:grid-cols-3",
// 	"4": "md:grid-cols-4",
// 	"1/3": "lg:grid-cols-one3rd",
// 	"2/3": "lg:grid-cols-two3rd",
// };

interface ColumnProps {
	children: React.ReactNode;
	maxWidth?: string;
	cols?: "2" | "3" | "4" | "1/3" | "2/3";
}

const Column: React.FC<ColumnProps> = ({
	children,
	maxWidth = "7xl",
	cols,
}): JSX.Element => {
	return (
		<div
			// className={`${styles.container} max-w-${maxWidth} ${gridTemplateCols[cols]}`}
			className={`${styles.container} max-w-${maxWidth} md:grid-cols-${cols}`}
		>
			{children}
		</div>
	);
};

export default Column;
