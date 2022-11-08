import type { NextPage } from "next";
import Head from "next/head";
import DropDown from "../misc/topnav/DropDown";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Column from "../../_rds-final/layouts/Columns/Columns";

import {
	CalendarDaysIcon,
	ChevronDownIcon,
	CurrencyDollarIcon,
	MapPinIcon,
	ShareIcon,
	ChatBubbleBottomCenterTextIcon,
	TagIcon,
} from "@heroicons/react/20/solid";
import DetailsListing from "../../components/Listings/DetailsListing";

const features = [
	{
		name: "405 Robertson Hall",
		description: "1125 Colonel By Drive, Ottawa, ON, K1A 4A4",
		icon: MapPinIcon,
	},
	{
		name: "October 2nd-10th, 2022",
		description: "2:00PM - 10:00PM",
		icon: CalendarDaysIcon,
	},
	{
		name: "Person McPersonface",
		description: "613-266-2628 / mcorkum@gmail.com",
		icon: ChatBubbleBottomCenterTextIcon,
	},
	{
		name: "Cost",
		description: "$100,0000",
		icon: CurrencyDollarIcon,
	},
];

// function classNames(...classes: any) {
// 	return classes.filter(Boolean).join(" ");
// }

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<div className="relative py-20 bg-gray-800 md:py-32">
				<div className="absolute inset-0">
					<img
						className="object-cover w-full h-full"
						src="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
						alt=""
					/>
					<div
						className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
						aria-hidden="true"
					/>
				</div>
				<main className="relative px-4 mx-auto max-w-7xl">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
							Lived Experience Luncheon Series with Dr. Alex
							Auerbach
						</h1>
					</div>
				</main>
			</div>

			<main className="mx-auto max-w-7xl pb-14 md:pb-0">
				<Column cols="2/3">
					<div>
						<div className="prose prose-lg text-gray-500 prose-indigo">
							<h2>
								<span className="block mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
									Interesting Event Heading
								</span>
							</h2>
							<p className="mt-8 text-xl leading-8 text-gray-500">
								Aliquet nec orci mattis amet quisque ullamcorper
								neque, nibh sem. At arcu, sit dui mi, nibh dui,
								diam eget aliquam. Quisque id at vitae feugiat
								egestas ac. Diam nulla orci at in viverra
								scelerisque eget. Eleifend egestas fringilla
								sapien.
							</p>
							<p>
								Faucibus commodo massa rhoncus, volutpat.{" "}
								<strong>Dignissim</strong> sed{" "}
								<strong>eget risus enim</strong>. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit. Faucibus
								commodo massa rhoncus, volutpat. Dignissim sed
								eget risus enim.{" "}
								<a href="#">Mattis mauris semper</a> sed amet
								vitae sed turpis id.
							</p>
							<ul role="list">
								<li>
									Quis elit egestas venenatis mattis
									dignissim.
								</li>
								<li>
									Cras cras lobortis vitae vivamus ultricies
									facilisis tempus.
								</li>
								<li>
									Orci in sit morbi dignissim metus diam arcu
									pretium.
								</li>
							</ul>
							<p>
								Quis semper vulputate aliquam venenatis egestas
								sagittis quisque orci. Donec commodo sit viverra
								aliquam porttitor ultrices gravida eu. Tincidunt
								leo, elementum mattis elementum ut nisl, justo,
								amet, mattis. Nunc purus, diam commodo tincidunt
								turpis. Amet, duis sed elit interdum dignissim.
							</p>
							<h2>Could these headings be more interesting?</h2>
							<p>
								Id orci tellus laoreet id ac. Dolor, aenean leo,
								ac etiam consequat in. Convallis arcu ipsum urna
								nibh. Pharetra, euismod vitae interdum mauris
								enim, consequat vulputate nibh. Maecenas
								pellentesque id sed tellus mauris, ultrices
								mauris. Tincidunt enim cursus ridiculus mi.
								Pellentesque nam sed nullam sed diam turpis
								ipsum eu a sed convallis diam.
							</p>
							<blockquote>
								<p>
									Sagittis scelerisque nulla cursus in enim
									consectetur quam. Dictum urna sed
									consectetur neque tristique pellentesque.
									Blandit amet, sed aenean erat arcu morbi.
								</p>
							</blockquote>
							<p>
								Faucibus commodo massa rhoncus, volutpat.
								Dignissim sed eget risus enim. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit.
							</p>
							<figure>
								<img
									className="w-full rounded-lg"
									src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
									alt=""
									width={1310}
									height={873}
								/>
								<figcaption>
									Sagittis scelerisque nulla cursus in enim
									consectetur quam.
								</figcaption>
							</figure>
							<h2>No, they are maximum interesting</h2>
							<p>
								Purus morbi dignissim senectus mattis{" "}
								<a href="#">adipiscing</a>. Amet, massa quam
								varius orci dapibus volutpat cras. In amet eu
								ridiculus leo sodales cursus tristique.
								Tincidunt sed tempus ut viverra ridiculus non
								molestie. Gravida quis fringilla amet eget dui
								tempor dignissim. Facilisis auctor venenatis
								varius nunc, congue erat ac. Cras fermentum
								convallis quam.
							</p>
							<p>
								Faucibus commodo massa rhoncus, volutpat.
								Dignissim sed eget risus enim. Mattis mauris
								semper sed amet vitae sed turpis id. Id dolor
								praesent donec est. Odio penatibus risus viverra
								tellus varius sit neque erat velit.
							</p>
						</div>

						<div className="flex gap-4 mt-8">
							<DropDown isType="button" />
							<DropDown isType="button" />
						</div>

						<Menu
							as="div"
							className="relative inline-block mt-8 text-left"
						>
							<div>
								<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
									<ShareIcon
										className="w-5 h-5 mr-2"
										aria-hidden="true"
									/>
									Share Event
									<ChevronDownIcon
										className="w-5 h-5 ml-2 -mr-1"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className="flex items-center px-4 py-2 text-sm hover:bg-cu-black-50"
												>
													<svg
														className="w-4 h-4 mr-2 fill-cu-black-400"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
													</svg>
													Twitter
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className="flex items-center px-4 py-2 text-sm hover:bg-cu-black-50"
												>
													<svg
														className="w-4 h-4 mr-2 fill-cu-black-400"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 448 512"
													>
														<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
													</svg>
													LinkedIn
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className="flex items-center px-4 py-2 text-sm hover:bg-cu-black-50"
												>
													<svg
														className="w-4 h-4 mr-2 fill-cu-black-400"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 320 512"
													>
														<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
													</svg>
													Facebook
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className="flex items-center px-4 py-2 text-sm hover:bg-cu-black-50"
												>
													<svg
														className="w-4 h-4 mr-2 fill-cu-black-400"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
													</svg>
													Email
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className="flex items-center px-4 py-2 text-sm hover:bg-cu-black-50"
												>
													<svg
														className="w-4 h-4 mr-2 fill-cu-black-400"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 448 512"
													>
														<path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
													</svg>
													Add to Calendar
												</a>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>

					<aside className="relative">
						<div className="sticky top-28">
							<div className="flex gap-6 mb-6">
								<button
									type="button"
									aria-label="Add to My Events"
									className="inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
								>
									<span className="mr-2"></span>
									Add to My Events
								</button>

								<button
									type="button"
									aria-label="Register Now"
									className="inline-flex items-center justify-center px-4 py-3 font-medium text-white bg-white border rounded-md false border-1 border-cu-red text-cu-red hover:bg-cu-red hover:text-white focus:outline-none"
								>
									<span className="mr-2"></span>
									Register Now
								</button>
							</div>

							<DetailsListing />

							{/* <ul className="flex flex-wrap gap-2 mt-4">
                <li className="inline-flex">
                  <a
                    href="#"
                    className="flex items-center px-2 py-1 text-xs font-semibold rounded-md whitespace-nowrap bg-cu-black-100 text-cu-black-700 hover:bg-cu-red hover:text-white"
                  >
                    <TagIcon className="mr-1.5 h-4 w-4 text-cu-black-400" />
                    Faculty Event
                  </a>
                </li>
                <li className="inline-flex">
                  <a
                    href="#"
                    className="flex items-center px-2 py-1 text-xs font-semibold rounded-md whitespace-nowrap bg-cu-black-100 text-cu-black-700 hover:bg-cu-red hover:text-white"
                  >
                    <TagIcon className="mr-1.5 h-4 w-4 text-cu-black-400" />
                    Student Event
                  </a>
                </li>
                <li className="inline-flex">
                  <a
                    href="#"
                    className="flex items-center px-2 py-1 text-xs font-semibold rounded-md whitespace-nowrap bg-cu-black-100 text-cu-black-700 hover:bg-cu-red hover:text-white"
                  >
                    <TagIcon className="mr-1.5 h-4 w-4 text-cu-black-400" />
                    Luncheon
                  </a>
                </li>
                <li className="inline-flex">
                  <a
                    href="#"
                    className="flex items-center px-2 py-1 text-xs font-semibold rounded-md whitespace-nowrap bg-cu-black-100 text-cu-black-700 hover:bg-cu-red hover:text-white"
                  >
                    <TagIcon className="mr-1.5 h-4 w-4 text-cu-black-400" />
                    On-Campus Event
                  </a>
                </li>
                <li className="inline-flex">
                  <a
                    href="#"
                    className="flex items-center px-2 py-1 text-xs font-semibold rounded-md whitespace-nowrap bg-cu-black-100 text-cu-black-700 hover:bg-cu-red hover:text-white"
                  >
                    <TagIcon className="mr-1.5 h-4 w-4 text-cu-black-400" />
                    Online Available
                  </a>
                </li>
                            </ul> */}
						</div>
					</aside>
				</Column>

				<Column>
					<div className="overflow-hidden rounded-lg bg-cu-black-50">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.1407807835403!2d-75.69560014816834!3d45.38633087899766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05dee0ae65eb%3A0x17feb47012b59f30!2sCarleton%20University%20Raven&#39;s%20Nest!5e0!3m2!1sen!2sca!4v1664032553405!5m2!1sen!2sca"
							width="100%"
							height="500"
							style={{ border: 0 }}
							// allowfullscreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</Column>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
