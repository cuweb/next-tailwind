import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Column from "../../_rds-final/layouts/Columns/Columns";
import Button from "../../_rds-final/components/Button/Button";

import {
	CalendarDaysIcon,
	ClockIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<header className="relative px-8 pt-12 pb-2 mx-auto max-w-7xl md:pt-16">
				<h1 className="mb-8 text-4xl font-semibold text-cu-black-800 md:text-5xl">
					Milestone Anniversary Celebration 2022
				</h1>
				<ul className="flex gap-16">
					<li className="flex items-center text-xl text-cu-black-500">
						<CalendarDaysIcon
							className="w-8 h-8 mr-2 text-cu-red-tint-5"
							aria-hidden="true"
						/>
						October 7th, 2022
					</li>
					<li className="flex items-center text-xl text-cu-black-500">
						<ClockIcon
							className="w-8 h-8 mr-2 text-cu-red-tint-5"
							aria-hidden="true"
						/>
						<time dateTime={"10-07-2022"}>
							2:00 pm &mdash; 10:00 pm
						</time>
					</li>
					<li className="flex items-center text-xl text-cu-black-500">
						<MapPinIcon
							className="w-8 h-8 mr-2 text-cu-red-tint-5"
							aria-hidden="true"
						/>
						401 Robertson Hall
					</li>
				</ul>
			</header>

			<main className="pb-16 mx-auto max-w-7xl">
				<Column.TwoThird>
					<article className="max-w-3xl">
						<p className="mb-8 text-xl text-cu-black-700 last:mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Nulla ultrices ultricies consectetur. Praesent
							vehicula elementum velit, vel suscipit purus
							vestibulum ut. Duis et magna placerat, rhoncus nisl
							non, volutpat augue. Ut ut neque nec nunc dignissim
							imperdiet in nec diam. Fusce tempor enim purus, a
							volutpat nisl tempor sit amet. Donec lacinia eu
							tellus non pharetra. Nullam in nunc luctus, iaculis
							velit eu, posuere nisl.
						</p>
						<p className="mb-8 text-xl text-cu-black-700 last:mb-0">
							Varius facilisi mauris sed sit. Non sed et duis dui
							leo, vulputate id malesuada. Cras aliquet purus dui
							laoreet diam sed lacus, fames. Duis et magna
							placerat, rhoncus nisl non, volutpat augue.
						</p>
					</article>
					<aside>
						<button
							type="button"
							className="items-center w-full p-6 mb-4 text-lg font-medium text-white border border-transparent rounded-md shadow-sm bg-cu-red last:mb-0 hover:bg-cu-blue focus:outline-none focus:ring-2 focus:ring-cu-blue-tint-8 focus:ring-offset-2"
						>
							Register Now <span aria-hidden="true"> &rarr;</span>
						</button>
						<button
							type="button"
							className="items-center w-full p-6 mb-4 text-lg font-medium border rounded-md shadow-sm border-cu-blue-tint-3 text-cu-blue last:mb-0 hover:bg-cu-blue-tint-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-cu-blue-tint-8 focus:ring-offset-2"
						>
							Add to My Events{" "}
							<span aria-hidden="true"> &rarr;</span>
						</button>
					</aside>
				</Column.TwoThird>

				<Column.One>
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
				</Column.One>
			</main>

			{/* <header className="pt-12 mx-auto max-w-7xl md:py-24">
				<Column.TwoThird>
					<div className="items-center max-w-3xl">
						<h1 className="text-4xl font-semibold text-cu-black-800 md:text-5xl">
							Milestone Anniversary Celebration 2022
						</h1>
						<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
							Anim aute id magna aliqua ad ad non deserunt sunt.
							Qui irure qui lorem cupidatat commodo. Elit sunt
							amet fugiat veniam occaecat fugiat aliqua ad ad non
							deserunt sunt.
						</p>
					</div>

					<div className="overflow-hidden rounded-lg">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.1407807835403!2d-75.69560014816834!3d45.38633087899766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05dee0ae65eb%3A0x17feb47012b59f30!2sCarleton%20University%20Raven&#39;s%20Nest!5e0!3m2!1sen!2sca!4v1664032553405!5m2!1sen!2sca"
							width="100%"
							height="300"
							style={{ border: 0 }}
							// allowfullscreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</Column.TwoThird>
			</header> */}

			<Footer />
		</>
	);
};

export default EventCalendar;
