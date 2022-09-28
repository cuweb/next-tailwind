import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Badge from "../../Badge/Badge";

export default function JobItem(props: any) {
	const { title, link, type, closeDate, closeDateFull } = props;

	return (
		<li
			key={title}
			className="relative flex items-center p-6 hover:bg-gray-50"
		>
			<div>
				<h3 className="mb-1 text-sm font-semibold text-cu-black-900">
					<a
						href={link}
						className="hover:text-cu-red focus:outline-none"
					>
						{/* Extend touch target to entire panel */}
						<span className="absolute inset-0" aria-hidden="true" />
						{title}
					</a>
				</h3>
				<p className="flex items-center text-xs text-gray-500">
					<CalendarIcon
						className="mr-1.5 h-4 w-4 flex-shrink-0 text-cu-red"
						aria-hidden="true"
					/>
					Closes&nbsp;{""}
					<time className="mr-4" dateTime={closeDate}>
						{closeDateFull}
					</time>
				</p>
			</div>

			<div className="ml-auto">
				<Badge.XSmall>{type}</Badge.XSmall>
			</div>
			<ChevronRightIcon
				className="w-5 h-5 ml-4 text-cu-black-300"
				aria-hidden="true"
			/>
		</li>
	);
}