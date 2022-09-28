import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function NewsItem(props: any) {
	const { name, date, excerpt, link, image } = props;
	return (
		<li key={name}>
			<div className="relative flex items-center p-6 hover:bg-gray-50">
				<div className="flex">
					<img
						className="hidden w-32 rounded h-min lg:block"
						src={image}
						alt=""
					/>
					<div className="lg:px-4">
						<h3 className="mt-1 mb-1 text-lg font-semibold text-gray-800">
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
						<p className="mt-1 mb-1 text-sm italic text-cu-black-400">
							{date}
						</p>
						<p className="mt-2 text-base text-gray-500">
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
		</li>
	);
}
