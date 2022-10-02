import type { NextPage } from "next";
import Head from "next/head";

import FooterBasic from "../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import Panel from "../../_rds-final/layouts/Panel/Panel";
import EventFilter from "../../_rds-final/components/Filter/Filter";
import SmallCalendar from "../../_rds-final/components/Calendar/SmallCalendar/SmallCalendar";

import FeaturedEventBanner from "../../components/Banner/FeaturedEventBanner";
import FeaturedEventListing from "../../components/Listings/FeaturedEventListing";

import EventListing from "../../components/Listings/EventListing";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<Container>
				<FeaturedEventBanner />
				<FeaturedEventListing />
			</Container>

			<main className="pb-4">
				<Container>
					<Column>
						<h2 className="text-2xl font-semibold text-cu-black-800 md:text-4xl">
							Upcoming Events
						</h2>
						<EventFilter />
					</Column>
					<Column>
						<Panel>
							<EventListing />
						</Panel>
						<SmallCalendar />
					</Column>
				</Container>
			</main>

			<FooterBasic />
		</>
	);
};

export default EventCalendar;
