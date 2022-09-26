import { Fragment, useState } from "react";
import {
	Dialog,
	Disclosure,
	Menu,
	Popover,
	Transition,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
// import EventWithDatePicker from "./EventDatePicker";

const sortOptions = [
	{ name: "Most Popular", href: "#", current: true },
	{ name: "Best Rating", href: "#", current: false },
	{ name: "Newest", href: "#", current: false },
];

const filters = [
	{
		id: "category",
		name: "Category",
		options: [
			{ value: "planning", label: "Planning", checked: false },
			{
				value: "projectmanagement",
				label: "Project Management",
				checked: false,
			},
		],
	},
	{
		id: "tags",
		name: "Tags",
		options: [
			{ value: "general", label: "General", checked: false },
			{
				value: "online/virtual",
				label: "Online/Virtual",
				checked: false,
			},
			{ value: "finances", label: "Finances", checked: false },
			{
				value: "healthyworkplace",
				label: "Healthy Workplace",
				checked: false,
			},
		],
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function EventFilter() {
	const [open, setOpen] = useState(false);

	return (
		<div className="bg-white">
			{/* Mobile filter dialog */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 sm:hidden"
					onClose={setOpen}
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
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
								<div className="flex items-center justify-between px-4">
									<h2 className="text-lg font-medium text-gray-900">
										Filters
									</h2>
									<button
										type="button"
										className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">
											Close menu
										</span>
										<XMarkIcon
											className="w-6 h-6"
											aria-hidden="true"
										/>
									</button>
								</div>

								{/* Filters */}
								<form className="mt-4">
									{filters.map((section) => (
										<Disclosure
											as="div"
											key={section.name}
											className="px-4 py-6 border-t border-gray-200"
										>
											{({ open }) => (
												<>
													<h3 className="flow-root -mx-2 -my-3">
														<Disclosure.Button className="flex items-center justify-between w-full px-2 py-3 text-sm text-gray-400 bg-white">
															<span className="font-medium text-gray-900">
																{section.name}
															</span>
															<span className="flex items-center ml-6">
																<ChevronDownIcon
																	className={classNames(
																		open
																			? "-rotate-180"
																			: "rotate-0",
																		"h-5 w-5 transform"
																	)}
																	aria-hidden="true"
																/>
															</span>
														</Disclosure.Button>
													</h3>
													<Disclosure.Panel className="pt-6">
														<div className="space-y-6">
															{section.options.map(
																(
																	option,
																	optionIdx
																) => (
																	<div
																		key={
																			option.value
																		}
																		className="flex items-center"
																	>
																		<input
																			id={`filter-mobile-${section.id}-${optionIdx}`}
																			name={`${section.id}[]`}
																			defaultValue={
																				option.value
																			}
																			type="checkbox"
																			defaultChecked={
																				option.checked
																			}
																			className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
																		/>
																		<label
																			htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																			className="ml-3 text-sm text-gray-500"
																		>
																			{
																				option.label
																			}
																		</label>
																	</div>
																)
															)}
														</div>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<div>
				<h1 className="my-4 text-3xl font-semibold text-cu-black-800">
					Upcoming Events
				</h1>
			</div>

			{/* Filters */}
			<section aria-labelledby="filter-heading">
				<div className="pb-4 bg-white border-b border-gray-200">
					<div className="flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="hidden sm:block">
							<div className="flow-root">
								<Popover.Group className="flex items-center -mx-4 divide-x divide-gray-200">
									{filters.map((section, sectionIdx) => (
										<Popover
											key={section.name}
											className="relative inline-block px-4 text-left"
										>
											<Popover.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
												<span>{section.name}</span>
												<ChevronDownIcon
													className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
													aria-hidden="true"
												/>
											</Popover.Button>
											<Transition
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Popover.Panel className="absolute z-10 p-4 mt-2 origin-top-right bg-white rounded-md shadow-2xl right-90 ring-1 ring-black ring-opacity-5 focus:outline-none">
													<form className="space-y-4">
														{section.options.map(
															(
																option,
																optionIdx
															) => (
																<div
																	key={
																		option.value
																	}
																	className="flex items-center"
																>
																	<input
																		id={`filter-${section.id}-${optionIdx}`}
																		name={`${section.id}[]`}
																		defaultValue={
																			option.value
																		}
																		type="checkbox"
																		defaultChecked={
																			option.checked
																		}
																		className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
																	/>
																	<label
																		htmlFor={`filter-${section.id}-${optionIdx}`}
																		className="pr-6 ml-3 text-sm font-medium text-gray-900 whitespace-nowrap"
																	>
																		{
																			option.label
																		}
																	</label>
																</div>
															)
														)}
													</form>
												</Popover.Panel>
											</Transition>
										</Popover>
									))}
								</Popover.Group>
							</div>
						</div>
						<div className="pl-6">
							<button
								type="button"
								className="inline-flex items-center text-gray-500"
							>
								<span>Clear all</span>
								<ArrowPathIcon className="w-4 h-4 ml-2" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
