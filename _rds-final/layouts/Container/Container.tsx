import React from "react";
import { rdsColorScheme } from "../../utils/tailwindClasses";

const styles = {
	container: `cu-container py-16`,
};

interface ContainerProps {
	children: React.ReactNode;
	bgColor?: "white" | "gray";
}

const Container = ({ children, bgColor = "white" }: ContainerProps) => {
	return (
		<div className={`${styles.container} ${rdsColorScheme[bgColor]}`}>
			{children}
		</div>
	);
};

export default Container;
