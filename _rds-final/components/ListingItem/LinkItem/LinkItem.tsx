import { LinkIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function LinkItem(props: any) {
	const { title, link } = props;
	return (
		<li key={title}>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-center gap-3">
					<div className="flex-none w-auto">
						<LinkIcon className="flex-none w-4 h-4 mr-2 text-cu-red" />
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
							</a>
						</h3>
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
