import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../build-files/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../build-files/components/Navbar/EventNavbar";
import Container from "../../build-files/layouts/Container/Container";
import Column from "../../build-files/layouts/Columns/Columns";
import Panel from "../../build-files/layouts/Panel/Panel";
import BaseBanner from "../../build-files/components/Banner/BaseBanner/BaseBanner";
import EventCard from "../../build-files/components/Card/EventCard/EventCard";
import EventFilter from "../../build-files/components/Filter/Filter";
import SmallCalendar from "../../build-files/components/Calendar/SmallCalendar/SmallCalendar";

import EventListing from "../../template-parts/listings/EventListing";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<BaseBanner>Featured Events</BaseBanner>

			<main>
				<Container.Gray>
					<Column.Three>
						<EventCard />
						<EventCard />
						<EventCard />
					</Column.Three>
				</Container.Gray>

				<Container.White>
					<Column.One>
						<div className="flex items-start pt-2 max-w-7xl md:pt-4">
							<h1 className="text-3xl font-medium text-cu-black-800 md:text-4xl">
								Upcoming Events
							</h1>
						</div>
						<EventFilter />
					</Column.One>
					<Column.TwoThird>
						<Panel className="bg-white">
							<EventListing />
						</Panel>
						<SmallCalendar />
					</Column.TwoThird>
				</Container.White>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
