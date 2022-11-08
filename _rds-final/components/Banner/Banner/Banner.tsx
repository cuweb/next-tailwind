import React from "react";
import GradientDiv from "../../../_misc/Gradient/GradientDiv";
import { rdsBannerSpacing } from "../../../utils/tailwindClasses";

interface BannerProps {
	children?: React.ReactNode;
	title?: string;
	bgType?: "image" | "gradient";
	// hasGradient?: boolean;
	hasSpacing?: "base" | "lg" | "xl";
}

// const BannerBase = ({ children, hasGradient, hasSpacing }: BannerProps) => {
const BannerBase = ({ children, bgType, hasSpacing }: BannerProps) => {
	return (
		<header
			className={`relative bg-cu-black-50 ${
				hasSpacing ? rdsBannerSpacing[hasSpacing] : ""
			}`}
		>
			{bgType === "image" ? <Image /> : ""}
			{bgType === "gradient" ? <GradientDiv /> : ""}

			{/* {hasGradient ? <GradientDiv /> : ""} */}
			<div className="relative px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
				{children}
			</div>
		</header>
	);
};

const Image = () => {
	return (
		<div className="absolute inset-0">
			<img
				className="object-cover w-full h-full"
				src="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
				alt=""
			/>
			<div
				className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
				aria-hidden="true"
			/>
		</div>
	);
};

const Title = ({ title }: BannerProps) => {
	return (
		<h1 className={`text-3xl font-medium text-cu-black-800 lg:text-4xl`}>
			{title}
		</h1>
	);
};

const Banner = Object.assign(BannerBase, {
	Title,
});

export default Banner;
