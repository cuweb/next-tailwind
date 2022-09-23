import { Transition, Dialog } from "@headlessui/react";
import {
	PencilIcon,
	BellIcon,
	LockOpenIcon,
	ChatBubbleLeftEllipsisIcon,
	CalendarIcon,
	XMarkIcon,
	ArchiveBoxIcon,
	Bars4Icon,
	ClockIcon,
	HomeIcon,
	HeartIcon,
	ShareIcon,
	MapPinIcon,
	PaperClipIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
// import Panel from "../../../build-files/components/Panels/Panel";
// import Columns from "../../../build-files/layouts/Columns/Columns";

const eventDescription = {
	description: "event paragphas and description 1",
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const navigation = [
	{ name: "All Issues", href: "#", icon: HomeIcon, current: true },
	{ name: "My Issues", href: "#", icon: Bars4Icon, current: false },
	{ name: "Closed", href: "#", icon: ArchiveBoxIcon, current: false },
	{ name: "Recent", href: "#", icon: ClockIcon, current: false },
];
const projects = [
	{ id: 1, name: "GraphQL API", href: "#" },
	{ id: 2, name: "iOS App", href: "#" },
	{ id: 3, name: "Marketing Site Redesign", href: "#" },
	{ id: 4, name: "Customer Portal", href: "#" },
];

const attachments = [
	{ name: "resume_front_end_developer.pdf", href: "#" },
	{ name: "coverletter_front_end_developer.pdf", href: "#" },
];

const EventDetails = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<>
			{/* <div className="max-w-3xl mx-auto mt-8 sm:px-6 lg:max-w-7xl ">
        <Columns columns="grid-cols-two3rd">
          <div className="border border-orange-800">
            <Panel> {eventDescription.description}</Panel>
          </div>
          <p className="border border-purple-800 "> event details 2 </p>
        </Columns>
      </div> */}
			<div className="flex min-h-full">
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-40 lg:hidden"
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
							<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
								<Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-800">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 right-0 pt-2 -mr-12">
											<button
												type="button"
												className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
												onClick={() =>
													setSidebarOpen(false)
												}
											>
												<span className="sr-only">
													Close sidebar
												</span>
												<XMarkIcon
													className="w-6 h-6 text-white"
													aria-hidden="true"
												/>
											</button>
										</div>
									</Transition.Child>
									<div className="flex items-center flex-shrink-0 px-4">
										<img
											className="w-auto h-8"
											src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
											alt="Your Company"
										/>
									</div>
									<div className="flex-1 h-0 mt-5 overflow-y-auto">
										<nav className="px-2">
											<div className="space-y-1">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? "bg-gray-900 text-white"
																: "text-gray-300 hover:bg-gray-700 hover:text-white",
															"group flex items-center rounded-md px-2 py-2 text-base font-medium"
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
																	? "text-gray-300"
																	: "text-gray-400 group-hover:text-gray-300",
																"mr-4 h-6 w-6 flex-shrink-0"
															)}
															aria-hidden="true"
														/>
														{item.name}
													</a>
												))}
											</div>
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
							<div
								className="flex-shrink-0 w-14"
								aria-hidden="true"
							>
								{/* Dummy element to force sidebar to shrink to fit close icon */}
							</div>
						</div>
					</Dialog>
				</Transition.Root>

				<div className="flex flex-col flex-1 w-0 lg:pl-64">
					<main className="flex-1">
						<div className="py-8 xl:py-10">
							<div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
								<div className="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
									<div>
										<div>
											<div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
												<div>
													<h1 className="text-2xl font-bold text-gray-900">
														ARIA attribute
														misspelled
													</h1>
													<p className="mt-2 text-sm text-gray-500">
														by{" "}
														<a
															href="#"
															className="font-medium text-cu-red"
														>
															Michael Corkum
														</a>
													</p>
												</div>
												<div className="flex mt-4 space-x-3 md:mt-0">
													<HeartIcon
														className="w-5 h-5 mr-2 -ml-1 text-gray-400"
														aria-hidden="true"
													/>
													{"  "}
													<ShareIcon
														className="w-5 h-5 mr-2 -ml-1 text-gray-400"
														aria-hidden="true"
													/>
												</div>
											</div>
											<aside className="mt-8 xl:hidden">
												<h2 className="sr-only">
													Details
												</h2>
												<div className="space-y-5">
													<div className="flex items-center space-x-2">
														<MapPinIcon
															className="w-5 h-5 text-gray-400"
															aria-hidden="true"
														/>
														<span className="text-sm font-medium text-gray-900">
															Raven's Nest
														</span>
													</div>

													<div className="flex items-center space-x-2">
														<CalendarIcon
															className="w-5 h-5 text-gray-400"
															aria-hidden="true"
														/>
														<span className="text-sm font-medium text-gray-900">
															<time dateTime="2020-12-02">
																Dec 2, 2020
															</time>
														</span>
													</div>
												</div>
												<div className="py-6 mt-6 space-y-8 border-t border-b border-gray-200">
													<div>
														<h2 className="text-sm font-medium text-gray-500">
															Created By
														</h2>
														<ul
															role="list"
															className="mt-3 space-y-3"
														>
															<li className="flex justify-start">
																<a
																	href="#"
																	className="flex items-center space-x-3"
																>
																	<div className="flex-shrink-0">
																		<img
																			className="w-5 h-5 rounded-full"
																			src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
																			alt=""
																		/>
																	</div>
																	<div className="text-sm font-medium text-gray-900">
																		Michael
																		Corkum
																	</div>
																</a>
															</li>
														</ul>
													</div>
													<div>
														<h2 className="text-sm font-medium text-gray-500">
															Project
														</h2>
														<ul
															role="list"
															className="mt-2 leading-8"
														>
															<li className="inline">
																<a
																	href="#"
																	className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
																>
																	<div className="text-sm font-medium text-gray-900 ">
																		Planning
																	</div>
																</a>{" "}
															</li>
															<li className="inline">
																<a
																	href="#"
																	className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
																>
																	<div className="text-sm font-medium text-gray-900 ">
																		Project
																		Mangement
																	</div>
																</a>{" "}
															</li>
														</ul>
													</div>
												</div>
											</aside>
											<div className="py-3 xl:pt-6 xl:pb-0">
												<h2 className="sr-only">
													Description
												</h2>
												<div className="prose max-w-none">
													<p>
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit.
														Expedita, hic? Commodi
														cumque similique id
														tempora molestiae
														deserunt at suscipit,
														dolor voluptatem,
														numquam, harum
														consequatur laboriosam
														voluptas tempore aut
														voluptatum alias?
													</p>
													<ul role="list">
														<li>
															Tempor ultrices
															proin nunc fames
															nunc ut auctor vitae
															sed. Eget massa
															parturient vulputate
															fermentum id
															facilisis nam
															pharetra. Aliquet
															leo tellus.
														</li>
														<li>
															Turpis ac nunc
															adipiscing
															adipiscing metus
															tincidunt senectus
															tellus.
														</li>
														<li>
															Semper interdum
															porta sit tincidunt.
															Dui suspendisse
															scelerisque amet
															metus eget sed. Ut
															tellus in sed
															dignissim.
														</li>
													</ul>
													<br></br>
													<p>
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit.
														Expedita, hic? Commodi
														cumque similique id
														tempora molestiae
														deserunt at suscipit,
														dolor voluptatem,
														numquam, harum
														consequatur laboriosam
														voluptas tempore aut
														voluptatum alias?
													</p>

													<br></br>
													<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
														<div className="sm:col-span-2">
															<dt className="text-sm font-medium text-gray-500">
																About
															</dt>
															<dd className="mt-1 text-sm text-gray-900">
																Fugiat ipsum
																ipsum deserunt
																culpa aute sint
																do nostrud anim
																incididunt
																cillum culpa
																consequat.
																Excepteur qui
																ipsum aliquip
																consequat sint.
																Sit id mollit
																nulla mollit
																nostrud in ea
																officia
																proident. Irure
																nostrud pariatur
																mollit ad
																adipisicing
																reprehenderit
																deserunt qui eu.
															</dd>
														</div>
														<div className="sm:col-span-1">
															<dt className="text-sm font-medium text-gray-500">
																Application Type
															</dt>
															<dd className="mt-1 text-sm text-gray-900">
																Events Calendar
															</dd>
														</div>
														<div className="sm:col-span-1">
															<dt className="text-sm font-medium text-gray-500">
																Contact person
															</dt>
															<dd className="mt-1 text-sm text-gray-900">
																ricardocooper@example.com
															</dd>
														</div>
														<div className="sm:col-span-1">
															<dt className="text-sm font-medium text-gray-500">
																Price
															</dt>
															<dd className="mt-1 text-sm text-gray-900">
																$120 per user
															</dd>
														</div>
														<div className="sm:col-span-1">
															<dt className="text-sm font-medium text-gray-500">
																Contact Us
															</dt>
															<dd className="mt-1 text-sm text-gray-900">
																+1 555-555-5555
															</dd>
														</div>

														<div className="p-10 sm:col-span-2">
															<img
																src="https://tailwindui.com/img/component-images/task-app-rose.jpg"
																alt=""
															/>
														</div>

														<div className="sm:col-span-2">
															<dt className="text-sm font-medium text-gray-500">
																Attachments
															</dt>
															<dd className="mt-1 text-sm text-gray-900">
																<ul
																	role="list"
																	className="border border-gray-200 divide-y divide-gray-200 rounded-md"
																>
																	{attachments.map(
																		(
																			attachment
																		) => (
																			<li
																				key={
																					attachment.name
																				}
																				className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
																			>
																				<div className="flex items-center flex-1 w-0">
																					<PaperClipIcon
																						className="flex-shrink-0 w-5 h-5 text-gray-400"
																						aria-hidden="true"
																					/>
																					<span className="flex-1 w-0 ml-2 truncate">
																						{
																							attachment.name
																						}
																					</span>
																				</div>
																				<div className="flex-shrink-0 ml-4">
																					<a
																						href={
																							attachment.href
																						}
																						className="font-medium text-blue-600 hover:text-blue-500"
																					>
																						Download
																					</a>
																				</div>
																			</li>
																		)
																	)}
																</ul>
															</dd>
														</div>
													</dl>
												</div>
												<div></div>
											</div>
										</div>
									</div>
									<section
										aria-labelledby="activity-title"
										className="mt-8 xl:mt-10"
									></section>
								</div>
								<aside className="hidden xl:block xl:pl-8">
									<h2 className="sr-only">Details</h2>
									<div className="space-y-5">
										<div className="flex items-center space-x-2">
											<MapPinIcon
												className="w-5 h-5 text-gray-400"
												aria-hidden="true"
											/>
											<span className="text-sm font-medium text-gray-900 ">
												Raven's Nest
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<CalendarIcon
												className="w-5 h-5 text-gray-400"
												aria-hidden="true"
											/>
											<span className="text-sm font-medium text-gray-900">
												<time dateTime="2020-12-02">
													Dec 2, 2020
												</time>
											</span>
										</div>
									</div>
									<div className="py-6 mt-6 space-y-8 border-t border-gray-200">
										<div>
											<h2 className="text-sm font-medium text-gray-500">
												Created By
											</h2>
											<ul
												role="list"
												className="mt-3 space-y-3"
											>
												<li className="flex justify-start">
													<a
														href="#"
														className="flex items-center space-x-3"
													>
														<div className="flex-shrink-0">
															<img
																className="w-5 h-5 rounded-full"
																src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
																alt=""
															/>
														</div>
														<div className="text-sm font-medium text-gray-900">
															Michael Corkum
														</div>
													</a>
												</li>
											</ul>
										</div>
										<div>
											<h2 className="text-sm font-medium text-gray-500">
												Categories
											</h2>
											<ul
												role="list"
												className="mt-2 leading-8"
											>
												<li className="inline">
													<a
														href="#"
														className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
													>
														<div className="text-sm font-medium text-gray-900 ">
															Planning
														</div>
													</a>{" "}
												</li>
												<li className="inline">
													<a
														href="#"
														className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
													>
														<div className="text-sm font-medium text-gray-900 ">
															Project Management
														</div>
													</a>{" "}
												</li>
											</ul>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default EventDetails;
