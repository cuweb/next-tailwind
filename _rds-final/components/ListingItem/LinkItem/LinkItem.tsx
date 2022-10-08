import React from "react";
import { rdsFontSizes } from "../../../helpers/tailwindClasses";
import { LinkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface LinkItemProps {
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
}

const LinkItemBase = ({ children, link }: any) => {
	return (
		<li>
			<a
				href={link}
				className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-start gap-3">
					<div className="flex-none w-auto">
						<LinkIcon className="flex-none w-4 h-4 mr-2 text-cu-red" />
					</div>
					{children}
				</div>
				<ChevronRightIcon
					className="flex-none w-5 h-5 ml-auto text-cu-black-300"
					aria-hidden="true"
				/>
			</a>
		</li>
	);
};

const Content = ({ children }: any) => {
	return <div className="flex flex-col flex-auto gap-1">{children}</div>;
};

const Title = ({ fontSize = "base", title }: LinkItemProps) => {
	return (
		<h3
			className={`text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`}
		>
			<span className="absolute inset-0" aria-hidden="true" />
			{title}
		</h3>
	);
};

const LinkItem = Object.assign(LinkItemBase, {
	Content,
	Title,
});

export default LinkItem;
