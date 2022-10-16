import {
	ClockIcon,
	MapPinIcon,
	CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export default function EventCard(props: any) {
	const { name, link, month, day, multi, time, location } = props;

	const multiDayDisplay = () => {
		if (multi) {
			return (
				<CalendarDaysIcon
					className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
					aria-hidden="true"
				/>
			);
		} else {
			return (
				<ClockIcon
					className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
					aria-hidden="true"
				/>
			);
		}
	};

	return (
		<div className="relative flex flex-col overflow-hidden rounded-lg shadow-lg">
			<a href={link} className="cursor-pointer group">
				<div className="absolute px-6 top-48">
					<div className="flex-none w-16 md:w-20">
						<div className="flex flex-col justify-center flex-none w-auto h-16 text-center transform -translate-y-1/2 rounded-lg shadow bg-gray-50 group-hover:bg-cu-red md:h-20">
							<p className="text-xs font-bold uppercase text-cu-red group-hover:text-white">
								{month}
							</p>
							<p className="text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white">
								{day}
							</p>
						</div>
					</div>
				</div>

				<div>
					<img
						className="object-cover w-full h-48"
						src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
						alt=""
					/>
				</div>

				<div className="bg-white p-7">
					<div className="mt-8">
						<h3 className="text-xl font-semibold text-cu-black">
							{name}
						</h3>
						<ul className="flex flex-col gap-3 mt-4">
							<li className="flex items-center text-sm text-cu-black-600">
								{multiDayDisplay()}
								{multi ? multi : time}
							</li>

							<li className="flex items-center text-sm text-cu-black-600">
								<MapPinIcon
									className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
									aria-hidden="true"
								/>
								{location}
							</li>
						</ul>
					</div>
				</div>
			</a>
		</div>
	);
}
