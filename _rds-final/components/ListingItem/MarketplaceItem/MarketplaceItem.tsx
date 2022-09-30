import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

export default function MarketplaceItem(props: any) {
	const { title, link, cost, image } = props;

	return (
		<li key={title}>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-start gap-3 sm:items-center">
					<div className="w-16 flex-none md:w-20">
						<img
							className="h-auto w-auto rounded lg:w-24"
							src={image}
							alt=""
						/>
					</div>

					<div className="flex-auto">
						<h3 className="text-sm font-semibold text-gray-800">
							<a
								href={link}
								className="hover:text-cu-red focus:outline-none"
							>
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								{title}
								<span className="font-light italic text-cu-black-400">
									{" "}
									for {cost}
								</span>
							</a>
						</h3>
						<div className="mt-1">
							<Badge>Fair</Badge>
							<Badge>Available</Badge>
						</div>
					</div>
				</div>

				<ChevronRightIcon
					className="ml-auto h-5 w-5 flex-none text-cu-black-300"
					aria-hidden="true"
				/>
			</div>
		</li>
	);
}
