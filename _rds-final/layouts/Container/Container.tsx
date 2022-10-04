import React from "react";
import { colorScheme } from "../../helpers/tailwindClasses";

const styles = {
	container: `cu-container py-8`,
};

interface ContainerProps {
	children: React.ReactNode;
	bgColor?: "white" | "gray";
}

const Container = ({ children, bgColor = "white" }: ContainerProps) => {
	return (
		<div className={`${styles.container} ${colorScheme[bgColor]}`}>
			{children}
		</div>
	);
};

export default Container;
