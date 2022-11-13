import Link from "next/link";
import DropDown from "./DropDown";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	MagnifyingGlassIcon,
	ArrowUpTrayIcon,
	PlusIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavLinks = [
	{
		id: 1,
		title: "Weekly",
		link: "#",
	},
	{
		id: 2,
		title: "Monthly",
		link: "#",
	},
	{
		id: 3,
		title: "Single",
		link: "#",
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function TopNav1() {
	return (
		<Disclosure
			as="nav"
			className="sticky top-0 z-50 bg-white border-t-2 shadow border-cu-red"
		>
			{({ open }) => (
				<div className="flex h-20 gap-6 px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
					{/* Required site title, will have options tbd */}
					<Link href="#" className="flex items-center flex-shrink-0 hover:text-cu-red">
							<img
								className="w-auto h-10"
								src="/cu-shield.svg"
								alt="Carleton"
							/>
							<h1 className="items-center pl-3 pr-2 text-2xl font-semibold">
								Events
							</h1>
					</Link>

					{/* Navigation specific to TopNav, will be a optional subComponent */}
					<ul className="hidden lg:flex lg:flex-1 lg:gap-6">
						{NavLinks.map(({ id, title, link }) => (
							<li
								key={id}
								className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-cu-black-800 hover:border-cu-black-100 hover:text-cu-red"
							>
								<a href={link}>{title}</a>
							</li>
						))}
					</ul>

					{/* Drop-in area, components should be able to drop into this area */}
					<div className="hidden lg:flex lg:items-center lg:gap-6">
						<DropDown isType="icon" />
						<DropDown isType="button" />
						<DropDown isType="avatar" />
					</div>
				</div>
			)}
		</Disclosure>
	);
}
