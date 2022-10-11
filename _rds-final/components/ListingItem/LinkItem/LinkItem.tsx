import React from "react";
import { rdsFontSizes } from "../../../utils/tailwindClasses";
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
				className="group relative flex cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-start gap-3">
					<div className="w-auto flex-none">
						<LinkIcon className="mr-2 h-4 w-4 flex-none text-cu-red" />
					</div>
					{children}
				</div>
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
