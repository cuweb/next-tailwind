import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

export default function MarketplaceItem(props: any) {
	const { name, link, cost, image } = props;
	return (
		<li key={name}>
			<div className="relative flex items-center p-6 hover:bg-gray-50">
				<div className="flex items-center">
					<img className="h-auto rounded w-28" src={image} alt="" />
					<div className="px-4">
						<h3 className="text-base font-semibold text-gray-800">
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
						<div className="flex flex-wrap items-center">
							<p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-400">
								{cost}
							</p>
						</div>
						<div>
							<Badge.XSmall>Fair</Badge.XSmall>
							<Badge.XSmall>Available</Badge.XSmall>
						</div>
					</div>
				</div>
				<ChevronRightIcon
					className="w-5 h-5 ml-auto text-cu-black-300"
					aria-hidden="true"
				/>
			</div>
		</li>
	);
}
