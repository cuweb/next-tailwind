import {
	ClockIcon,
	MapPinIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function EventItem(props: any) {
	const { name, location, dateFull, time } = props;

	return (
		<li key={name} className="border-b border-cu-black-100 last:border-b-0">
			<a href={location} className="block hover:bg-gray-50">
				<div className="flex items-center px-4 py-6">
					<div className="flex flex-1 min-w-0 sm:items-center">
						<div className="flex flex-col justify-center w-20 h-20 text-center shadow rounded-2xl bg-gray-50">
							<p className="text-xs font-bold uppercase text-cu-red">
								May
							</p>
							<p className="text-2xl font-bold uppercase text-cu-black-900">
								31
							</p>
						</div>

						<div className="flex-1 min-w-0 px-6 md:grid md:gap-4">
							<div>
								<p className="mb-2 font-semibold text-gray-800 text-medium">
									{name}
								</p>
								<div className="sm:flex">
									<p className="flex items-center text-sm text-gray-500">
										<ClockIcon
											className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-light"
											aria-hidden="true"
										/>

										<time dateTime={dateFull}>{time}</time>
									</p>
									<p className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0 sm:ml-4">
										<MapPinIcon
											className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-light"
											aria-hidden="true"
										/>
										{location}
									</p>
								</div>
								<div className="mt-2">
									<span className="px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
										Multi-Day
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<ChevronRightIcon
							className="w-5 h-5 text-cu-black-300"
							aria-hidden="true"
						/>
					</div>
				</div>
			</a>
		</li>
	);
}
