import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function NewsItem(props: any) {
	const { title, date, excerpt, link, image } = props;

	return (
		<li key={title}>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-start gap-4">
					<div className="flex-none hidden w-20 md:w-32 lg:block">
						<img
							className="w-auto h-auto rounded"
							src={image}
							alt=""
						/>
					</div>

					<div className="flex-auto">
						<h3 className="text-base font-semibold text-gray-800">
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
						<p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-400">
							{date}
						</p>
						<p className="mt-2 text-base text-gray-500">
							{excerpt}
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
