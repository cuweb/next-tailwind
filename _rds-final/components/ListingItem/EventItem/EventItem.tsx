import {
	ClockIcon,
	MapPinIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

export default function EventItem(props: any) {
	const { title, link, location, time, month, day, date } = props;

	return (
		<li key={title}>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex flex-col items-start gap-3 md:flex-row">
					<div className="w-16 flex-none md:w-20">
						<div className="flex h-16 w-auto flex-none flex-col justify-center rounded-2xl bg-gray-50 text-center shadow md:h-20">
							<p className="text-xs font-bold uppercase text-cu-red">
								{month}
							</p>
							<p className="text-2xl font-bold uppercase text-cu-black-900">
								{day}
							</p>
						</div>
					</div>

					<div className="flex-auto">
						<h3 className="mb-2 text-base font-semibold text-gray-800">
							<a
								href={link}
								className="hover:text-cu-red focus:outline-none"
							>
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								{title}
							</a>
						</h3>
						<ul className="flex flex-wrap sm:gap-2">
							<li className="mr-2 flex items-center text-sm text-gray-500">
								<ClockIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
									aria-hidden="true"
								/>

								<time dateTime={date}>{time}</time>
							</li>
							<li className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
								<MapPinIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
									aria-hidden="true"
								/>
								{location}
							</li>
						</ul>

						<div className="mt-2">
							<Badge>Multi-Day</Badge>
							<Badge>Student Event</Badge>
							<Badge>Faculty Luncheon</Badge>
						</div>
					</div>
				</div>

				<ChevronRightIcon
					className="ml-auto h-5 w-5 flex-none text-cu-black-300"
					aria-hidden="true"
				/>
			</div>
		</li>
	);
}
