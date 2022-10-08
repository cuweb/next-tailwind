import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface NewsItemProps {
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
	cost?: string;
	image?: string;
	date?: string;
	excerpt?: string;
}

const NewsItemBase = ({ children, link }: any) => {
	return (
		<li>
			<a
				href={link}
				className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-start gap-5">{children}</div>
				<ChevronRightIcon
					className="flex-none w-5 h-5 ml-auto text-cu-black-300"
					aria-hidden="true"
				/>
			</a>
		</li>
	);
};

const Title = ({ fontSize = "base", title }: NewsItemProps) => {
	return (
		<h3
			className={`text-base font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`}
		>
			<span className="absolute inset-0" aria-hidden="true" />
			{title}
		</h3>
	);
};

const Content = ({ children }: any) => {
	return <div className="flex-auto">{children}</div>;
};

const Image = ({ image }: NewsItemProps) => {
	return (
		<div className="flex-none hidden w-20 md:w-32 lg:block">
			<img className="w-auto h-auto rounded" src={image} alt="" />
		</div>
	);
};

const Date = ({ date }: NewsItemProps) => {
	return (
		<p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-700">
			{date}
		</p>
	);
};

const Excerpt = ({ excerpt }: NewsItemProps) => {
	return <p className="mt-2 text-base text-cu-black-900">{excerpt}</p>;
};

const NewsItem = Object.assign(NewsItemBase, {
	Content,
	Title,
	Image,
	Date,
	Excerpt,
});

export default NewsItem;
