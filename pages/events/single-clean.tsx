import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../build-files/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../build-files/components/Navbar/EventNavbar";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";
import Panel from "../../build-files/layouts/Panel/Panel";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<div className="relative px-8 pt-12 pb-6 mx-auto max-w-7xl md:pt-24">
				<h1 className="text-4xl font-semibold text-cu-black-800 md:text-5xl">
					Milestone Anniversary Celebration 2022
				</h1>
				<p className="max-w-3xl mt-6 text-xl text-cu-black-500">
					Varius facilisi mauris sed sit. Non sed et duis dui leo,
					vulputate id malesuada. Cras aliquet purus dui laoreet diam
					sed lacus, fames.
				</p>
			</div>

			<main className="pb-16">
				<div className="flex gap-16 px-8 mx-auto max-w-7xl">
					<article>
						<ul>
							<li className="text-xl text-cu-black-500">Item</li>
						</ul>
						<p className="max-w-3xl my-6 text-base text-cu-black-800">
							Varius facilisi mauris sed sit. Non sed et duis dui
							leo, vulputate id malesuada. Cras aliquet purus dui
							laoreet diam sed lacus, fames.
						</p>
						<p className="max-w-3xl my-6 text-base text-cu-black-800">
							Varius facilisi mauris sed sit. Non sed et duis dui
							leo, vulputate id malesuada. Cras aliquet purus dui
							laoreet diam sed lacus, fames.
						</p>
					</article>
					<aside className="overflow-hidden rounded-lg bg-cu-black-50">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.1407807835403!2d-75.69560014816834!3d45.38633087899766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05dee0ae65eb%3A0x17feb47012b59f30!2sCarleton%20University%20Raven&#39;s%20Nest!5e0!3m2!1sen!2sca!4v1664032553405!5m2!1sen!2sca"
							width="600"
							height="300"
							style={{ border: 0 }}
							// allowfullscreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</aside>
				</div>
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
