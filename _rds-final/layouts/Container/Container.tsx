import React from "react";
import { colorScheme } from "../../helpers/tailwindClasses";

const styles = {
	container: `cu-container py-8`,
};

interface ContainerProps {
	children: React.ReactNode;
	// maxWidth?: "none" | "full" | "3xl" | "5xl" | "7xl";
	bgColor?: "white" | "gray";
}

const Container: React.FC<ContainerProps> = ({
	children,
	// maxWidth = "7xl",
	bgColor = "white",
}): JSX.Element => {
	return (
		<div className={`${styles.container} ${colorScheme[bgColor]}`}>
			{children}
		</div>
	);
};

export default Container;
