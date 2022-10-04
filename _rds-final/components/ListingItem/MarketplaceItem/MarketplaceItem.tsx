import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

interface MarketplaceItemProps {
	children: any;
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
	cost?: string;
}

const MarketplaceItemBase = ({ children }: any) => {
	return (
		<li>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-start gap-3">{children}</div>
				<ChevronRightIcon
					className="flex-none w-5 h-5 ml-auto text-cu-black-300"
					aria-hidden="true"
				/>
			</div>
		</li>
	);
};

const Title = ({
	children,
	fontSize = "base",
	title,
	link,
	cost,
}: MarketplaceItemProps) => {
	return (
		<div className="flex-auto">
			<h3
				className={`text-sm font-semibold text-cu-black ${rdsFontSizes[fontSize]}`}
			>
				<a href={link} className="hover:text-cu-red focus:outline-none">
					<span className="absolute inset-0" aria-hidden="true" />
					{title}
					<span className="italic font-light text-cu-black-700">
						{" "}
						for {cost}
					</span>
				</a>
			</h3>
			{children}
		</div>
	);
};

const Image = (props: any) => {
	const { image } = props;
	return (
		<div className="flex-none w-16 md:w-20">
			<img className="w-auto h-auto rounded lg:w-24" src={image} alt="" />
		</div>
	);
};

const Category = () => {
	return (
		<div className="mt-1">
			<Badge>Fair</Badge>
			<Badge>Available</Badge>
		</div>
	);
};

const MarketplaceItem = Object.assign(MarketplaceItemBase, {
	Title,
	Image,
	Category,
});

export default MarketplaceItem;
