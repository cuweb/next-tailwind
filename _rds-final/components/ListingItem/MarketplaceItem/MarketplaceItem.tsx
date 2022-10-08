import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
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
				className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-start gap-3">{children}</div>
				<ChevronRightIcon
					className="flex-none w-5 h-5 ml-auto text-cu-black-300"
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
			<span className="italic font-light text-cu-black-700">
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
		<div className="flex-none w-16 md:w-20">
			<img className="w-auto h-auto rounded lg:w-24" src={image} alt="" />
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
