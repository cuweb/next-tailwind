import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
import {
	ClockIcon,
	MapPinIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

interface EventItemProps {
	title?: string;
	link?: string;
	location?: string;
	time?: string;
	month?: string;
	day?: string;
	date?: string;
	category?: string;
}

const EventItemBase = ({ children, link }: any) => {
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

const Content = ({ children }: any) => {
	return <div className="flex-auto">{children}</div>;
};

const Title = ({ title }: EventItemProps) => {
	return (
		<h3 className="mb-2 text-base font-semibold text-cu-black group-hover:text-cu-red">
			<span className="absolute inset-0" aria-hidden="true" />
			{title}
		</h3>
	);
};

const DateBox = ({ month, day }: EventItemProps) => {
	return (
		<div className="flex-none w-16 md:w-20">
			<div className="flex flex-col justify-center flex-none w-auto h-16 text-center rounded-lg shadow bg-gray-50 md:h-20">
				<p className="text-xs font-bold uppercase text-cu-red">
					{month}
				</p>
				<p className="text-2xl font-bold uppercase text-cu-black">
					{day}
				</p>
			</div>
		</div>
	);
};

const Details = ({ date, time, location }: EventItemProps) => {
	return (
		<ul className="flex flex-wrap sm:gap-2">
			<li className="flex items-center mr-2 text-sm text-cu-black-700">
				<ClockIcon
					className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
					aria-hidden="true"
				/>

				<time dateTime={date}>{time}</time>
			</li>
			<li className="flex items-center mt-2 text-sm text-cu-black-700 sm:mt-0">
				<MapPinIcon
					className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
					aria-hidden="true"
				/>
				{location}
			</li>
		</ul>
	);
};

const Category = ({ category }: EventItemProps) => {
	return (
		<div className="mt-2">
			<Badge>Multi-Day</Badge>
			<Badge>Student Event</Badge>
			<Badge>Faculty Luncheon</Badge>
		</div>
	);
};

const EventItem = Object.assign(EventItemBase, {
	Content,
	Title,
	DateBox,
	Details,
	Category,
});

export default EventItem;
