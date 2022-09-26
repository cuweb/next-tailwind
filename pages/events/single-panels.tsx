import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import BannerButtons from "../../_rds-final/components/Banner/BannerButtons/BannerButtons";
import DashboardPanel from "../../_rds-final/layouts/DashboardPanel/DashboardPanel";

import {
	MapPinIcon,
	PaperClipIcon,
	CalendarIcon,
	HeartIcon,
	ShareIcon,
} from "@heroicons/react/20/solid";

const attachments = [
	{ name: "resume_front_end_developer.pdf", href: "#" },
	{ name: "coverletter_front_end_developer.pdf", href: "#" },
];

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<BannerButtons>Single Event Example</BannerButtons>

			<main>
				<Container.Gray>
					<Column.TwoThird>
						<section aria-labelledby="applicant-information-title">
							<div className="bg-white shadow sm:rounded-lg">
								<div className="px-4 py-5 sm:px-6">
									<h2
										id="applicant-information-title"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Event Details
										<span className="flex float-right mt-4 mb-4 space-x-3 md:mt-0 md:pb-4">
											<HeartIcon
												className="w-5 h-5 mr-2 -ml-1 text-gray-400"
												aria-hidden="true"
											/>
											{"  "}
											<ShareIcon
												className="w-5 h-5 mr-2 -ml-1 text-gray-400"
												aria-hidden="true"
											/>
										</span>
									</h2>
								</div>
								<div className="px-4 py-5 border-t border-gray-200 sm:px-6">
									<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
										<div className="sm:col-span-2">
											<dt className="text-sm font-medium text-gray-500">
												About
											</dt>
											<dd className="mt-1 text-sm text-gray-900">
												Fugiat ipsum ipsum deserunt
												culpa aute sint do nostrud anim
												incididunt cillum culpa
												consequat. Excepteur qui ipsum
												aliquip consequat sint. Sit id
												mollit nulla mollit nostrud in
												ea officia proident. Irure
												nostrud pariatur mollit ad
												adipisicing reprehenderit
												deserunt qui eu.
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-gray-500">
												Application for
											</dt>
											<dd className="mt-1 text-sm text-gray-900">
												Backend Developer
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-gray-500">
												Email address
											</dt>
											<dd className="mt-1 text-sm text-gray-900">
												ricardocooper@example.com
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-gray-500">
												Salary expectation
											</dt>
											<dd className="mt-1 text-sm text-gray-900">
												$120,000
											</dd>
										</div>
										<div className="sm:col-span-1">
											<dt className="text-sm font-medium text-gray-500">
												Phone
											</dt>
											<dd className="mt-1 text-sm text-gray-900">
												+1 555-555-5555
											</dd>
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
														(attachment) => (
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
								<div>
									<div className="p-10">
										<img
											src="https://tailwindui.com/img/component-images/task-app-rose.jpg"
											alt=""
										/>
									</div>
								</div>
							</div>
						</section>

						<section
							aria-labelledby="timeline-title"
							className="lg:col-span-1 lg:col-start-3"
						>
							<div className="px-4 py-5 bg-white shadow sm:rounded-lg sm:px-6">
								<h2
									id="timeline-title"
									className="text-lg font-medium text-gray-900"
								>
									Details
								</h2>
								{/* Activity Feed */}
								<div className="flow-root mt-6">
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
								</div>
							</div>
						</section>
					</Column.TwoThird>
				</Container.Gray>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
