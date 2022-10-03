import React from "react";

const styles = {
	panel: `cu-panel rounded-lg bg-white [&+.cu-panel]:mt-8`,
	border: `border border-cu-black-100`,
	shadow: `shadow-lg`,
};

interface PanelProps {
	children: React.ReactNode;
	hasBorder?: boolean;
	hasShadow?: boolean;
}

const PanelBase: React.FC<PanelProps> = ({
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

const Title = ({ children }: any) => {
	return (
		<h2 className="px-6 py-4 text-base font-bold border-b rounded-t-lg bg-gradient-to-r from-gray-50 to-white text-cu-black-900">
			{children}
		</h2>
	);
};

const Panel = Object.assign(PanelBase, {
	Title,
});

export default Panel;
