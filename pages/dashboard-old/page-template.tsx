import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon,
	BriefcaseIcon,
	LinkIcon,
	UserCircleIcon,
	XMarkIcon,
	Bars3Icon,
} from "@heroicons/react/24/outline";

const navigation = [
	{
		name: "Profile",
		href: "/dashboard",
		icon: UserCircleIcon,
		current: true,
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

const secondaryNavigation = [
	{
		name: "Back To Site",
		href: "/dashboard",
		icon: ArrowLeftOnRectangleIcon,
	},
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
	{
		name: "Manage Events",
		href: "/dashboard/events",
		icon: LinkIcon,
		current: false,
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="h-screen md:grid md:grid-cols-sidenav">
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
						<div className="fixed inset-0 bg-black bg-opacity-80" />
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
							<Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-sm bg-gradient-to-l from-cu-black-50 to-white">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 p-1 -mr-10 bg-cu-red">
										<button
											type="button"
											className="flex items-center justify-center w-8 h-8 focus:outline-none"
											onClick={() =>
												setSidebarOpen(false)
											}
										>
											<XMarkIcon
												className="w-5 h-5 text-white"
												aria-hidden="true"
											/>
											<span className="sr-only">
												Close sidebar
											</span>
										</button>
									</div>
								</Transition.Child>
								<div>
									<Link
										href="/dashboard"
										className="flex items-center p-4"
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
								<ul>
									{navigation.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className={classNames(
													item.current
														? "border-cu-red bg-cu-red-50 text-cu-red"
														: "border-transparent text-cu-black-600 hover:bg-white hover:text-cu-red",
													"group flex items-center border-l-4 p-3 text-base font-medium"
												)}
											>
												<item.icon
													className={classNames(
														item.current
															? "text-cu-red"
															: "text-cu-black-400 group-hover:text-cu-black-800",
														"mr-3 h-6 w-6 flex-shrink-0"
													)}
													aria-hidden="true"
												/>
												{item.name}
											</a>
										</li>
									))}
								</ul>
								<div>
									<h2 className="p-4 mt-8 mb-2 text-sm font-medium bg-white text-cu-bl10ck:900 border-cu-grey-200 border-y">
										Admin Options
									</h2>
									<ul>
										{adminNavigation.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className={classNames(
														item.current
															? "border-cu-red bg-cu-red-50 text-cu-red"
															: "border-transparent text-cu-black-600 hover:bg-white hover:text-cu-red",
														"group flex items-center border-l-4 p-3 text-sm font-medium"
													)}
												>
													<item.icon
														className={classNames(
															item.current
																? "text-cu-red"
																: "text-cu-black-400 group-hover:text-cu-black-800",
															"mr-3 h-5 w-5 flex-shrink-0"
														)}
														aria-hidden="true"
													/>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Mobile Nav */}
			<div className="sticky top-0 z-20 flex items-center gap-4 border-b border-cu-black-100 md:hidden">
				<button
					type="button"
					className="h-16 px-4 text-gray-500 border-r border-gray-200 focus:outline-none md:hidden"
					onClick={() => setSidebarOpen(true)}
				>
					<span className="sr-only">Open sidebar</span>
					<Bars3Icon className="w-6 h-6" aria-hidden="true" />
				</button>
				<div className="flex items-center">
					<Image
						className="w-auto h-10"
						src="/cu-shield.svg"
						alt="Carleton"
					/>
					<h1 className="pl-3 pr-2 text-xl font-semibold ">
						Events Dashboard
					</h1>
				</div>
			</div>

			{/* Desktop Nav */}
			<aside className="relative hidden border-r border-cu-grey-200 bg-gradient-to-l from-cu-black-50 to-white md:block">
				<nav className="sticky top-0">
					<div>
						<Link
							href="/dashboard"
							className="flex items-center p-4"
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
					<ul>
						{navigation.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className={classNames(
										item.current
											? "border-cu-red bg-cu-red-50 text-cu-red"
											: "border-transparent text-cu-black-600 hover:bg-white hover:text-cu-red",
										"group flex items-center border-l-4 p-3 text-base font-medium"
									)}
								>
									<item.icon
										className={classNames(
											item.current
												? "text-cu-red"
												: "text-cu-black-400 group-hover:text-cu-black-800",
											"mr-3 h-6 w-6 flex-shrink-0"
										)}
										aria-hidden="true"
									/>
									{item.name}
								</a>
							</li>
						))}
					</ul>
					<div>
						<h2 className="p-4 mt-8 mb-2 text-sm font-medium bg-white text-cu-bl10ck:900 border-cu-grey-200 border-y">
							Admin Options
						</h2>
						<ul>
							{adminNavigation.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className={classNames(
											item.current
												? "border-cu-red bg-cu-red-50 text-cu-red"
												: "border-transparent text-cu-black-600 hover:bg-white hover:text-cu-red",
											"group flex items-center border-l-4 p-3 text-sm font-medium"
										)}
									>
										<item.icon
											className={classNames(
												item.current
													? "text-cu-red"
													: "text-cu-black-400 group-hover:text-cu-black-800",
												"mr-3 h-5 w-5 flex-shrink-0"
											)}
											aria-hidden="true"
										/>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</aside>

			{/* Content Area */}
			<main className="max-w-5xl px-6 py-8 md:mx-auto md:w-full md:py-10 md:px-14">
				<p className="h-[500px] bg-slate-300">
					This is the content area
				</p>
				{/* <form action="#" method="POST">
					<div className="sm:overflow-hidden ">
						<div className="px-4 py-8 space-y-6 bg-white md:px-0">
							<div>
								<h3 className="pb-4 mb-8 text-2xl font-bold text-gray-900 border-b">
									Profile Settings
								</h3>
							</div>

							<div className="grid grid-cols-3 gap-6">
								<div className="col-span-3">
									<label className="block text-sm font-medium text-gray-700">
										Photo
									</label>
									<div className="flex items-center mt-2">
										<span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
											<svg
												className="w-full h-full text-gray-300"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
											</svg>
										</span>
										<button
											type="button"
											className="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Change
										</button>
									</div>
								</div>

								<div className="col-span-3">
									<label className="block text-sm font-medium text-gray-700">
										Cover photo
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
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<div className="flex text-sm text-gray-600">
												<label
													htmlFor="file-upload"
													className="relative font-medium bg-white rounded-md cursor-pointer text-cu-red focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
												>
													<span>Upload a file</span>
													<input
														id="file-upload"
														name="file-upload"
														type="file"
														className="sr-only"
													/>
												</label>
												<p className="pl-1">
													or drag and drop
												</p>
											</div>
											<p className="text-xs text-gray-500">
												PNG, JPG, GIF up to 10MB
											</p>
										</div>
									</div>
								</div>

								<div className="col-span-3">
									<ul
										role="list"
										className="mt-2 divide-y divide-gray-200"
									>
										<Switch.Group
											as="li"
											className="flex items-center justify-between py-4"
										>
											<div className="flex flex-col">
												<Switch.Label
													as="p"
													className="text-sm font-medium text-gray-900"
													passive
												>
													Use Preferred First Name
												</Switch.Label>
												<Switch.Description className="text-sm text-gray-500">
													Nulla amet tempus sit
													accumsan. Aliquet turpis sed
													sit lacinia.
												</Switch.Description>
											</div>
											<Switch
												checked={availableToHire}
												onChange={setAvailableToHire}
												className={classNames(
													availableToHire
														? "bg-cu-red"
														: "bg-gray-200",
													"relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
												)}
											>
												<span
													aria-hidden="true"
													className={classNames(
														availableToHire
															? "translate-x-5"
															: "translate-x-0",
														"inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
													)}
												/>
											</Switch>
										</Switch.Group>
										<Switch.Group
											as="li"
											className="flex items-center justify-between py-4"
										>
											<div className="flex flex-col">
												<Switch.Label
													as="p"
													className="text-sm font-medium text-gray-900"
													passive
												>
													Make account private
												</Switch.Label>
												<Switch.Description className="text-sm text-gray-500">
													Pharetra morbi dui mi mattis
													tellus sollicitudin cursus
													pharetra.
												</Switch.Description>
											</div>
											<Switch
												checked={privateAccount}
												onChange={setPrivateAccount}
												className={classNames(
													privateAccount
														? "bg-teal-500"
														: "bg-gray-200",
													"relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
												)}
											>
												<span
													aria-hidden="true"
													className={classNames(
														privateAccount
															? "translate-x-5"
															: "translate-x-0",
														"inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
													)}
												/>
											</Switch>
										</Switch.Group>
									</ul>
								</div>
							</div>

							<div>
								<h3 className="pb-4 mb-8 text-lg font-bold text-gray-900 border-b">
									Personal Information
								</h3>
							</div>

							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium text-gray-700"
									>
										First name
									</label>
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium text-gray-700"
									>
										Last name
									</label>
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-4">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										E-mail Address
									</label>
									<div className="relative mt-1 rounded-md shadow-sm">
										<input
											type="email"
											name="email"
											id="email"
											className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-cu-red focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
											placeholder="you@example.com"
											defaultValue="adamwathan"
											aria-invalid="true"
											aria-describedby="email-error"
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
										id="email-error"
									>
										Please enter a valid e-mail address
									</p>
								</div>

								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="country"
										className="block text-sm font-medium text-gray-700"
									>
										Country
									</label>
									<select
										id="country"
										name="country"
										autoComplete="country-name"
										className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>

								<div className="col-span-6">
									<label
										htmlFor="street-address"
										className="block text-sm font-medium text-gray-700"
									>
										Street address
									</label>
									<input
										type="text"
										name="street-address"
										id="street-address"
										autoComplete="street-address"
										className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-6 lg:col-span-2">
									<label
										htmlFor="city"
										className="block text-sm font-medium text-gray-700"
									>
										City
									</label>
									<input
										type="text"
										name="city"
										id="city"
										autoComplete="address-level2"
										className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3 lg:col-span-2">
									<label
										htmlFor="region"
										className="block text-sm font-medium text-gray-700"
									>
										State / Province
									</label>
									<input
										type="text"
										name="region"
										id="region"
										autoComplete="address-level1"
										className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3 lg:col-span-2">
									<label
										htmlFor="postal-code"
										className="block text-sm font-medium text-gray-700"
									>
										ZIP / Postal code
									</label>
									<input
										type="text"
										name="postal-code"
										id="postal-code"
										autoComplete="postal-code"
										className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div>
								<h3 className="pb-4 mt-10 mb-8 text-lg font-bold text-gray-900 border-b">
									Notifications
								</h3>
								<p className="mt-1 text-sm text-gray-500">
									We'll always let you know about important
									changes, but you pick what else you want to
									hear about.
								</p>
							</div>
							<div className="mt-6">
								<fieldset>
									<legend className="sr-only">
										By Email
									</legend>
									<div
										className="text-base font-medium text-gray-900"
										aria-hidden="true"
									>
										By Email
									</div>
									<div className="mt-4 space-y-4">
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
												<p className="text-gray-500">
													Get notified when someones
													posts a comment on a
													posting.
												</p>
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
												<p className="text-gray-500">
													Get notified when a
													candidate applies for a job.
												</p>
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
												<p className="text-gray-500">
													Get notified when a
													candidate accepts or rejects
													an offer.
												</p>
											</div>
										</div>
									</div>
								</fieldset>
								<fieldset className="mt-6">
									<legend className="text-base font-medium text-gray-900 contents">
										Push Notifications
									</legend>
									<p className="text-sm text-gray-500">
										These are delivered via SMS to your
										mobile phone.
									</p>
									<div className="mt-4 space-y-4">
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
												Everything
											</label>
										</div>
										<div className="flex items-center">
											<input
												id="push-email"
												name="push-notifications"
												type="radio"
												className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
											/>
											<label
												htmlFor="push-email"
												className="block ml-3 text-sm font-medium text-gray-700"
											>
												Same as email
											</label>
										</div>
										<div className="flex items-center">
											<input
												id="push-nothing"
												name="push-notifications"
												type="radio"
												className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
											/>
											<label
												htmlFor="push-nothing"
												className="block ml-3 text-sm font-medium text-gray-700"
											>
												No push notifications
											</label>
										</div>
									</div>
								</fieldset>
							</div>
						</div>

						<div className="px-4 py-3 text-right sm:px-6">
							<button
								type="submit"
								className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cu-red hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Save
							</button>
						</div>
					</div>
				</form> */}
			</main>
		</div>
	);
}
