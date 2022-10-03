import React from "react";

const bgColorStyles = {
	gray: "bg-cu-black-50",
	red: "bg-cu-red",
};

interface ButtonProps {
	children?: React.ReactNode;
	bgColor: "gray" | "red";
}

const Button: React.FC<ButtonProps> = ({ children, bgColor }): JSX.Element => {
	return <button className={`${bgColorStyles[bgColor]}`}>{children}</button>;
};

export default Button;
