import React from "react";
import { rdsFontSizes } from "../../../utils/tailwindClasses";
import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface JobItemProps {
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
	department?: string;
	dateData?: string;
	date?: string;
}

const JobItemBase = ({ children, link }: any) => {
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

const Content = ({ children }: any) => {
	return <div className="flex flex-auto flex-col gap-1">{children}</div>;
};

const Title = ({ fontSize = "base", title, department }: JobItemProps) => {
	return (
		<h3
			className={`text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`}
		>
			<span className="absolute inset-0" aria-hidden="true" />
			{title}
			<span className="font-light italic text-cu-black-700">
				{" "}
				with {department}
			</span>
		</h3>
	);
};

const Details = ({ dateData, date }: JobItemProps) => {
	return (
		<p className="mt-2 flex text-xs text-cu-black-900">
			<CalendarIcon
				className="mr-1 h-4 w-4 text-cu-red"
				aria-hidden="true"
			/>
			<time className="mr-4" dateTime={dateData}>
				Closes {date}
			</time>
		</p>
	);
};

const JobItem = Object.assign(JobItemBase, {
	Content,
	Title,
	Details,
});

export default JobItem;
