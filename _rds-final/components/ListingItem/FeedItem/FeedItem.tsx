import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

interface FeedItemProps {
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
	date?: string;
	excerpt?: string;
	category?: string;
}

const FeedItemBase = ({ children }: any) => {
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

const Content = ({ children }: any) => {
	return <div className="flex-auto">{children}</div>;
};

const Title = ({ fontSize = "base", title, link }: FeedItemProps) => {
	return (
		<>
			<h3
				className={`text-sm font-semibold text-cu-black ${rdsFontSizes[fontSize]}`}
			>
				<a href={link} className="hover:text-cu-red focus:outline-none">
					<span className="absolute inset-0" aria-hidden="true" />
					{title}
				</a>
			</h3>
		</>
	);
};

const Date = ({ date }: FeedItemProps) => {
	return (
		<p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-700">
			{date}
		</p>
	);
};

const Excerpt = ({ excerpt }: FeedItemProps) => {
	return <p className="mt-2 text-sm text-cu-black-900">{excerpt}</p>;
};

const Category = ({ category }: FeedItemProps) => {
	return (
		<div className="mt-2">
			<Badge>{category}</Badge>
		</div>
	);
};

const FeedItem = Object.assign(FeedItemBase, {
	Content,
	Title,
	Date,
	Excerpt,
	Category,
});

export default FeedItem;
