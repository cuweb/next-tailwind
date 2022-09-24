import {
	CurrencyDollarIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function MarketplaceItem(props: any) {
	const { name, link, imageUrl, dateFull, time } = props;

	return (
		<li key={name}>
			<a href={link} className="block hover:bg-gray-50">
				<div className="flex items-center px-4 py-6">
					<div className="flex items-center flex-1 min-w-0">
						<div className="flex flex-col justify-center text-center shadow rounded-2xl bg-gray-50">
							<img
								className="w-20 h-20 mt-1 rounded"
								src={imageUrl}
								alt=""
							/>
						</div>
						<div className="flex-1 min-w-0 px-6 md:grid md:gap-4">
							<div>
								<p className="mb-2 font-semibold text-gray-800 text-medium">
									{name}
								</p>
								<div className="sm:flex">
									<p className="flex items-center text-sm text-gray-500">
										<CurrencyDollarIcon
											className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-600"
											aria-hidden="true"
										/>

										<time dateTime={dateFull}>{time}</time>

										<span className="px-2 ml-4 text-xs font-semibold leading-5 text-white bg-blue-500 rounded-full">
											Fair
										</span>
										<span className="px-2 ml-4 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
											Availible
										</span>
									</p>
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
