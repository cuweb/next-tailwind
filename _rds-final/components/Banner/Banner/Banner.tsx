import React from "react";
import GradientDiv from "../../../_misc/Gradient/GradientDiv";
import { rdsBannerSpacing } from "../../../utils/tailwindClasses";

interface BannerProps {
	children?: React.ReactNode;
	title?: string;
	hasGradient?: boolean;
	hasSpacing?: "none" | "base" | "lg" | "xl";
}

const BannerBase = ({
	children,
	hasGradient,
	hasSpacing = "none",
}: BannerProps) => {
	return (
		<header
			className={`relative ${rdsBannerSpacing[hasSpacing]} bg-cu-black-50`}
		>
			{hasGradient ? <GradientDiv /> : ""}
			<div className="relative flex items-start px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
				{children}
			</div>
		</header>
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
