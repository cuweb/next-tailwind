import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function NewsItem(props: any) {
	const { name, date, excerpt, href, image } = props;
	return (
		<li key={name}>
			<a href={href} className="block hover:bg-gray-50">
				<div className="flex items-center p-6 sm:px-6">
					<div className="flex flex-1 min-w-0 items">
						<img
							className="h-20 mt-1 rounded w-30"
							src={image}
							alt=""
						/>
						<div className="min-w-0 px-4">
							<h3 className="mb-1 font-semibold text-gray-800 text-medium">
								{name}
							</h3>
							<p className="text-gray-500 text-small">
								{excerpt}
							</p>
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
