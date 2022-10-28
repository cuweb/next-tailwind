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

export default function DropDown({ isType = "button" }: DropDownProps) {
	return (
		<Menu as="div" className="relative flex-shrink-0 inline-block">
			<div>
				{/* As prop will get passed into the component so we can specify div or button based on what we use as a child */}
				{/* <Menu.Button as="div"> */}
				<Menu.Button as={isType === "button" ? "div" : "button"}>
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
				{/* Add option for right-0 or left-0 */}
				<Menu.Items className="absolute left-0 z-10 w-48 py-1 mt-2 origin-top-left bg-white border rounded-md shadow-lg border-cu-black-100 focus:outline-none">
					{/* Map through items from incoming data */}
					<Menu.Item>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-cu-black-800 hover:bg-cu-black-50"
						>
							LinkText
						</a>
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
