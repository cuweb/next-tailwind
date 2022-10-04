import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

interface NewsItemProps {
	children: any;
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
	cost?: string;
}

const NewsItemBase = ({ children }: any) => {
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

const Title = ({ fontSize = "base", title, link, children }: NewsItemProps) => {
	return (
		<div className="flex-auto">
			<h3
				className={`text-base font-semibold text-cu-black ${rdsFontSizes[fontSize]}`}
			>
				<a href={link} className="hover:text-cu-red focus:outline-none">
					<span className="absolute inset-0" aria-hidden="true" />
					{title}
				</a>
			</h3>
			{children}
		</div>
	);
};

const Image = (props: any) => {
	const { image } = props;
	return (
		<div className="flex-none hidden w-20 md:w-32 lg:block">
			<img className="w-auto h-auto rounded" src={image} alt="" />
		</div>
	);
};

const Date = (props: any) => {
	const { date } = props;
	return (
		<p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-700">
			{date}
		</p>
	);
};

const Excerpt = (props: any) => {
	const { excerpt } = props;
	return <p className="mt-2 text-base text-cu-black-900">{excerpt}</p>;
};

const NewsItem = Object.assign(NewsItemBase, {
	Title,
	Image,
	Date,
	Excerpt,
});

export default NewsItem;
