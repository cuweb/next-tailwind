/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
	ArrowLongLeftIcon,
	CheckIcon,
	HandThumbUpIcon,
	HomeIcon,
	MagnifyingGlassIcon,
	PaperClipIcon,
	QuestionMarkCircleIcon,
	UserIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Container from "../build-files/layouts/Container/Container";

const user = {
	name: "Whitney Francis",
	email: "whitney@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "#" },
	{ name: "Jobs", href: "#" },
	{ name: "Applicants", href: "#" },
	{ name: "Company", href: "#" },
];
const breadcrumbs = [
	{ name: "Jobs", href: "#", current: false },
	{ name: "Front End Developer", href: "#", current: false },
	{ name: "Applicants", href: "#", current: true },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];
const attachments = [
	{ name: "resume_front_end_developer.pdf", href: "#" },
	{ name: "coverletter_front_end_developer.pdf", href: "#" },
];
const eventTypes = {
	applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
	advanced: { icon: HandThumbUpIcon, bgColorClass: "bg-blue-500" },
	completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};
const timeline = [
	{
		id: 1,
		type: eventTypes.applied,
		content: "Applied to",
		target: "Front End Developer",
		date: "Sep 20",
		datetime: "2020-09-20",
	},
	{
		id: 2,
		type: eventTypes.advanced,
		content: "Advanced to phone screening by",
		target: "Bethany Blake",
		date: "Sep 22",
		datetime: "2020-09-22",
	},
	{
		id: 3,
		type: eventTypes.completed,
		content: "Completed phone screening with",
		target: "Martha Gardner",
		date: "Sep 28",
		datetime: "2020-09-28",
	},
	{
		id: 4,
		type: eventTypes.advanced,
		content: "Advanced to interview by",
		target: "Bethany Blake",
		date: "Sep 30",
		datetime: "2020-09-30",
	},
	{
		id: 5,
		type: eventTypes.completed,
		content: "Completed interview with",
		target: "Katherine Snyder",
		date: "Oct 4",
		datetime: "2020-10-04",
	},
];
const comments = [
	{
		id: 1,
		name: "Leslie Alexander",
		date: "4d ago",
		imageId: "1494790108377-be9c29b29330",
		body: "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
	},
	{
		id: 2,
		name: "Michael Foster",
		date: "4d ago",
		imageId: "1519244703995-f4e0f30006d5",
		body: "Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.",
	},
	{
		id: 3,
		name: "Dries Vincent",
		date: "4d ago",
		imageId: "1506794778202-cad84cf45f1d",
		body: "Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.",
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Sample() {
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<Container.Gray>
				<main className="py-10">
					<div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
						<div className="space-y-6 lg:col-span-2 lg:col-start-1">
							{/* Description list*/}
							<section aria-labelledby="applicant-information-title">
								<div className="bg-white shadow sm:rounded-lg">
									<div className="px-4 py-5 sm:px-6">
										<h2
											id="applicant-information-title"
											className="text-lg font-medium leading-6 text-gray-900"
										>
											Event Details
										</h2>
										<p className="max-w-2xl mt-1 text-sm text-gray-500">
											share and other options
										</p>
									</div>
									<div className="px-4 py-5 border-t border-gray-200 sm:px-6">
										<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
											<div className="sm:col-span-2">
												<dt className="text-sm font-medium text-gray-500">
													About
												</dt>
												<dd className="mt-1 text-sm text-gray-900">
													Fugiat ipsum ipsum deserunt
													culpa aute sint do nostrud
													anim incididunt cillum culpa
													consequat. Excepteur qui
													ipsum aliquip consequat
													sint. Sit id mollit nulla
													mollit nostrud in ea officia
													proident. Irure nostrud
													pariatur mollit ad
													adipisicing reprehenderit
													deserunt qui eu.
												</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Application for
												</dt>
												<dd className="mt-1 text-sm text-gray-900">
													Backend Developer
												</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Email address
												</dt>
												<dd className="mt-1 text-sm text-gray-900">
													ricardocooper@example.com
												</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Salary expectation
												</dt>
												<dd className="mt-1 text-sm text-gray-900">
													$120,000
												</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Phone
												</dt>
												<dd className="mt-1 text-sm text-gray-900">
													+1 555-555-5555
												</dd>
											</div>

											<div className="sm:col-span-2">
												<dt className="text-sm font-medium text-gray-500">
													Attachments
												</dt>
												<dd className="mt-1 text-sm text-gray-900">
													<ul
														role="list"
														className="border border-gray-200 divide-y divide-gray-200 rounded-md"
													>
														{attachments.map(
															(attachment) => (
																<li
																	key={
																		attachment.name
																	}
																	className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
																>
																	<div className="flex items-center flex-1 w-0">
																		<PaperClipIcon
																			className="flex-shrink-0 w-5 h-5 text-gray-400"
																			aria-hidden="true"
																		/>
																		<span className="flex-1 w-0 ml-2 truncate">
																			{
																				attachment.name
																			}
																		</span>
																	</div>
																	<div className="flex-shrink-0 ml-4">
																		<a
																			href={
																				attachment.href
																			}
																			className="font-medium text-blue-600 hover:text-blue-500"
																		>
																			Download
																		</a>
																	</div>
																</li>
															)
														)}
													</ul>
												</dd>
											</div>
										</dl>
									</div>
									<div>
										<div className="p-10">
											<img
												src="https://tailwindui.com/img/component-images/task-app-rose.jpg"
												alt=""
											/>
										</div>
									</div>
									<div>
										<a
											href="#"
											className="block px-4 py-4 text-sm font-medium text-center text-gray-500 bg-gray-50 hover:text-gray-700 sm:rounded-b-lg"
										>
											Read full application
										</a>
									</div>
								</div>
							</section>
						</div>

						<section
							aria-labelledby="timeline-title"
							className="lg:col-span-1 lg:col-start-3"
						>
							<div className="px-4 py-5 bg-white shadow sm:rounded-lg sm:px-6">
								<h2
									id="timeline-title"
									className="text-lg font-medium text-gray-900"
								>
									Event Details
								</h2>
								{/* Activity Feed */}
								<div className="flow-root mt-6">
									{" "}
									details here{" "}
								</div>
							</div>
						</section>
					</div>
				</main>
			</Container.Gray>
		</>
	);
}