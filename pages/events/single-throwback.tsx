import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import BannerButtons from "../../_rds-final/components/Banner/BannerButtons/BannerButtons";
import Panel from "../../_rds-final/layouts/Panel/Panel";

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
				<Container.White>
					{/* <Column.OneThird maxWidth="max-w-3xl md:max-w-4xl"> */}
					<Column.TwoThird>
						<article>
							<p className="pb-12 text-lg">
								Sagittis scelerisque nulla cursus in enim
								consectetur quam. Dictum urna sed consectetur
								neque tristique pellentesque. Blandit amet, sed
								aenean erat arcu morbi. Cursus faucibus nunc
								nisl netus morbi vel porttitor vitae ut. Amet
								vitae fames senectus vitae.
							</p>

							<h2 className="pb-8 text-2xl font-semibold text-cu-black-800">
								Event Details
							</h2>
							<dl className="grid grid-cols-2 mb-12 gap-x-4 gap-y-8">
								<div className="pt-6 border-t-2 border-cu-black-50">
									<dt className="text-base text-cu-black-400">
										When
									</dt>
									<dd className="text-2xl font-semibold text-cu-blue">
										Sept 12, 2022
									</dd>
								</div>

								<div className="pt-6 border-t-2 border-cu-black-50">
									<dt className="text-base text-cu-black-400">
										Where
									</dt>
									<dd className="text-2xl font-semibold text-cu-blue">
										Richcraft Building
									</dd>
								</div>

								<div className="pt-6 border-t-2 border-cu-black-50">
									<dt className="text-base text-cu-black-400">
										Time
									</dt>
									<dd className="text-2xl font-semibold text-cu-blue">
										2:00pm
									</dd>
								</div>

								<div className="pt-6 border-t-2 border-cu-black-50">
									<dt className="text-base text-cu-black-400">
										Cost
									</dt>
									<dd className="text-2xl font-semibold text-cu-blue">
										$25
									</dd>
								</div>
							</dl>

							<p className="pb-6 text-base">
								Sollicitudin tristique eros erat odio sed vitae,
								consequat turpis elementum. Lorem nibh vel, eget
								pretium arcu vitae. Eros eu viverra donec ut
								volutpat donec laoreet quam urna. Sollicitudin
								tristique eros erat odio sed vitae, consequat
								turpis elementum. Lorem nibh vel, eget pretium
								arcu vitae. Eros eu viverra donec ut volutpat
								donec laoreet quam urna.
							</p>
							<p className="pb-6 text-base">
								Rhoncus nisl, libero egestas diam fermentum dui.
								At quis tincidunt vel ultricies. Vulputate
								aliquet velit faucibus semper. Pellentesque in
								venenatis vestibulum consectetur nibh id. In id
								ut tempus egestas. Enim sit aliquam nec, a.
								Morbi enim fermentum lacus in. Viverra.
							</p>
						</article>

						<aside>
							<Panel className="overflow-hidden rounded-lg bg-cu-black-50">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.1407807835403!2d-75.69560014816834!3d45.38633087899766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05dee0ae65eb%3A0x17feb47012b59f30!2sCarleton%20University%20Raven&#39;s%20Nest!5e0!3m2!1sen!2sca!4v1664032553405!5m2!1sen!2sca"
									width="100%"
									height="400"
									style={{ border: 0 }}
									// allowfullscreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</Panel>

							<Panel className="px-6 py-6 mt-6 rounded-lg bg-cu-black-50">
								<dl className="grid gap-x-4 gap-y-8">
									<div className="border-t-2 border-cu-black-50">
										<dt className="text-base font-semibold text-cu-black-900">
											Location Details
										</dt>
										<dd className="mb-6 text-base text-cu-black-600">
											Atrium, Second Floor Richcraft
											Building, 1125 Colonel By Dr,
											Ottawa, ON
										</dd>
										<dt className="text-base font-semibold text-cu-black-900">
											Contact Information
										</dt>
										<dd className="text-base text-cu-black-600">
											Carleton University Alumni
											Association, 6135203636,
											advancement@carleton.ca
										</dd>
									</div>
								</dl>
							</Panel>
						</aside>
					</Column.TwoThird>
				</Container.White>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
