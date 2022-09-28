import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function TemplateItem(props: any) {
	const { name, link } = props;
	return (
		<li key={name}>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-start gap-3">
					<div className="flex-none w-16 md:w-20">Img/Icn</div>

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
								{name}
							</a>
						</h3>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis vitae enim vitae ligula elementum pellentesque
						vitae eget orci. Vestibulum ultricies turpis metus
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
