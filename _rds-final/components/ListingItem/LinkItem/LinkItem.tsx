import { LinkIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function LinkItem(props: any) {
	const { name, link } = props;

	return (
		<li
			key={name}
			className="relative flex items-center p-6 hover:bg-gray-50"
		>
			<div className="flex items-center">
				<LinkIcon className="w-4 h-4 mr-2 text-cu-red" />
				<h3 className="mb-1 text-sm font-semibold text-cu-black-900">
					<a
						href={link}
						className="hover:text-cu-red focus:outline-none"
					>
						{/* Extend touch target to entire panel */}
						<span className="absolute inset-0" aria-hidden="true" />
						{name}
					</a>
				</h3>
			</div>
			<ChevronRightIcon
				className="w-5 h-5 ml-auto text-cu-black-300"
				aria-hidden="true"
			/>
		</li>
	);
}
