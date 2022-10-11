import React from "react";
import { rdsFontSizes } from "../../../utils/tailwindClasses";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface FileItemProps {
	fontSize?: "base" | "lg" | "xl";
	title?: string;
	link?: string;
	filesize?: string;
	date?: string;
}

const FileItemBase = ({ children, link }: any) => {
	return (
		<li>
			<a
				href={link}
				className="group relative flex cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-start gap-3">
					<div className="w-auto flex-none">
						<svg
							className="flex h-10 w-10 flex-none items-start"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<g>
								<g>
									<g fill="none" fillRule="evenodd">
										<g fillRule="nonzero">
											<path
												d="M4 23V1h10.84L20 6.473V23z"
												fill="#fff"
											></path>
											<g fill="#E91C24">
												<path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z"></path>
												<path
													d="M14 7V1h.195L20 6.805V7z"
													fillOpacity=".215"
												></path>
												<path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6z"></path>
											</g>
										</g>
										<path
											d="M16 15.34c0-1.98-8-.117-8 2.263 0 .192.135.397.353.397 1.675 0 4.779-11 3.26-11s.859 9.023 3.66 9.023c.408 0 .727-.167.727-.683z"
											stroke="#E91C24"
											strokeWidth=".5"
										></path>
									</g>
								</g>
							</g>
						</svg>
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

const Title = ({ fontSize = "base", title }: FileItemProps) => {
	return (
		<h3
			className={`text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`}
		>
			<span className="absolute inset-0" aria-hidden="true" />
			{title}
		</h3>
	);
};

const Details = ({ filesize, date }: FileItemProps) => {
	return (
		<p className="mr-4 text-sm italic text-cu-black-700">
			{filesize} - {date}
		</p>
	);
};

const FileItem = Object.assign(FileItemBase, {
	Content,
	Title,
	Details,
});

export default FileItem;
