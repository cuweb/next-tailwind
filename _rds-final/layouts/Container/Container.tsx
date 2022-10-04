import React from "react";
import { rdsColorScheme } from "../../helpers/tailwindClasses";

const styles = {
	container: `cu-container py-8`,
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
