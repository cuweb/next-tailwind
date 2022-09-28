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
				<div className="flex flex-col items-start gap-3 sm:items-center md:flex-row">
					<div className="flex-none w-16 md:w-20">Img/Icn</div>

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
							<li className="flex items-center mr-2 text-sm text-gray-500">
								<ClockIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
									aria-hidden="true"
								/>

								<time dateTime={date}>{time}</time>
							</li>
							<li className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0">
								<MapPinIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
									aria-hidden="true"
								/>
								{location}
							</li>
						</ul>

						<div className="mt-2">
							<Badge.XSmall>Multi-Day</Badge.XSmall>
							<Badge.XSmall>Student Event</Badge.XSmall>
							<Badge.XSmall>Faculty Luncheon</Badge.XSmall>
						</div>
					</div>
				</div>

				<ChevronRightIcon
					className="flex-none w-5 h-5 ml-auto text-cu-black-300"
					aria-hidden="true"
				/>
			</div>
		</li>
	);
}
