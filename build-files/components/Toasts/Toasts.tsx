/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	InformationCircleIcon,
	ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Toast() {
	const [showSucccess, setShowSucccess] = useState(true);
	const [showError, setShowError] = useState(true);
	const [showWarn, setShowWarn] = useState(true);
	const [showInfo, setShowInfo] = useState(true);

	return (
		<>
			{/* Global notification live region, render this permanently at the end of the document */}
			<div
				aria-live="assertive"
				className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none top-20 sm:items-start sm:p-6"
			>
				<div className="flex flex-col items-center w-full space-y-4 sm:items-end">
					{/* Success Notification panel */}
					<Transition
						show={showSucccess}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
							<div className="p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<CheckCircleIcon
											className="w-6 h-6 text-green-400"
											aria-hidden="true"
										/>
									</div>
									<div className="ml-3 w-0 flex-1 pt-0.5">
										<p className="text-sm font-medium text-gray-900">
											Success!
										</p>
										<p className="mt-1 text-sm text-gray-500">
											Records have been updated
										</p>
									</div>
									<div className="flex flex-shrink-0 ml-4">
										<button
											type="button"
											className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											onClick={() => {
												setShowSucccess(false);
											}}
										>
											<span className="sr-only">
												Close
											</span>
											<XMarkIcon
												className="w-5 h-5"
												aria-hidden="true"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>

					{/* Error Notification panel */}
					<Transition
						show={showError}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
							<div className="p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<ExclamationCircleIcon
											className="w-6 h-6 text-cu-red"
											aria-hidden="true"
										/>
									</div>
									<div className="ml-3 w-0 flex-1 pt-0.5">
										<p className="text-sm font-medium text-gray-900">
											Error!
										</p>
										<p className="mt-1 text-sm text-gray-500">
											Unable to save record.
										</p>
									</div>
									<div className="flex flex-shrink-0 ml-4">
										<button
											type="button"
											className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											onClick={() => {
												setShowError(false);
											}}
										>
											<span className="sr-only">
												Close
											</span>
											<XMarkIcon
												className="w-5 h-5"
												aria-hidden="true"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>

					{/* Warning Notification panel */}
					<Transition
						show={showWarn}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
							<div className="p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<ShieldExclamationIcon
											className="w-6 h-6 text-yellow-400"
											aria-hidden="true"
										/>
									</div>
									<div className="ml-3 w-0 flex-1 pt-0.5">
										<p className="text-sm font-medium text-gray-900">
											Warning
										</p>
										<p className="mt-1 text-sm text-gray-500">
											You have lost internet connectivity
										</p>
									</div>
									<div className="flex flex-shrink-0 ml-4">
										<button
											type="button"
											className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											onClick={() => {
												setShowWarn(false);
											}}
										>
											<span className="sr-only">
												Close
											</span>
											<XMarkIcon
												className="w-5 h-5"
												aria-hidden="true"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>

					{/* Info Notification panel */}
					<Transition
						show={showInfo}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
							<div className="p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<InformationCircleIcon
											className="w-6 h-6 text-gray-600"
											aria-hidden="true"
										/>
									</div>
									<div className="ml-3 w-0 flex-1 pt-0.5">
										<p className="text-sm font-medium text-gray-900">
											Information
										</p>
										<p className="mt-1 text-sm text-gray-500">
											You look like you need some coffee.
										</p>
									</div>
									<div className="flex flex-shrink-0 ml-4">
										<button
											type="button"
											className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											onClick={() => {
												setShowInfo(false);
											}}
										>
											<span className="sr-only">
												Close
											</span>
											<XMarkIcon
												className="w-5 h-5"
												aria-hidden="true"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</>
	);
}
