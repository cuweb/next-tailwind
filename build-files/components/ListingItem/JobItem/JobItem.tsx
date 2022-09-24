import { CalendarIcon } from "@heroicons/react/20/solid";

export default function JobItem(props: any) {
	const { name, title, type, closeDate, closeDateFull } = props;

	return (
		<li key={name}>
			<a href="#" className="block hover:bg-gray-50">
				<div className="px-6 py-6">
					<div className="flex items-center justify-between">
						<p className="text-sm font-semibold truncate text-cu-black-900">
							{title}
						</p>
						<div className="flex flex-shrink-0 ml-2">
							<p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
								{type}
							</p>
						</div>
					</div>
					<div className="mt-2 sm:flex sm:justify-between">
						<div className="sm:flex">
							<p className="flex items-center text-xs text-gray-500">
								<CalendarIcon
									className="mr-1.5 h-4 w-4 flex-shrink-0 text-cu-red"
									aria-hidden="true"
								/>
								Closes&nbsp;{""}
								<time dateTime={closeDate}>
									{closeDateFull}
								</time>
							</p>
						</div>
					</div>
				</div>
			</a>
		</li>
	);
}
