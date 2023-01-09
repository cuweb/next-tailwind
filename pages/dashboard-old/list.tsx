import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Switch, Transition } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon,
	Bars3BottomLeftIcon,
	BellIcon,
	ExclamationCircleIcon,
	BriefcaseIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	CogIcon,
	DocumentMagnifyingGlassIcon,
	HomeIcon,
	QuestionMarkCircleIcon,
	ChevronDownIcon,
	PencilSquareIcon,
	TrashIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	UsersIcon,
	LinkIcon,
	UserCircleIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const navigation = [
	{
		name: "Profile",
		href: "/dashboard",
		icon: UserCircleIcon,
		current: false,
	},
	{
		name: "Resource 1",
		href: "/dashboard/resource",
		icon: BriefcaseIcon,
		current: false,
	},
	{
		name: "Resource 2",
		href: "/dashboard/resource",
		icon: LinkIcon,
		current: false,
	},
];

const items = [
	{
		id: "1",
		title: "Carleton Bookmarks",
		description: "https://carleton.ca/bookmarks",
		checked: true,
	},
	{
		id: "2",
		title: "Another Bookmark",
		description: "https://carleton.ca/bkmrk",
		checked: false,
	},
	{
		id: "3",
		title: "Resource Listings",
		description: "https://carleton.ca/resources",
		checked: true,
	},
	{
		id: "4",
		title: "MC1 Login",
		description: "https://carleton.ca/myone",
		checked: true,
	},
	{
		id: "5",
		title: "CU Bookmarks",
		description: "https://carleton.ca/cubook",
		checked: false,
	},
	// More people...
];

const adminNavigation = [
	{
		name: "Manage Resource 1",
		href: "/dashboard/list",
		icon: BriefcaseIcon,
		current: true,
	},
	{
		name: "Manage Resource 2",
		href: "/dashboard/list",
		icon: LinkIcon,
		current: false,
	},
];

