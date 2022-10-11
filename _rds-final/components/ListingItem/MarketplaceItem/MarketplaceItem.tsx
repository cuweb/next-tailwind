import React from "react";
import { rdsFontSizes } from "../../../utils/tailwindClasses";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

interface MarketplaceItemProps {
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
	cost?: string;
	image?: string;
	category?: string;
}

const MarketplaceItemBase = ({ children, link }: any) => {
	return (
		<li>
			<a
				href={link}
				className="group relative flex cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-start gap-3">{children}</div>
				<ChevronRightIcon
					className="ml-auto h-5 w-5 flex-none text-cu-black-300"
					aria-hidden="true"
				/>
			</a>
		</li>
	);
};

const Title = ({ fontSize = "base", title, cost }: MarketplaceItemProps) => {
	return (
		<h3
			className={`text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`}
		>
			<span className="absolute inset-0" aria-hidden="true" />
			{title}
			<span className="font-light italic text-cu-black-700">
				{" "}
				for {cost}
			</span>
		</h3>
	);
};

const Content = ({ children }: any) => {
	return <div className="flex-auto">{children}</div>;
};

const Image = ({ image }: MarketplaceItemProps) => {
	return (
		<div className="w-16 flex-none md:w-20">
			<img className="h-auto w-auto rounded lg:w-24" src={image} alt="" />
		</div>
	);
};

const Category = ({ category }: MarketplaceItemProps) => {
	return (
		<div className="mt-1">
			<Badge>Fair</Badge>
			<Badge>Available</Badge>
		</div>
	);
};

const MarketplaceItem = Object.assign(MarketplaceItemBase, {
	Content,
	Title,
	Image,
	Category,
});

export default MarketplaceItem;
