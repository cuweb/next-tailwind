import { Menu, Transition } from "@headlessui/react";
import { BugAntIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
// import { HeroIcon, IconName } from "../HeroIcon";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function DropDownIcon() {
	return (
		<Menu as="div" className="relative flex-shrink-0">
			<div>
				<Menu.Button className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none">
					{/* A component could be used here */}
					<span className="sr-only">Open menu</span>
					<BugAntIcon className="w-5 h-5" />
				</Menu.Button>
			</div>

			{/* DropDown nav items */}
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
									active ? "bg-gray-100" : "",
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
									active ? "bg-gray-100" : "",
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
									active ? "bg-gray-100" : "",
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
	);
}
