import React from "react";
import { rdsColorScheme } from "../../helpers/tailwindClasses";

const styles = {
	stackedlist: `overflow-hidden`,
	dividers: `[&>li]:border-cu-cu-black-50 [&>li]:border-b last:[&>li]:border-b-0`,
};

interface StackedListProps {
	children: React.ReactNode;
	dividers?: boolean;
}

const StackedList = ({ children, dividers }: StackedListProps) => {
	return (
		<ul
			role="list"
			className={`${styles.stackedlist} ${
				dividers ? styles.dividers : "bg-slate-400"
			}`}
		>
			{children}
		</ul>
	);
};

export default StackedList;
