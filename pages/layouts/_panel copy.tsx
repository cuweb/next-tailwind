/* This example requires Tailwind CSS v2.0+ */
const announcements = [
	{
		id: 1,
		title: "Office closed on July 2nd",
		category: "Human Resources",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 2,
		title: "New password policy",
		category: "Healthy Workplace",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
	{
		id: 3,
		title: "Office closed on July 2nd",
		category: "Potato",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function PagePanel() {
	return (
		<section className="space-y-6 bg-white shadow bg-whiteshadow sm:rounded-lg ">
			<div className="overflow-hidden ">
				<div className="px-4 py-6 border-b rounded-t-lg bg-gray-50">
					<h2
						id="applicant-information-title"
						className="font-bold leading-6 text-gray-900 text-medium"
					>
						News Feed
					</h2>
				</div>
				<div>
					<div className="flow-root">
						<ul role="list" className="divide-y divide-gray-200">
							{announcements.map((announcement) => (
								<li key={announcement.id} className="px-6 py-6">
									<div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
										<h3 className="font-semibold text-medium text-cu-black-900">
											<a
												href="#"
												className="hover:underline focus:outline-none"
											>
												{/* Extend touch target to entire panel */}
												<span
													className="absolute inset-0"
													aria-hidden="true"
												/>
												{announcement.title}
											</a>
										</h3>
										<p className="mt-2 text-sm text-gray-500 line-clamp-2">
											{announcement.preview}
										</p>
										<p className="mt-4 mr-1.5 inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
											{announcement.category}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="px-6 my-4">
						<a
							href="#"
							className="flex items-center justify-center w-full px-4 py-4 text-sm font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-900"
						>
							View More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
