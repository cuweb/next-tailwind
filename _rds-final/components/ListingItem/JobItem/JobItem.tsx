import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Badge from "../../Badge/Badge";

export default function JobItem(props: any) {
	const { title, link, department, dateData, date } = props;

	return (
		<li key={title}>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-start gap-3">
					<div className="flex-auto">
						<h3 className="text-sm font-semibold text-cu-black-800">
							<a
								href={link}
								className="hover:text-cu-red focus:outline-none"
							>
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								{title}
								<span className="italic font-light text-cu-black-400">
									{" "}
									with {department}
								</span>
							</a>
						</h3>
						<p className="flex mt-2 text-xs text-cu-black-600">
							<CalendarIcon
								className="w-4 h-4 mr-1 text-cu-red"
								aria-hidden="true"
							/>
							<time className="mr-4" dateTime={dateData}>
								Closes {date}
							</time>
						</p>
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
