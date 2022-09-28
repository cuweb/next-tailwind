import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

export default function FeedItem(props: any) {
	const { title, link, date, excerpt, category } = props;

	return (
		<>
			<li key={title}>
				<div className="relative flex items-center p-4 hover:bg-gray-50 md:p-6">
					<div className="pr-4">
						<h3 className="text-base font-semibold text-cu-blue lg:text-lg">
							<a
								href={link}
								className="hover:text-cu-red focus:outline-none"
							>
								{/* Extend touch target to entire panel */}
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								{title}
							</a>
						</h3>
						<p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-400">
							{date}
						</p>
						<p className="mt-2 text-sm text-gray-500">{excerpt}</p>
						<div className="mt-2">
							<Badge.XSmall>{category}</Badge.XSmall>
						</div>
					</div>
					<ChevronRightIcon
						className="flex-none w-5 h-5 ml-auto text-cu-black-300"
						aria-hidden="true"
					/>
				</div>
			</li>
		</>
	);
}
