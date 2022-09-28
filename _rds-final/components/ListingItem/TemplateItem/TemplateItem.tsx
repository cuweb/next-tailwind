import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function TemplateItem(props: any) {
	const { name, date, excerpt, link, image } = props;
	return (
		<li key={name}>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-start gap-3">
					<div className="flex-none w-16 bg-blue-200 md:w-20">
						Img/Icn
					</div>

					<div className="flex-auto bg-blue-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Duis vitae enim vitae ligula elementum pellentesque
						vitae eget orci. Vestibulum ultricies turpis metus
					</div>
				</div>

				<ChevronRightIcon
					className="flex-none w-5 h-5 ml-auto bg-blue-200 text-cu-black-300"
					aria-hidden="true"
				/>
			</div>
		</li>
	);
}
