import React from "react";
import { rdsFontSizes } from "../../../utils/tailwindClasses";
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
				className="group relative flex cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-center gap-5">{children}</div>
				<ChevronRightIcon
					className="ml-auto h-5 w-5 flex-none text-cu-black-300"
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
		<div className="w-16 flex-none md:w-20">
			<img className="h-auto w-auto rounded" src={image} alt="" />
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
		<ul className="mt-1 flex flex-wrap sm:gap-2">
			<li className="mt-2 flex items-center text-sm text-cu-black-700 sm:mt-0">
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
