import React from "react";
import {
	gridMaxWidth,
	gridTemplateCols,
	gridSpacing,
} from "../../helpers/tailwindClasses";

const styles = {
	column: `cu-column mx-auto grid px-8 grid-cols-1 [&:last-child]:mb-0`,
};

interface ColumnProps {
	children: React.ReactNode;
	maxWidth?: "none" | "full" | "3xl" | "5xl" | "7xl";
	gridGap?: "0" | "0.5" | "1" | "2" | "4" | "8";
	cols?: "1" | "2" | "3" | "4" | "1/3" | "2/3";
}

const Column: React.FC<ColumnProps> = ({
	children,
	maxWidth = "7xl",
	gridGap = "8",
	cols = "1",
}): JSX.Element => {
	return (
		<div
			className={`${styles.column} ${gridMaxWidth[maxWidth]} ${gridSpacing[gridGap]} ${gridTemplateCols[cols]}`}
		>
			{children}
		</div>
	);
};

export default Column;
