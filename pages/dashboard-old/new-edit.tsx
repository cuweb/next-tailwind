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
		current: true,
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
		current: false,
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
						<div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 md:hidden md:border-b-0">
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
							{/* <div className="flex justify-between flex-1 px-4 md:px-0">
                <div className="flex flex-1">
                  <form className="flex w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="mobile-search-field" className="sr-only">
                      Search
                    </label>
                    <label htmlFor="desktop-search-field" className="sr-only">
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
              </div> */}
						</div>

						<main className="flex-1">
							<div className="relative max-w-4xl px-4 mx-auto">
								<div>
									<form action="#" method="POST">
										<div className="sm:overflow-hidden ">
											<div className="px-4 py-8 space-y-6 bg-white md:px-0">
												<div>
													<h3 className="pb-4 mb-8 text-2xl font-bold text-gray-900 border-b">
														Add / Edit Resource
													</h3>
												</div>

												<div className="col-span-2 sm:col-span-2">
													<label
														htmlFor="email"
														className="block text-sm font-medium text-gray-700"
													>
														Title{" "}
														<span className="text-cu-red">
															*
														</span>
													</label>
													<div className="relative mt-1 rounded-md shadow-sm">
														<input
															type="text"
															name="title"
															id="title"
															className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-cu-red focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
															placeholder="Example Title"
															defaultValue="Example Title"
															aria-invalid="true"
															aria-describedby="title-error"
														/>
														<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
															<ExclamationCircleIcon
																className="w-5 h-5 text-red-500"
																aria-hidden="true"
															/>
														</div>
													</div>
													<p
														className="mt-2 text-sm text-red-600"
														id="title-error"
													>
														This field is required
													</p>
												</div>

												<div className="col-span-3">
													<label className="block text-sm font-medium text-gray-700">
														Featured Image
													</label>
													<div className="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md">
														<div className="space-y-1 text-center">
															<svg
																className="w-12 h-12 mx-auto text-gray-400"
																stroke="currentColor"
																fill="none"
																viewBox="0 0 48 48"
																aria-hidden="true"
															>
																<path
																	d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
																	strokeWidth={
																		2
																	}
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>
															<div className="flex text-sm text-gray-600">
																<label
																	htmlFor="file-upload"
																	className="relative font-medium bg-white rounded-md cursor-pointer text-cu-red focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
																>
																	<span>
																		Upload a
																		file
																	</span>
																	<input
																		id="file-upload"
																		name="file-upload"
																		type="file"
																		className="sr-only"
																	/>
																</label>
																<p className="pl-1">
																	or drag and
																	drop
																</p>
															</div>
															<p className="text-xs text-gray-500">
																PNG, JPG, GIF up
																to 10MB
															</p>
														</div>
													</div>

													<div className="mt-6">
														<fieldset>
															<legend className="sr-only">
																By Email
															</legend>
															<div
																className="pb-4 mt-4 mb-4 text-lg font-bold text-gray-900 border-b"
																aria-hidden="true"
															>
																Categories
															</div>
															<div className="px-1 mt-4 space-y-4">
																<div className="relative flex items-start">
																	<div className="flex items-center h-5">
																		<input
																			id="comments"
																			name="comments"
																			type="checkbox"
																			className="w-4 h-4 border-gray-300 rounded text-cu-red focus:ring-indigo-500"
																		/>
																	</div>
																	<div className="ml-3 text-sm">
																		<label
																			htmlFor="comments"
																			className="font-medium text-gray-700"
																		>
																			Comments
																		</label>
																	</div>
																</div>
																<div className="relative flex items-start">
																	<div className="flex items-center h-5">
																		<input
																			id="candidates"
																			name="candidates"
																			type="checkbox"
																			className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
																		/>
																	</div>
																	<div className="ml-3 text-sm">
																		<label
																			htmlFor="candidates"
																			className="font-medium text-gray-700"
																		>
																			Candidates
																		</label>
																	</div>
																</div>
																<div className="relative flex items-start">
																	<div className="flex items-center h-5">
																		<input
																			id="offers"
																			name="offers"
																			type="checkbox"
																			className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
																		/>
																	</div>
																	<div className="ml-3 text-sm">
																		<label
																			htmlFor="offers"
																			className="font-medium text-gray-700"
																		>
																			Offers
																		</label>
																	</div>
																</div>
															</div>
														</fieldset>
													</div>

													<div className="mt-6">
														<fieldset className="mt-6">
															<legend className="sr-only">
																By Email
															</legend>
															<div
																className="pb-4 mt-4 mb-4 text-lg font-bold text-gray-900 border-b"
																aria-hidden="true"
															>
																Admin Options
															</div>
															<div className="px-1 mt-4 space-y-4">
																<div className="flex items-center">
																	<input
																		id="push-everything"
																		name="push-notifications"
																		type="radio"
																		className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
																	/>
																	<label
																		htmlFor="push-everything"
																		className="block ml-3 text-sm font-medium text-gray-700"
																	>
																		Set as
																		featured
																	</label>
																</div>
															</div>
														</fieldset>
													</div>
												</div>
											</div>

											<div className="py-3 text-right">
												<button
													type="submit"
													className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cu-red hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												>
													Save
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
}
