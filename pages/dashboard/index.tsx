import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

import DashboardNav from "./_navigation";
import DashboardForm from "./_content";

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

								{/* NOTE: shared nav as component */}
								<DashboardNav />
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
					<img
						className="w-auto h-10"
						src="/cu-shield.svg"
						alt="Carleton"
					/>
					<h1 className="pl-3 pr-2 text-xl font-semibold ">
						Dashboard
					</h1>
				</div>
			</div>

			{/* Desktop Nav */}
			<aside className="relative hidden border-r border-cu-grey-200 bg-gradient-to-l from-cu-black-50 to-white md:block">
				<nav className="sticky top-0 flex flex-col h-screen">
					{/* NOTE: shared nav as component */}
					<DashboardNav />
				</nav>
			</aside>

			{/* Content Area */}
			<main className="max-w-5xl px-6 py-8 md:mx-auto md:w-full md:py-10 md:px-14">
				{/* NOTE: content as component */}
				<DashboardForm />
			</main>
		</div>
	);
}
