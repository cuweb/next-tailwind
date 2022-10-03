import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Badge from "../../Badge/Badge";

export default function TemplateItem(props: any) {
	const { title, link, date, excerpt, category } = props;

	return (
		<li key={title}>
			<div className="relative flex items-center gap-2 p-6 hover:bg-gray-50">
				<div className="flex items-start gap-3">
					<div className="flex-auto">
						<h3 className="text-sm font-semibold text-cu-black sm:text-base">
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
						<p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-700">
							{date}
						</p>
						<p className="mt-2 text-sm text-cu-black-900">
							{excerpt}
						</p>
						<div className="mt-2">
							<Badge>{category}</Badge>
						</div>
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
