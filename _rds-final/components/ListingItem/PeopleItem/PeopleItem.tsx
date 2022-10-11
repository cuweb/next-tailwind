import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
import { ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

interface PeopleItemProps {
	fontSize?: "base" | "lg" | "xl";
	name?: string;
	link?: string;
	cost?: string;
	image?: string;
	jobTitle?: string;
	email?: string;
}

const PeopleItemBase = ({ children, link }: any) => {
	return (
		<li>
			<a
				href={link}
				className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-center gap-5">{children}</div>
				<ChevronRightIcon
					className="flex-none w-5 h-5 ml-auto text-cu-black-300"
					aria-hidden="true"
				/>
			</a>
		</li>
	);
};

const Title = ({ fontSize = "base", name }: PeopleItemProps) => {
	return (
		<h3
			className={`text-base font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`}
		>
			<span className="absolute inset-0" aria-hidden="true" />
			{name}
		</h3>
	);
};

const Content = ({ children }: any) => {
	return <div className="flex-auto">{children}</div>;
};

const Image = ({ image }: PeopleItemProps) => {
	return (
		<div className="flex-none w-16 md:w-20">
			<img className="w-auto h-auto rounded" src={image} alt="" />
		</div>
	);
};

const JobTitle = ({ jobTitle }: PeopleItemProps) => {
	return (
		<p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-700">
			{jobTitle}
		</p>
	);
};

const Details = ({ email }: PeopleItemProps) => {
	return (
		<ul className="flex flex-wrap mt-1 sm:gap-2">
			<li className="flex items-center mt-2 text-sm text-cu-black-700 sm:mt-0">
				<EnvelopeIcon
					className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
					aria-hidden="true"
				/>
				{email}
			</li>
		</ul>
	);
};

const PeopleItem = Object.assign(PeopleItemBase, {
	Content,
	Title,
	Image,
	JobTitle,
	Details,
});

export default PeopleItem;
