import {
	ClockIcon,
	MapPinIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

export default function EventItem(props: any) {
	const { name, link, location, time, month, day, dateFull } = props;

	return (
		<li
			key={name}
			className="relative flex items-center p-6 hover:bg-gray-50"
		>
			<div className="flex items-center">
				<div className="flex flex-col justify-center flex-none w-20 h-20 text-center shadow rounded-2xl bg-gray-50">
					<p className="text-xs font-bold uppercase text-cu-red">
						{month}
					</p>
					<p className="text-2xl font-bold uppercase text-cu-black-900">
						{day}
					</p>
				</div>
				<div className="px-5">
					<h3 className="mb-1 text-base font-semibold text-gray-800">
						<a
							href={link}
							className="hover:text-cu-red focus:outline-none"
						>
							{/* Extend touch target to entire panel */}
							<span
								className="absolute inset-0"
								aria-hidden="true"
							/>
							{name}
						</a>
					</h3>

					<ul className="sm:flex">
						<li className="flex items-center text-sm text-gray-500">
							<ClockIcon
								className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
								aria-hidden="true"
							/>

							<time dateTime={dateFull}>{time}</time>
						</li>
						<li className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0 sm:ml-4">
							<MapPinIcon
								className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
								aria-hidden="true"
							/>
							{location}
						</li>
					</ul>

					<div className="mt-2">
						<Badge.XSmall>Multi-Day</Badge.XSmall>
						<Badge.XSmall>Category</Badge.XSmall>
						<Badge.XSmall>Category</Badge.XSmall>
					</div>
				</div>
			</div>
			<ChevronRightIcon
				className="w-5 h-5 ml-auto text-cu-black-300"
				aria-hidden="true"
			/>
		</li>
	);
}
