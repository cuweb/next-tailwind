import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon,
	BriefcaseIcon,
	LinkIcon,
	UserCircleIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme

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

	const { quill, quillRef } = useQuill();

	useEffect(() => {
		if (quill) {
			quill.clipboard.dangerouslyPasteHTML(
				"<h1>React Hook for Quill!</h1>"
			);
		}
	}, [quill]);

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
						<main className="flex-1">
							<div className="relative max-w-4xl mx-auto md:px-0">
								<div style={{ height: 500 }}>
									<div ref={quillRef} />
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
}