const secondaryNavigation = [
	{
		name: "Back To Site",
		href: "/dashboard",
		icon: ArrowLeftOnRectangleIcon,
	},
];
const tabs = [
	{ name: "General", href: "#", current: true },
	{ name: "Password", href: "#", current: false },
	{ name: "Notifications", href: "#", current: false },
	{ name: "Plan", href: "#", current: false },
	{ name: "Billing", href: "#", current: false },
	{ name: "Team Members", href: "#", current: false },
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
		useState(true);
	const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
		useState(false);

	const [availableToHire, setAvailableToHire] = useState(true);
	const [privateAccount, setPrivateAccount] = useState(false);
	const [allowCommenting, setAllowCommenting] = useState(true);
	const [allowMentions, setAllowMentions] = useState(true);

	return (
		<>
			<div>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-40 md:hidden"
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
								<Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 right-0 p-1 -mr-14">
											<button
												type="button"
												className="flex items-center justify-center w-12 h-12 rounded-full focus:bg-gray-600 focus:outline-none"
												onClick={() =>
													setSidebarOpen(false)
												}
											>
												<XMarkIcon
													className="w-6 h-6 text-white"
													aria-hidden="true"
												/>
												<span className="sr-only">
													Close sidebar
												</span>
											</button>
										</div>
									</Transition.Child>
									<div className="flex items-center flex-shrink-0">
										<div className="flex">
											<Link
												href="/dashboard"
												className="flex items-center flex-shrink-0 px-4"
											>
												<Image
													className="w-auto h-10"
													src="/cu-shield.svg"
													alt="Carleton"
												/>
												<h1 className="items-center pl-3 pr-2 text-xl font-semibold ">
													Dashboard
												</h1>
											</Link>
										</div>
									</div>
									<div className="flex-1 h-0 mt-5 overflow-y-auto">
										<nav className="flex flex-col h-full">
											<div className="space-y-1">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? "border-cu-red-600 bg-cu-red-50 text-cu-red-600"
																: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
															"group flex items-center border-l-4 py-2 px-3 text-base font-medium"
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
																	? "text-cu-red-500"
																	: "text-gray-400 group-hover:text-gray-500",
																"mr-4 h-6 w-6 flex-shrink-0"
															)}
															aria-hidden="true"
														/>
														{item.name}
													</a>
												))}
											</div>

											<div className="pt-10 mt-auto space-y-1">
												{secondaryNavigation.map(
													(item) => (
														<a
															key={item.name}
															href={item.href}
															className="flex items-center px-3 py-2 text-base font-medium text-gray-600 border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900"
														>
															<item.icon
																className="w-6 h-6 mr-4 text-gray-400 group-hover:text-gray-500"
																aria-hidden="true"
															/>
															{item.name}
														</a>
													)
												)}
											</div>
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
							<div
								className="flex-shrink-0 w-14"
								aria-hidden="true"
							>
								{/* Dummy element to force sidebar to shrink to fit close icon */}
							</div>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<nav className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r border-gray-200 bg-gray-50">
						<div className="flex">
							<Link
								href="/dashboard"
								className="flex items-center flex-shrink-0 px-4"
							>
								<Image
									className="w-auto h-10"
									src="/cu-shield.svg"
									alt="Carleton"
								/>
								<h1 className="items-center pl-3 pr-2 text-xl font-semibold ">
									Dashboard
								</h1>
							</Link>
						</div>

						<div className="flex-grow mt-5">
							<div className="space-y-1">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? "border-cu-red-600 bg-cu-red-50 text-cu-red-600"
												: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
											"group flex items-center border-l-4 py-2 px-3 text-sm font-medium"
										)}
									>
										<item.icon
											className={classNames(
												item.current
													? "text-cu-red-500"
													: "text-gray-400 group-hover:text-gray-500",
												"mr-3 h-6 w-6 flex-shrink-0"
											)}
											aria-hidden="true"
										/>
										{item.name}
									</a>
								))}
							</div>

							<div className="px-6 py-4 my-4 bg-gray-100 border-y">
								<h2 className="text-sm font-medium leading-6 text-cu-black:900">
									Admin Options
								</h2>
							</div>

							<div className="flex-grow mt-5">
								<div className="space-y-1">
									{adminNavigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
												item.current
													? "border-cu-red-600 bg-cu-red-50 text-cu-red-600"
													: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
												"group flex items-center border-l-4 py-2 px-3 text-sm font-medium"
											)}
										>
											<item.icon
												className={classNames(
													item.current
														? "text-cu-red-500"
														: "text-gray-400 group-hover:text-gray-500",
													"mr-3 h-6 w-6 flex-shrink-0"
												)}
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>

						<div className="flex-shrink-0 block w-full">
							{secondaryNavigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900"
								>
									<item.icon
										className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
									{item.name}
								</a>
							))}
						</div>
					</nav>
				</div>

				{/* Content area */}
				<div className="md:pl-64">
					<div className="flex flex-col max-w-4xl mx-auto md:px-8 xl:px-0">
						<div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
							<button
								type="button"
								className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cu-red-500 md:hidden"
								onClick={() => setSidebarOpen(true)}
							>
								<span className="sr-only">Open sidebar</span>
								<Bars3BottomLeftIcon
									className="w-6 h-6"
									aria-hidden="true"
								/>
							</button>
							<div className="flex justify-between flex-1 px-4 md:px-0">
								<div className="flex flex-1">
									<form
										className="flex w-full md:ml-0"
										action="#"
										method="GET"
									>
										<label
											htmlFor="mobile-search-field"
											className="sr-only"
										>
											Search
										</label>
										<label
											htmlFor="desktop-search-field"
											className="sr-only"
										>
											Search
										</label>
										<div className="relative w-full text-gray-400 focus-within:text-gray-600">
											<div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
												<MagnifyingGlassIcon
													className="flex-shrink-0 w-5 h-5"
													aria-hidden="true"
												/>
											</div>
											<input
												name="mobile-search-field"
												id="mobile-search-field"
												className="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:hidden"
												placeholder="Search"
												type="search"
											/>
											<input
												name="desktop-search-field"
												id="desktop-search-field"
												className="hidden w-full h-full py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block"
												placeholder="Search"
												type="search"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>

						<main className="flex-1">
							<div className="relative max-w-4xl mx-auto md:px-0">
								<div className="px-4 py-8 space-y-6 bg-white md:px-0">
									<div className="sm:flex sm:items-center">
										<div className="sm:flex-auto">
											<h1 className="text-2xl font-bold text-gray-900">
												Resources
											</h1>
										</div>
										<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
											<a
												href="/dashboard/new-edit"
												type="button"
												className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cu-red-600 hover:bg-cu-red-700 focus:outline-none focus:ring-2 focus:ring-cu-red-500 focus:ring-offset-2 sm:w-auto"
											>
												Add Resource
											</a>
										</div>
									</div>
									<div className="flex flex-col mt-8">
										<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
											<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
												<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
													<table className="min-w-full divide-y divide-gray-300">
														<thead className="bg-gray-50">
															<tr>
																<th
																	scope="col"
																	className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
																>
																	<a
																		href="#"
																		className="inline-flex group"
																	>
																		ID
																		<span className="flex-none invisible ml-2 text-gray-400 rounded group-hover:visible group-focus:visible">
																			<ChevronDownIcon
																				className="w-5 h-5"
																				aria-hidden="true"
																			/>
																		</span>
																	</a>
																</th>
																<th
																	scope="col"
																	className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
																>
																	<a
																		href="#"
																		className="inline-flex group"
																	>
																		Title
																		<span className="flex-none ml-2 text-gray-900 bg-gray-200 rounded group-hover:bg-gray-300">
																			<ChevronDownIcon
																				className="w-5 h-5"
																				aria-hidden="true"
																			/>
																		</span>
																	</a>
																</th>
																<th
																	scope="col"
																	className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
																>
																	<a
																		href="#"
																		className="inline-flex group"
																	>
																		Link
																		<span className="flex-none invisible ml-2 text-gray-400 rounded group-hover:visible group-focus:visible">
																			<ChevronDownIcon
																				className="flex-none invisible w-5 h-5 ml-2 text-gray-400 rounded group-hover:visible group-focus:visible"
																				aria-hidden="true"
																			/>
																		</span>
																	</a>
																</th>
																<th
																	scope="col"
																	className="relative py-3.5 pl-3 pr-4 sm:pr-6"
																>
																	<span className="sr-only">
																		Edit
																	</span>
																</th>
																<th
																	scope="col"
																	className="relative py-3.5 pl-3 pr-4 sm:pr-6"
																>
																	<span className="sr-only">
																		Delete
																	</span>
																</th>
															</tr>
														</thead>
														<tbody className="bg-white divide-y divide-gray-200">
															{items.map(
																(item) => (
																	<tr
																		className="hover:bg-gray-50"
																		key={
																			item.id
																		}
																	>
																		<td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-500 whitespace-nowrap sm:pl-6">
																			{
																				item.id
																			}
																		</td>
																		<td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
																			{
																				item.title
																			}
																		</td>
																		<td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
																			{
																				item.description
																			}
																		</td>

																		<td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
																			<a
																				href="/dashboard/new-edit"
																				className="flex items-center text-sm text-cu-red-600 hover:text-cu-red-900"
																			>
																				<PencilSquareIcon
																					className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500"
																					aria-hidden="true"
																				/>
																				Edit
																			</a>
																		</td>
																		<td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
																			<a
																				href="#"
																				className="flex items-center text-sm text-cu-red-600 hover:text-cu-red-900"
																			>
																				<TrashIcon
																					className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-500"
																					aria-hidden="true"
																				/>
																				Delete
																			</a>
																		</td>
																	</tr>
																)
															)}
														</tbody>
													</table>
												</div>
											</div>
										</div>

										<div className="flex items-center justify-between py-3 mt-4 bg-white border-gray-200 ">
											<div className="flex justify-between flex-1 sm:hidden">
												<a
													href="#"
													className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
												>
													Previous
												</a>
												<a
													href="#"
													className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
												>
													Next
												</a>
											</div>
											<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
												<div>
													<p className="text-sm text-gray-700">
														Showing{" "}
														<span className="font-medium">
															1
														</span>{" "}
														to{" "}
														<span className="font-medium">
															10
														</span>{" "}
														of{" "}
														<span className="font-medium">
															97
														</span>{" "}
														results
													</p>
												</div>
												<div>
													<nav
														className="inline-flex -space-x-px rounded-md shadow-sm isolate"
														aria-label="Pagination"
													>
														<a
															href="#"
															className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-20"
														>
															<span className="sr-only">
																Previous
															</span>
															<ChevronLeftIcon
																className="w-5 h-5"
																aria-hidden="true"
															/>
														</a>
														{/* Current: "z-10 bg-cu-red-50 border-cu-red-500 text-cu-red-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
														<a
															href="#"
															aria-current="page"
															className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium border border-cu-red-500 bg-cu-red-50 text-cu-red-600 focus:z-20"
														>
															1
														</a>
														<a
															href="#"
															className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20"
														>
															2
														</a>
														<a
															href="#"
															className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20 md:inline-flex"
														>
															3
														</a>
														<span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
															...
														</span>
														<a
															href="#"
															className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20 md:inline-flex"
														>
															8
														</a>
														<a
															href="#"
															className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20"
														>
															9
														</a>
														<a
															href="#"
															className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20"
														>
															10
														</a>
														<a
															href="#"
															className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-20"
														>
															<span className="sr-only">
																Next
															</span>
															<ChevronRightIcon
																className="w-5 h-5"
																aria-hidden="true"
															/>
														</a>
													</nav>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
}
