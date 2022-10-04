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

const NewsItemBase = ({ children }: any) => {
	return (
		<li>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-start gap-5">{children}</div>
				<ChevronRightIcon
					className="flex-none w-5 h-5 ml-auto text-cu-black-300"
					aria-hidden="true"
				/>
			</div>
		</li>
	);
};

const Title = ({ fontSize = "base", title, link }: NewsItemProps) => {
	return (
		<h3
			className={`text-base font-semibold text-cu-black ${rdsFontSizes[fontSize]}`}
		>
			<a href={link} className="hover:text-cu-red focus:outline-none">
				<span className="absolute inset-0" aria-hidden="true" />
				{title}
			</a>
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
