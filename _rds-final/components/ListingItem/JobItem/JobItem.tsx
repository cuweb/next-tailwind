import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface JobItemProps {
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
	department?: string;
	dateData?: string;
	date?: string;
}

const JobItemBase = ({ children }: any) => {
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
	return <div className="flex flex-col flex-auto gap-1">{children}</div>;
};

const Title = ({
	fontSize = "base",
	title,
	link,
	department,
}: JobItemProps) => {
	return (
		<>
			<h3
				className={`text-sm font-semibold text-cu-black ${rdsFontSizes[fontSize]}`}
			>
				<a href={link} className="hover:text-cu-red focus:outline-none">
					<span className="absolute inset-0" aria-hidden="true" />
					{title}
					<span className="italic font-light text-cu-black-700">
						{" "}
						with {department}
					</span>
				</a>
			</h3>
		</>
	);
};

const Details = ({ dateData, date }: JobItemProps) => {
	return (
		<p className="flex mt-2 text-xs text-cu-black-900">
			<CalendarIcon
				className="w-4 h-4 mr-1 text-cu-red"
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
