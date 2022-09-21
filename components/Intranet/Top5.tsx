/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const stuff = [
	{
		name: "Lived Experience Luncheon Series",
		href: "#",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		handle: "10-05-2022",
		location: "405 Robertson Hall",
		dateFull: "January 7, 2020",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Science Student Alumni Mixer 2022",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		handle: "10-05-2022",
		href: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "Milestone Anniversary Celebration 2022",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		href: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
	{
		name: "Virtual Career Fairs",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		handle: "10-05-2022",
		dateFull: "January 7, 2020",
		href: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		imageUrl:
			"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
	},
	{
		name: "80 Years of Carleton University",
		preview:
			"Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. ",
		handle: "10-05-2022",
		href: "#",
		location: "405 Robertson Hall",
		time: "2:00 PM",
		dateFull: "January 7, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
	},
];

export default function Top5() {
	return (
		<>
			<section className="bg-white shadow sm:rounded-lg">
				<h2 className="px-6 py-5 text-base font-bold border-b rounded-t-lg bg-gray-50 text-cu-black-900">
					Top 5
				</h2>

				<ul role="list" className="divide-y divide-gray-200">
					{stuff.map((people) => (
						<li key={people.name}>
							<a
								href={people.href}
								className="block hover:bg-gray-50"
							>
								<div className="flex items-center px-4 py-6 sm:px-6">
									<div className="flex flex-1 min-w-0 items">
										<img
											className="hidden h-20 mr-5 rounded w-30 md:block"
											src={people.imageUrl}
											alt=""
										/>
										<div>
											<h3 className="mb-1 font-semibold text-gray-800 text-medium">
												{people.name}
											</h3>
											<p className="text-gray-500 text-small">
												{people.preview}
											</p>
										</div>
									</div>
									<div>
										<ChevronRightIcon
											className="w-5 h-5 text-cu-black-500"
											aria-hidden="true"
										/>
									</div>
								</div>
							</a>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
