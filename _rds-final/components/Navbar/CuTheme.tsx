/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
	DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

import { LifebuoyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
	return (
		<Disclosure
			as="nav"
			className="sticky top-0 z-50 bg-white border-t-2 shadow border-cu-red"
		>
			{({ open }) => (
				<>
					{/* max-w-7xl */}
					<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="flex justify-between h-20">
							<div className="flex">
								<Link href="/events" className="flex items-center flex-shrink-0">
										<img
											className="w-auto h-10"
											src="/cu-shield.svg"
											alt="Carleton"
										/>
										<h1 className="items-center pl-3 pr-2 text-2xl font-semibold tracking-tight">
											Carleton
										</h1>
								</Link>
								{/* <div className="hidden lg:ml-6 lg:flex lg:space-x-6">
									<a
										href="#"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-cu-red"
									>
										Featured
									</a>
									<a
										href="#"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-cu-black-100 hover:text-cu-red"
									>
										Weekly
									</a>
									<a
										href="/events/single-one"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-cu-black-100 hover:text-cu-red"
									>
										Single 1
									</a>
									<a
										href="/events/single-two"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-cu-black-100 hover:text-cu-red"
									>
										Single 2
									</a>
								</div> */}
							</div>

							<div className="hidden sm:ml-6 sm:flex sm:items-center">
								<div className="hidden h-20 px-2 md:flex">
									<button
										type="button"
										className="text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
										// className="text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<span className="sr-only">
											View notifications
										</span>
										<DevicePhoneMobileIcon
											className="w-6 h-6"
											aria-hidden="true"
										/>
									</button>
								</div>
								<div className="hidden h-20 px-2 md:flex">
									<button
										type="button"
										className="text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<span className="sr-only">
											View notifications
										</span>
										<LifebuoyIcon
											className="w-6 h-6"
											aria-hidden="true"
										/>
									</button>
								</div>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-4">
									<div>
										<Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
											<span className="sr-only">
												Open user menu
											</span>
											<div className="flex items-center">
												<div className="flex-shrink-0">
													<img
														className="w-10 h-10 border-4 rounded-full border-cu-black-200"
														src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
														alt=""
													/>
												</div>
											</div>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
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
							<div className="flex items-center -mr-2 sm:hidden">
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
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="pt-2 pb-3 space-y-1">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-black border-l-4 border-cu-red bg-gray-50"
							>
								Today
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								Weekly
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								Monthly
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								Featured
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								My Events
							</Disclosure.Button>
						</div>
						<div className="pt-4 pb-3 border-t border-gray-200">
							<div className="flex items-center px-4">
								<div className="flex-shrink-0">
									<img
										className="w-10 h-10 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium text-gray-800">
										Tom Cook
									</div>
									<div className="text-sm font-medium text-gray-500">
										tom@example.com
									</div>
								</div>
							</div>
							<div className="mt-3 space-y-1">
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
								>
									Your Profile
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
								>
									Settings
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
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
