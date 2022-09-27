import {
	ClockIcon,
	MapPinIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

export default function EventItem(props: any) {
	const { name, link, location, time, month, day, dateFull } = props;

	return (
		<li key={name} className="border-b border-cu-black-100 last:border-b-0">
			<a href={link} className="block hover:bg-gray-50">
				<div className="flex items-center px-4 py-6">
					<div className="flex flex-1 min-w-0 sm:items-center">
						<div className="flex flex-col justify-center w-20 h-20 text-center shadow rounded-2xl bg-gray-50">
							<p className="text-xs font-bold uppercase text-cu-red">
								{month}
							</p>
							<p className="text-2xl font-bold uppercase text-cu-black-900">
								{day}
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
											className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
											aria-hidden="true"
										/>

										<time dateTime={dateFull}>{time}</time>
									</p>
									<p className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0 sm:ml-4">
										<MapPinIcon
											className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
											aria-hidden="true"
										/>
										{location}
									</p>
								</div>
								<div className="mt-2">
									<Badge.XSmall>Multi-Day</Badge.XSmall>
									<Badge.XSmall>Category</Badge.XSmall>
									<Badge.XSmall>Category</Badge.XSmall>
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
