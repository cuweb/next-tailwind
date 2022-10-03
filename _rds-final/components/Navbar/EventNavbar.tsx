import Link from "next/link";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	MagnifyingGlassIcon,
	ArrowUpTrayIcon,
	PlusIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<Disclosure
			as="nav"
			className="sticky top-0 z-50 bg-white border-t-2 shadow border-cu-red"
		>
			{({ open }) => (
				<>
					<div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
						<div className="flex justify-between h-20">
							<div className="flex px-2 lg:px-0">
								<Link href="/events">
									<a className="flex items-center flex-shrink-0 hover:text-cu-red">
										<img
											className="w-auto h-10"
											src="/cu-shield.svg"
											alt="Carleton"
										/>
										<h1 className="items-center pl-3 pr-2 text-2xl font-semibold">
											Events
										</h1>
									</a>
								</Link>
								<div className="hidden lg:ml-6 lg:flex lg:space-x-6">
									<a
										href="/events/weekly"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-cu-black-800 hover:border-cu-black-100 hover:text-cu-red"
									>
										Weekly
									</a>
									<a
										href="/events/monthly"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-cu-black-800 hover:border-cu-black-100 hover:text-cu-red"
									>
										Monthly
									</a>
									<a
										href="/events/single"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-cu-black-800 hover:border-cu-black-100 hover:text-cu-red"
									>
										Single
									</a>
								</div>
							</div>
							<div className="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
								<div className="w-full max-w-lg lg:max-w-xs">
									<label htmlFor="search" className="sr-only">
										Search
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<MagnifyingGlassIcon
												className="w-5 h-5 text-gray-400"
												aria-hidden="true"
											/>
										</div>
										<input
											id="search"
											name="search"
											className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
											placeholder="Search"
											type="search"
										/>
									</div>
								</div>
							</div>
							<div className="flex items-center lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block w-6 h-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block w-6 h-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden lg:ml-4 lg:flex lg:items-center">
								<button
									type="button"
									className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-cu-red hover:bg-cu-red-800 focus:outline-none"
								>
									<PlusIcon
										className="-ml-0.5 h-4 w-4"
										aria-hidden="true"
									/>
									<a href="/events/submit" className="px-1">
										Event
									</a>
								</button>

								{/* Profile dropdown */}
								<Menu
									as="div"
									className="relative flex-shrink-0 ml-4"
								>
									<div>
										<Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
											<span className="sr-only">
												Open user menu
											</span>
											<img
												className="w-8 h-8 rounded-full"
												src="/carlton-banks/profile-square.jpg"
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="pt-2 pb-3 space-y-1">
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-cu-black-200 bg-gradient-to-r from-gray-50 to-white text-cu-black-800"
							>
								Dashboard
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-transparent text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red"
							>
								Team
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-transparent text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red"
							>
								Projects
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-transparent text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red"
							>
								Calendar
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="/events/submit"
								className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-cu-red bg-gradient-to-r from-cu-red-50 to-white text-cu-black-800 hover:bg-cu-red hover:text-cu-red"
							>
								Submit Event
							</Disclosure.Button>
						</div>
						<div className="pt-4 pb-3 border-t border-gray-200">
							<div className="flex items-center px-4">
								<div className="flex-shrink-0">
									<img
										className="w-10 h-10 rounded-full"
										src="/carlton-banks/profile-square.jpg"
										alt=""
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium text-gray-800">
										Alfonso Ribeiro
									</div>
									<div className="text-sm font-medium text-gray-500">
										carlton@keepingitfresh.com
									</div>
								</div>
							</div>
							<div className="mt-3 space-y-1">
								<Disclosure.Button
									as="a"
									href="#"
									className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-transparent text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red"
								>
									Your Profile
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-transparent text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red"
								>
									Settings
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 border-transparent text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red"
								>
									Sign out
								</Disclosure.Button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
