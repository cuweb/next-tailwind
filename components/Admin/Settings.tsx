/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Form from "../../_rds-final/_misc/Form/Form";
import GradientDiv from "../../_rds-final/_misc/Gradient/GradientDiv";
import {
	Bars3Icon,
	BellIcon,
	CogIcon,
	CreditCardIcon,
	KeyIcon,
	SquaresPlusIcon,
	UserCircleIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

const user = {
	name: "Debbie Lewis",
	handle: "deblewis",
	email: "debbielewis@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Jobs", href: "#", current: false },
	{ name: "Applicants", href: "#", current: false },
	{ name: "Company", href: "#", current: false },
];
const subNavigation = [
	{ name: "Profile", href: "#", icon: UserCircleIcon, current: true },
	{ name: "Account", href: "#", icon: CogIcon, current: false },
	{ name: "Password", href: "#", icon: KeyIcon, current: false },
	{ name: "Notifications", href: "#", icon: BellIcon, current: false },
	{ name: "Billing", href: "#", icon: CreditCardIcon, current: false },
	{ name: "Integrations", href: "#", icon: SquaresPlusIcon, current: false },
];

const adminNavigation = [
	{ name: "Profile", href: "#", icon: UserCircleIcon, current: false },
	{ name: "Account", href: "#", icon: CogIcon, current: false },
	{ name: "Password", href: "#", icon: KeyIcon, current: false },
	{ name: "Notifications", href: "#", icon: BellIcon, current: false },
	{ name: "Billing", href: "#", icon: CreditCardIcon, current: false },
	{ name: "Integrations", href: "#", icon: SquaresPlusIcon, current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
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

export default function Settings() {
	const [availableToHire, setAvailableToHire] = useState(true);
	const [privateAccount, setPrivateAccount] = useState(false);
	const [allowCommenting, setAllowCommenting] = useState(true);
	const [allowMentions, setAllowMentions] = useState(true);

	return (
		<>
			<div className="relative h-60">
				<GradientDiv />
				<header className="relative py-10 ">
					<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<h1 className="text-3xl font-medium tracking-tight text-cu-black:900">
							Settings
						</h1>
					</div>
				</header>
			</div>
			<main className="relative -mt-32">
				<div className="px-4 pb-6 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-16">
					<div className="overflow-hidden bg-white border rounded-lg">
						<div className="divide-y divide-gray-100 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
							<aside className="py-6 lg:col-span-3">
								<nav className="space-y-1">
									{subNavigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
												item.current
													? " text-cu-black:900 border-l-4 border-cu-red bg-gray-50 hover:bg-teal-50 hover:text-green-700"
													: "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900",
												"group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
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
														? "text-gray-500 group-hover:text-gray-500"
														: "text-gray-400 group-hover:text-gray-500",
													"-ml-1 mr-3 h-6 w-6 flex-shrink-0"
												)}
												aria-hidden="true"
											/>
											<span className="truncate">
												{item.name}
											</span>
										</a>
									))}
								</nav>

								<div className="px-3 py-4 my-4 border-y bg-gray-50">
									<h2 className="text-sm font-medium leading-6 text-cu-black:900">
										Admin Options
									</h2>
								</div>

								<nav className="space-y-1">
									{adminNavigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
												item.current
													? "border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
													: "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900",
												"group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
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
														? "text-teal-500 group-hover:text-teal-500"
														: "text-gray-400 group-hover:text-gray-500",
													"-ml-1 mr-3 h-6 w-6 flex-shrink-0"
												)}
												aria-hidden="true"
											/>
											<span className="truncate">
												{item.name}
											</span>
										</a>
									))}
								</nav>
							</aside>

							<div className="lg:col-span-9">
								{/* Tabs */}
								<div className="p-6 border-b border-gray-100 lg:hidden">
									<label
										htmlFor="selected-tab"
										className="sr-only"
									>
										Select a tab
									</label>
									<select
										id="selected-tab"
										name="selected-tab"
										className="block w-full mt-1 text-base border-gray-100 rounded-md focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
									>
										{tabs.map((tab) => (
											<option key={tab.name}>
												{tab.name}
											</option>
										))}
									</select>
								</div>
								<div className="hidden px-6 py-2 lg:block">
									<div className="border-b border-gray-100">
										<nav className="flex -mb-px space-x-8">
											{tabs.map((tab) => (
												<a
													key={tab.name}
													href={tab.href}
													className={classNames(
														tab.current
															? "text-cu-black:900 border-cu-red"
															: "border-transparent text-gray-500 hover:border-gray-300 hover:text-cu-red",
														"whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
													)}
												>
													{tab.name}
												</a>
											))}
										</nav>
									</div>
								</div>

								<Form />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
