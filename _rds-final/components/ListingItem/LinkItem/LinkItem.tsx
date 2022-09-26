import {
	ArrowTopRightOnSquareIcon,
	ChevronRightIcon,
} from "@heroicons/react/20/solid";

export default function LinkItem(props: any) {
	const { name, link } = props;

	return (
		<li key={name}>
			<a
				href={link}
				className="block text-cu-black-700 hover:bg-gray-50 hover:text-cu-red"
			>
				<div className="flex items-center py-6 sm:px-4">
					<div className="flex flex-1 min-w-0 items lg:items-center">
						<div className="min-w-0 px-4">
							<span className="inline-flex mb-1 text-sm font-semibold">
								<ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />{" "}
								{name}
							</span>
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
