import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import DropDownButton from "./_dropDown_Button";
import DropDownIcon from "./_dropDown_Icon";
import DropDownAvatar from "./_dropDown_Avatar";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export interface DropDownProps {
	isType?: "button" | "icon" | "avatar";
}

const styles = {
	// core: `flex text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`,
	button: `inline-flex gap-1 items-center justify-center font-medium rounded-md focus:outline-none bg-cu-red text-white hover:bg-cu-black-600 px-3 py-2 text-sm`,
	icon: `inline-flex gap-1 items-center justify-center font-medium rounded-md focus:outline-none bg-cu-red text-white hover:bg-cu-black-600 px-3 py-2 text-sm`,
	avatar: ``,
};

export default function DropDown({ isType = "button" }: DropDownProps) {
	console.log(isType);
	return (
		<Menu as="div" className="relative flex-shrink-0">
			<div>
				{/* As prop will get passed into the component so we can specify div or button based on what we use as a child */}
				<Menu.Button as="div">
					<span className="sr-only">Open menu</span>
					{isType === "button" ? <DropDownButton /> : ""}
					{isType === "icon" ? <DropDownIcon /> : ""}
					{isType === "avatar" ? <DropDownAvatar /> : ""}
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
