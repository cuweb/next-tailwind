import {
	CurrencyDollarIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

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

										<time
											className="mr-4"
											dateTime={dateFull}
										>
											{time}
										</time>

										<Badge.XSmall>Fair</Badge.XSmall>
										<Badge.XSmall>Available</Badge.XSmall>
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
