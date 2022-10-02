import React from "react";
import { colorScheme } from "../../helpers/tailwindClasses";

const styles = {
	panel: `rounded-lg bg-white`,
	border: `border border-cu-black-100`,
	shadow: `shadow-lg`,
};

interface PanelProps {
	children: React.ReactNode;
	hasBorder?: boolean;
	hasShadow?: boolean;
}

const Panel: React.FC<PanelProps> = ({
	children,
	hasBorder,
	hasShadow,
}): JSX.Element => {
	return (
		<div
			className={`${styles.panel} ${hasBorder ? styles.border : ""} ${
				hasShadow ? styles.shadow : ""
			}`}
		>
			{children}
		</div>
	);
};

export default Panel;
