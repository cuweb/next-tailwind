import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../../_rds-final/components/Footer/FooterStandard/FooterStandard";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import Column from "../../_rds-final/layouts/Columns/Columns";
import Panel from "../../_rds-final/layouts/Panel/Panel";
import EventFilter from "../../_rds-final/components/Filter/Filter";
import SmallCalendar from "../../_rds-final/components/Calendar/SmallCalendar/SmallCalendar";

import FeaturedEventBanner from "../../components/Banner/FeaturedEventBanner";
import FeaturedEventListingImage from "../../components/Listings/FeaturedEventListingImage";

import EventListing from "../../components/Listings/EventListing";

const EventCalendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Event Calendar | Carleton University</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<header>
				<FeaturedEventBanner />
				<FeaturedEventListingImage />
			</header>

			<main className="pb-4">
				<Container>
					<Column>
						<h2 className="mb-3 text-3xl font-medium text-cu-black-800 lg:text-4xl">
							Upcoming Events
						</h2>
						<EventFilter />
					</Column>
					<Column cols="2/3">
						<Panel hasBorder>
							<EventListing />
						</Panel>
						<div className="hidden md:ml-2 md:block">
							<SmallCalendar />
						</div>
					</Column>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default EventCalendar;
