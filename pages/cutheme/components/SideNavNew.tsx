import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import {
	ArchiveBoxIcon,
	Bars4Icon,
	ClockIcon,
	HomeIcon,
	UserCircleIcon as UserCircleIconOutline,
	XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
	{ name: "All Issues", href: "#", icon: HomeIcon, current: true },
	{ name: "My Issues", href: "#", icon: Bars4Icon, current: false },
	{
		name: "Assigned",
		href: "#",
		icon: UserCircleIconOutline,
		current: false,
	},
	{ name: "Closed", href: "#", icon: ArchiveBoxIcon, current: false },
	{ name: "Recent", href: "#", icon: ClockIcon, current: false },
];

const projects = [
	{ id: 1, name: "GraphQL API", href: "#" },
	{ id: 2, name: "iOS App", href: "#" },
	{ id: 3, name: "Marketing Site Redesign", href: "#" },
	{ id: 4, name: "Customer Portal", href: "#" },
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function SideNavNew(props: any) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 lg:hidden"
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-800">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 pt-2 -mr-12">
										<button
											type="button"
											className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() =>
												setSidebarOpen(false)
											}
										>
											<span className="sr-only">
												Close sidebar
											</span>
											<XMarkIcon
												className="w-6 h-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Transition.Child>
								<div className="flex items-center flex-shrink-0 px-4">
									<img
										className="w-auto h-8"
										src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
										alt="Your Company"
									/>
								</div>
								<div className="flex-1 h-0 mt-5 overflow-y-auto">
									<nav className="px-2">
										<div className="space-y-1">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"group flex items-center rounded-md px-2 py-2 text-base font-medium"
													)}
													aria-current={
														item.current
															? "page"
															: undefined
													}
												>
													<item.icon
														className={classNames(
															item.current
																? "text-gray-300"
																: "text-gray-400 group-hover:text-gray-300",
															"mr-4 h-6 w-6 flex-shrink-0"
														)}
														aria-hidden="true"
													/>
													{item.name}
												</a>
											))}
										</div>
										<div className="mt-10">
											<p className="px-2 text-sm font-medium text-gray-400">
												Projects
											</p>
											<div className="mt-2 space-y-1">
												{projects.map((project) => (
													<a
														key={project.id}
														href={project.href}
														className="flex items-center px-2 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
													>
														<span className="truncate">
															{project.name}
														</span>
													</a>
												))}
											</div>
										</div>
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
						<div className="flex-shrink-0 w-14" aria-hidden="true">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className="hidden lg:relative lg:inset-y-0 lg:flex lg:w-64">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex flex-col flex-1 overflow-y-auto bg-gray-800">
					<nav className="sticky top-0 px-2 py-4">
						<div className="space-y-1">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"group flex items-center rounded-md px-2 py-2 text-sm font-medium"
									)}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									<item.icon
										className={classNames(
											item.current
												? "text-gray-300"
												: "text-gray-400 group-hover:text-gray-300",
											"mr-3 h-6 w-6 flex-shrink-0"
										)}
										aria-hidden="true"
									/>
									{item.name}
								</a>
							))}
						</div>
						<div className="mt-10">
							<p className="px-3 text-sm font-medium text-gray-400">
								Projects
							</p>
							<div className="mt-2 space-y-1">
								{projects.map((project) => (
									<a
										key={project.id}
										href={project.href}
										className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md group hover:bg-gray-700 hover:text-white"
									>
										<span className="truncate">
											{project.name}
										</span>
									</a>
								))}
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
}
